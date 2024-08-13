import styles from "./Infos.module.css";

function Infos({style, title, subtitle}) {
  return (
    <div className={styles.content} style={style}>
      <h3 className="semibold16"> {title} </h3>
      <p className="regular16"> {subtitle} </p>
    </div>
  );
}

export default Infos;