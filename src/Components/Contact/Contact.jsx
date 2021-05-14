const Contact = () => {
  return (
    <form action="https://corebiz-test.herokuapp.com/api/v1/newsletter" method="post">
      <p className='lead'>Participe de nossas news com promoções e novidades!</p>
      <input type="text" name="name" id="name" placeholder="Digite seu nome" />
      <input type="email" name="email" id="email" placeholder="Digite seu email" />
      <button type="submit">Eu quero!</button>
    </form>
  );
}

export default Contact;