import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="background-image"></div>
      <div className='images'>
        <div className="socials">
          <img src="/images/fb.png" />
          <img src="/images/ig.png" />
          <img src="/images/tw.png" />
        </div>
        <div >
            <img src="/images/logo.png"/>
        </div>
        <div>
            <p>Desenvolvido por Alura</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
