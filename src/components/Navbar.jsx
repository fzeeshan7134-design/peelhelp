import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import insta from '../assets/insta.png'
import './Navbar.css'

const navItems = ['Home', 'Team', 'Events', 'Gallery', 'Past Events']

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

        {/* Logo → Homepage */}
        <Link className="club-logo" to="/" aria-label="Club home">
          <img src={logo} alt="Club logo" />
        </Link>

        <ul
          id="primary-navigation"
          className={`nav-links${isOpen ? ' is-open' : ''}`}
        >
          {navItems.map((item) => {
            const path =
              item === 'Home'
                ? '/'
                : `/${item.toLowerCase().replace(' ', '-')}`

            return (
              <li key={item}>
                <Link
                  to={path}
                  className={activeItem === item ? 'is-active' : ''}
                  aria-current={
                    activeItem === item ? 'page' : undefined
                  }
                  onClick={() => selectNavItem(item)}
                >
                  {item}
                </Link>
              </li>
            )
          })}

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
          {isOpen ? (
            <X aria-hidden="true" />
          ) : (
            <Menu aria-hidden="true" />
          )}
        </button>

      </nav>
    </header>
  )
}

export default Navbar