import style from './RoundedButton.module.css';

function RoundedButton({ children, handleClick }) {
    return (
        <button
            className={style.roundedButton}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default RoundedButton;