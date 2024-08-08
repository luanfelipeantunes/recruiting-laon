import { useState } from "react";
import styles from "./Input.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

function Input({ type, placeholder}) {

    const [passwordVisible, setPasswordVisible] = useState(false);

    return <>
        {type === 'password' ?
            <>
                <input className={styles.input} type={passwordVisible ? 'text' : 'password'} placeholder={placeholder} />

                <span className={styles.eyeIcon} onClick={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
                
            </>
            :
            <input className={styles.input} type={type} placeholder={placeholder} />
        }
    </>
}

export default Input;