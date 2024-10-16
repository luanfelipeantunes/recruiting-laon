import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import styles from "./styles/Movie.module.css";
import Infos from "../components/Infos/Infos";
import Background from "../components/Container/Background";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../Utils/Utils";
import { Constants } from "../Utils/Contants";
import Loader from 'react-js-loader';
import HeaderBetter from "../components/Header/HeaderBetter";
import Tag from "../components/Tag/Tag";
import RoundedButton from "../components/RoundedButton/RoundedButton";
import { FaRegStar, FaStar } from "react-icons/fa6";

function Movie() {

    const id = useParams().id;
    const [content, setContent] = useState();
    const [loading, setLoading] = useState(true);
    const [awards, setAwards] = useState();
    const [actors, setActors] = useState();
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoriteLoading, setFavoriteLoading] = useState(false);

    //eslint-disable-next-line
    const [categories, setCategories] = useState();

    //Busca o conteúdo pelo id
    useEffect(() => {
        setLoading(true);
        axiosInstance.get(Constants.baseUrl + '/contents/' + id)
            .then((response) => {
                setContent(response.data);

                setActors(response.data.actors);
                setAwards(response.data.awards);
                setCategories(response.data.categories);

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    //Busca os filmes favoritados pelo usuário
    //E verifica se o filme atual está na lista de favoritos
    //Se estiver, o botão de favoritar fica com layout de favoritado
    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + '/favorites')
        .then((response) => {
            const favorites = response.data;
            if(favorites.some(fav => fav.id == id)) {
                setIsFavorite(true);
            }
            
        })
        .catch((error) => {
            console.error(error);
        })
    }, [id]);

    //Calcula a duração do filme
    const calculateDuration = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;

        return `${hours}h${minutes}min`;
    }

    //Função para favoritar um filme
    //Se o filme já estiver favoritado, é removido
    const handleFavorite = () => {
        setFavoriteLoading(true);
        axiosInstance.post(Constants.baseUrl + '/favorite/' + id)
        .then((response) => {
            console.log(response);
            setIsFavorite(!isFavorite);
        })
        .catch((error) => {
            console.error(error);
        }).finally(() => {
            setFavoriteLoading(false);
        })
    }

    return <>
        <Background>
            <HeaderBetter />
            <Container>

                {loading ? (<Loader type="box-rectangular" bgColor="var(--white)" size={100} />
                ) : (
                    <div className={styles.container}>
                        <div className={styles.thumb}>
                            <img src={`${Constants.urlRaiz}/${content.thumbnail}`} alt="Thumbnail" />
                            <span className={styles.hiddenMobile}>
                                <Button style={{ width: '306px', height: '56px' }}> Assistir trailer </Button>
                            </span>
                        </div>
                        <div className={styles.infosAside}>

                            <div className={styles.movieInfo}>
                                <div className={styles.headerInfos}>
                                    <h1 className="semibold40"> {content.title} </h1>
                                    <p className="semibold16"> Título original: <span className="regular16">{content.original_title}</span></p>
                                    <p className="semibold16"> Ano: <span className="regular16">{content.year}</span></p>
                                    <p className="semibold16"> Duração: <span className="regular16">{calculateDuration(content.duration)}</span></p>
                                    <ul className={styles.tags}>
                                        {categories.map(category => (
                                            <li key={category.id}>
                                                <Tag>{category.name}</Tag>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.buttonAside}>
                                    <RoundedButton
                                        handleClick={handleFavorite}
                                        styles={isFavorite ? { backgroundColor: '#FFA500', color: 'var(--white)'} : {}}
                                        isLoading={favoriteLoading}
                                    >
                                        {isFavorite ? (
                                            <> <FaStar /> Favoritado </>
                                        ) : (
                                            <> <FaRegStar /> Favoritar </>
                                        )}
                                    </RoundedButton>

                                </div>

                            </div>

                            <div className={styles.infoContent}>
                                <Infos style={{ width: '100%' }} title="Sinopse" subtitle={content.synopsis} />
                                <Infos style={{ width: '49%', marginRight: '2%' }} title="Elenco" subtitle={actors.map(actor => actor.name).join(', ')} />
                                <Infos style={{ width: '49%' }} title="Prêmios" subtitle={awards.map(award => award.name).join(', ')} />
                                <Infos style={{ width: '49%', marginRight: '2%' }} title="Diretor" subtitle={content.director} />
                                <Infos style={{ width: '49%' }} title="Avaliações" subtitle={content.ratings} valueRatings={content.ratings} />
                            </div>
                        </div>
                    </div>
                )}

            </Container>
        </Background>

        <Footer />
    </>
}

export default Movie; 