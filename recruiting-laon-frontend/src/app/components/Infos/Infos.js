import { FaStar } from "react-icons/fa6";
import styles from "./Infos.module.css";

function Infos({style, title, subtitle, valueRatings}) {
  return (
    <div className={styles.content} style={style}>
      <h3 className="semibold16"> {title} </h3>
      <p className="regular16"> {subtitle} </p>

      {valueRatings && (
        Array.from({length: valueRatings}).map((_, index) => (
          <FaStar key={index} className={styles.star} />
        ))
      )}
    </div>
  );
}

export default Infos;