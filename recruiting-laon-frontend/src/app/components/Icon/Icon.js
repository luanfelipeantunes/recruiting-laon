import styles from './Icon.module.css';

function Icon({ children }) {

    return (
        <span className={styles.container}>
            {children}
        </span>
    );
}

export default Icon;