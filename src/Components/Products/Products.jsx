/* Image Imports */

import arr_l from './img/Arrow_left.svg';
import arr_r from './img/Arrow_right.svg';
import style from './Products.module.scss';


/* Product Component Import */
import Product from './Product/Product';

const Products = (props) => {
  /* Itterates over each product returned from the api inserts an image, price, name, rating and a buy now button */
  const products = props.products.map((product) => {
    return (
      <Product
        imageUrl={product.imageUrl}
        key={product.productId}
        price={product.price}
        name={product.productName}
        stars={product.stars}
        cart={props.cart}
        listPrice={product.listPrice}
      >
      </Product>
    )
  })

  return (
    <main>
      <h3 className={style.products__heading}>Mais Vendidos</h3>

      <div className={style.products__container}>
        <img className={style.products__arrow} src={arr_l} alt="Slider Arrow Left" />
        {products}
        <img className={style.products__arrow} src={arr_r} alt="Slider Arrow Right" />
      </div>

    </main>
  );
}

export default Products;