import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text" role="contentinfo">
          &copy; {currentYear} Suzette Sousa. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
