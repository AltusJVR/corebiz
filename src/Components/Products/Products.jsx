/* Image Imports */

import arr_l from './img/Arrow_left.svg';
import arr_r from './img/Arrow_right.svg';


/* Product Component Import */
import Product from './Product/Product';

const Products = () => {
  return (
    <main>
      <h3>Mais Vendidos</h3>
      <img src={arr_l} alt="Slider Arrow Left" />
      <Product />
      <img src={arr_r} alt="Slider Arrow Right" />
    </main>
  );
}

export default Products;