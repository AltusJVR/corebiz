import corebiz_logo from './img/corebiz_logo.svg'
import cart_icon from './img/cart_icon.svg'
import acc_1 from './img/account_icon-1.svg'
import acc_2 from './img/account_icon-2.svg'

const Navbar = () => {
  return (

    <nav className="nav">
      <img className="navbar__logo" src={corebiz_logo} alt="Corebiz Logo" />
      <input className="navbar__search" type="text" name="search" id="search" />
      <a className="navbar__myaccount" href="#">
        <div className="navbar__myaccount-icon">
          <img src={acc_1} alt="" /><img src={acc_2} alt="" />
        </div>
          Minha Conta</a>
      <a className="navbar__cart" href="#"><img src={cart_icon} alt="Shopping Cart" /></a>
    </nav>
  );
}

export default Navbar;