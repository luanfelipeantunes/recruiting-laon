import styles from "./FormBox.module.css";

function FormBox({children}){
    return(
        <div className={styles.formBox}>

            <h1 className="semibold24">Cadastre-se</h1>
            <h2 className="regular16"> Acompanhe os melhores filmes e séries. </h2>

            {children}
        </div>
    )
}

export default FormBox;