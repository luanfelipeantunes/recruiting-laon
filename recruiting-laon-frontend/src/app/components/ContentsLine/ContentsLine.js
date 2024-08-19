import styles from './ContentsLine.module.css';
import { FaArrowRight } from "react-icons/fa6";
import Icon from '../Icon/Icon';
import { Constants } from '../../Utils/Contants';
import { Link } from 'react-router-dom';

function ContentsLine({ title, contents }) {

    return <>
        <div className={styles.headerContents}>
            <h4 className="semibold16"> {title} </h4>
            <Icon> <FaArrowRight /> </Icon>
        </div>

        <div className={styles.gridContents}>

            {contents.map(content => (
                <span className={styles.cardImage} key={content.id}>
                    <Link to={`/movie/${content.id}`}>
                        <img src={`${Constants.urlRaiz}/${content.thumbnail}`} alt={content.original_title}/>
                    </Link>
                </span>
            ))}
        </div>

    </>
}

export default ContentsLine;