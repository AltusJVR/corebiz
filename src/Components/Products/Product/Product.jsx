import Stars from '../Product/Stars/Stars';
import style from './Product.module.scss';


const Product = (props) => {



  return (
    <a href="/" className={style.product__card}>
      <div className={style.product__image_container}>
        <img la src={props.imageUrl} alt={props.name} />
        {props.listPrice ? <div className={style.product__overlay}>OFF</div> : <></>}
      </div>
      <div className={style.product__body}>
        <p className={style.product__name}>{props.name}</p>
        <Stars stars={props.stars} />
        <p className={style.product__price}>{props.price}</p>
        <button className={style.product__buy} onClick={props.cart} >COMPRAR</button>
      </div>

    </a>
  );
}

export default Product;