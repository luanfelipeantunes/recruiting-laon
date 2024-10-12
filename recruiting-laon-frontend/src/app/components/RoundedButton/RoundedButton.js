import style from './RoundedButton.module.css';

function RoundedButton({ children, handleClick, styles}) {
    return (
        <button
            className={style.roundedButton}
            onClick={handleClick}
            style={styles}
        >
            {children}
        </button>
    );
}

export default RoundedButton;