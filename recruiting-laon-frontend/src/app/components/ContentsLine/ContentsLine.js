import styles from './ContentsLine.module.css';
import { FaArrowRight } from "react-icons/fa6";
import Icon from '../Icon/Icon';
import { Constants } from '../../Utils/Contants';
import { Link } from 'react-router-dom';

function ContentsLine({ title, contents, hiddeHeader, link}) {

    return <>
        {!hiddeHeader &&
            <div className={styles.headerContents}>
                <h4 className="semibold16"> {title} </h4>
                <Link to={link}>
                    <Icon> <FaArrowRight /> </Icon>
                </Link>
            </div>
        }

        <div className={styles.gridContents}>

            {contents.map(content => (
                <span className={styles.cardImage} key={content.id}>
                    <Link to={`/movies/${content.id}`}>
                        <img src={`${Constants.urlRaiz}/${content.thumbnail}`} alt={content.original_title} />
                    </Link>
                </span>
            ))}
        </div>

    </>
}

export default ContentsLine;