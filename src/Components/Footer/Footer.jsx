import corebiz_logo from './img/corebiz_logo-small.svg';
import vtex_logo from './img/vtex_icon.svg';
import contact_icon from './img/contact_icon.svg';


const Footer = () => {
  return (
    <footer>
      <div className="footer__location">
        <h3>Localização</h3>
        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p>Alphavile SP</p>
        <p>brasil@corebiz.ag</p>
        <p>+55 11 3090 1039</p>
      </div>

      <div className="footer__contact">
        <a href="/">ENTRE EM CONTATO</a>
        <a href="/">FALE COM O NOSSO CONSULTOR ONLINE</a>
      </div>

      <div className="footer__logo">
        <p>Created by</p>
        <a href="/"><img src={corebiz_logo} alt="Corebiz Logo" /></a>
        <p>Powered by</p>
        <a href="/"><img src={vtex_logo} alt="Vtex Logo" /></a>

      </div>
    </footer>

  );
}

export default Footer;