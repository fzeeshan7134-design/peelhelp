import logo from '../assets/logo.png'
import insta from '../assets/insta.png'
import './Footer.css'

const INSTAGRAM_URL = 'https://www.instagram.com/helpinghandsofpeel/'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top-line" />

      <div className="site-footer__main">
        <img
          className="site-footer__logo"
          src={logo}
          alt="Helping Hands of Peel"
        />

        <p className="site-footer__title">
          Helping Hands of Peel
        </p>

        <p className="site-footer__tagline">
          Making a difference in our community, one helping hand at a time.
        </p>

        <a
          className="site-footer__instagram"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src={insta} alt="Instagram" />
        </a>
      </div>

      <div className="site-footer__bottom-line" />

      <div className="site-footer__bottom">
        <p>Made by Helping Hands of Peel</p>
        <p>© 2026 Helping Hands of Peel</p>
      </div>
    </footer>
  )
}

export default Footer