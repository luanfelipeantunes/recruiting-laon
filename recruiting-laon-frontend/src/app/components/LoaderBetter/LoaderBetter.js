import Loader from "react-js-loader";
import style from './LoaderBetter.module.css';

function LoaderBetter({size}){
    return (
        <div className={style.loaderContainer}>
            <Loader type="box-rectangular" bgColor="var(--gray-100)" size={size}/>
        </div>
    )
}

export default LoaderBetter;