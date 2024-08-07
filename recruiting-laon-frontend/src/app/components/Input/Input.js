import styles from "./Input.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

function Input({ type, placeholder, passwordVisible }) {
    return <>
        {type === 'password' ?
            <>
                <input className={styles.input} type={type} placeholder={placeholder} />
                <span className={styles.eyeIcon}>
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
            </>
            :
            <input className={styles.input} type={type} placeholder={placeholder} />
        }
    </>
}

export default Input;