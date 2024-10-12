import LoaderBetter from '../LoaderBetter/LoaderBetter';
import style from './RoundedButton.module.css';

function RoundedButton({ children, handleClick, styles, isLoading }) {
    return (
        <button
            className={style.roundedButton}
            onClick={handleClick}
            style={styles}
        >
            {isLoading ? (
                <LoaderBetter size={40} />
            ) : (
                children
            )}
        </button>
    );
}

export default RoundedButton;