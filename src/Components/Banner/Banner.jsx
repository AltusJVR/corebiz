/* import banner from './img/Banner.jpg';
import banner_overlay from './img/Banner.svg'; */
import style from './banner.module.scss'

const Banner = () => {
  return (
    <header>
      <div className={style.banner__container}>
        <div className={style.banner__content}>
          <p >Olá, o que você está buscando?</p>
          <p className={style.banner__lead}>Criar ou migrar seu e-commerce?</p>
        </div>
        <div className={style.banner__scroll}>
          <div className={style.banner__scroll_dots}></div>
          <div className={style.banner__scroll_dots}></div>
          <div className={style.banner__scroll_dots}></div>
          <div className={style.banner__scroll_dots}></div>
        </div>
      </div>



    </header>
  );
}

export default Banner;