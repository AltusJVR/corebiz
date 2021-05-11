const Contact = () => {
  return (
    <form action="https://corebiz-test.herokuapp.com/api/v1/newsletter" method="post">

      <input type="text" name="name" id="name" placeholder="Digite seu nome" />
      <input type="email" name="email" id="email" placeholder="Digite seu email" />
    </form>
  );
}

export default Contact;