import logo from '../assets/logo.png'
import './Hero.css'

const HERO_IMAGE =
  ''

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ '--hero-image': `url(${HERO_IMAGE})` }}
      aria-labelledby="hero-title"
    >
      <div className="hero__content">
        <img
          className="hero__logo"
          src={logo}
          alt="Helping Hands of Peel"
        />
        <h1 id="hero-title">Helping Hands of Peel</h1>
        <p>
          Making a difference in our community, one helping hand at a time.
        </p>
        <a className="hero__cta" href="#events">
          Get Involved
        </a>
      </div>
    </section>
  )
}

export default Hero
