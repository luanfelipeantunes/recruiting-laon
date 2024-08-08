import styles from './ContentsLine.module.css';
import image from '../../img/6c71afa89fd8ed8999b3e04d8d794a0e.webp'

function ContentsLine() {
    return <>
        <h4 className="semibold16"> Filmes </h4>

        <div className={styles.gridContents}>
            <span className={styles.cardImage}>
                <img src={image} />
            </span>

            <span className={styles.cardImage}>
                <img src={image}/>
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