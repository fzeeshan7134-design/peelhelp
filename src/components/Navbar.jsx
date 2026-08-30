import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import insta from '../assets/insta.png'
import './Navbar.css'

const navItems = ['Home', 'Team', 'Events', 'Gallery', 'Past Events']

// Replace this with the club's Instagram profile when it is available.
const INSTAGRAM_URL = 'https://www.instagram.com/helpinghandsofpeel/'

function InstagramLink({ className = '' }) {
  return (
    <a
      className={`instagram-link ${className}`.trim()}
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <img src={insta} alt="" />
    </a>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  const selectNavItem = (item) => {
    setActiveItem(item)
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="club-logo" href="#home" aria-label="Club home">
          <img src={logo} alt="Club logo" />
        </a>

        <ul
          id="primary-navigation"
          className={`nav-links${isOpen ? ' is-open' : ''}`}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={activeItem === item ? 'is-active' : ''}
                aria-current={activeItem === item ? 'page' : undefined}
                onClick={() => selectNavItem(item)}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="mobile-instagram">
            <InstagramLink />
          </li>
        </ul>

        <InstagramLink className="desktop-instagram" />

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
