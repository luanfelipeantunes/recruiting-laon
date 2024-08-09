import styles from './ContentsLine.module.css';
import { FaArrowRight } from "react-icons/fa6";
import Icon from '../Icon/Icon';
import image from '../../img/6c71afa89fd8ed8999b3e04d8d794a0e.webp'

function ContentsLine({title}) {
    return <>
        <div className={styles.headerContents}>
            <h4 className="semibold16" style={{ color: 'var(--gray-500)' }}> {title} </h4>
            <Icon> <FaArrowRight /> </Icon>
        </div>

        <div className={styles.gridContents}>
            <span className={styles.cardImage}>
                <img src={image} />
            </span>
            <span className={styles.cardImage}>
                <img src={image} />
            </span>
            <span className={styles.cardImage}>
                <img src={image} />
            </span>
            <span className={styles.cardImage}>
                <img src={image} />
            </span>
            <span className={styles.cardImage}>
                <img src={image} />
            </span>
            <span className={styles.cardImage}>
                <img src={image} />
            </span>
            <span className={styles.cardImage}>
                <img src={image} />
            </span>
            <span className={styles.cardImage}>
                <img src={image} />
            </span>
        </div>

    </>
}

export default ContentsLine;