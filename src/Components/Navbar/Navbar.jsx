import corebiz_logo from './img/corebiz_logo.svg';
import cart_icon from './img/cart_icon.svg';
import acc_1 from './img/account_icon-1.svg';
import acc_2 from './img/account_icon-2.svg';
import search_icon from './img/search_icon.svg';

import style from './Navbar.module.scss';

const Navbar = (props) => {

  return (

    <nav className={style.nav}>
      {/* logo Container */}
      <div className={style.nav__logo_container}>
        <img className={style.nav__logo} src={corebiz_logo} alt="Corebiz Logo" />
        <span className={style.nav__logo_accent} >.</span>
      </div>


      {/* Search Container */}
      <div className={style.nav__search_container}>
        <input className={style.nav__search} type="text" name="search" id="search" placeholder="O que está procurando?" />
        <img className={style.nav__search_icon} src={search_icon} alt="" />
      </div>


      <a className={style.nav__account} href="/">
        <div className={style.nav__account_icon}>
          <img src={acc_1} alt="" />
          <img src={acc_2} alt="" />
        </div>
          Minha Conta
          </a>


      <a className={style.nav__cart} href="/">
        <img className={style.nav__cart_icon} src={cart_icon} alt="Shopping Cart" />
        <div className={style.nav__cart_count_container}>
          <div className={style.nav__cart_count}>{props.cart}</div>
        </div>
      </a>
    </nav>
  );
}

export default Navbar;