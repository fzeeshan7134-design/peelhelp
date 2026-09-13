import { useState } from 'react'
import logo from '../assets/logo.png'
import insta from '../assets/insta.png'
import './Footer.css'

const INSTAGRAM_URL = 'https://www.instagram.com/helpinghandsofpeel/'

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setIsSending(true)
    setStatus('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message.')
      }

      setStatus('Message sent successfully!')

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      setStatus('Something went wrong. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__top-line" />

      <div className="site-footer__content">
        {/* LEFT SIDE */}
        <div className="site-footer__info">
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

        {/* RIGHT SIDE */}
        <div className="site-footer__contact">
          <p className="site-footer__contact-eyebrow">
            GET IN TOUCH
          </p>

          <h2>We'd Love to Hear From You</h2>

          <p className="site-footer__contact-description">
            Have a question or want to get involved? Send us a message.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-form__button"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Submit'}
            </button>

            {status && <p>{status}</p>}
          </form>
        </div>
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