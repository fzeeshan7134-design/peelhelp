import './Gallery.css'

const galleryItems = [
  {
    name: 'Community Event',
    date: 'September 2026',
    image: 'https://placehold.co/900x600/e0e0e0/999999?text=Event+Photo',
    driveLink: '#',
  },
  {
    name: 'Volunteer Day',
    date: 'August 2026',
    image: 'https://placehold.co/900x600/e0e0e0/999999?text=Event+Photo',
    driveLink: '#',
  },
  {
    name: 'Helping Hands Initiative',
    date: 'July 2026',
    image: 'https://placehold.co/900x600/e0e0e0/999999?text=Event+Photo',
    driveLink: '#',
  },
  {
    name: 'Community Outreach',
    date: 'June 2026',
    image: 'https://placehold.co/900x600/e0e0e0/999999?text=Event+Photo',
    driveLink: '#',
  },
  {
    name: 'Volunteer Appreciation',
    date: 'May 2026',
    image: 'https://placehold.co/900x600/e0e0e0/999999?text=Event+Photo',
    driveLink: '#',
  },
  {
    name: 'Spring Initiative',
    date: 'April 2026',
    image: 'https://placehold.co/900x600/e0e0e0/999999?text=Event+Photo',
    driveLink: '#',
  },
]

function Gallery() {
  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <img
          src="https://placehold.co/1600x600/e0e0e0/999999?text=Gallery+Hero+Image"
          alt="Helping Hands of Peel event"
        />
      </section>

      <section className="gallery-intro">
        <p className="gallery-eyebrow">GALLERY</p>

        <h1>Memories From Our Events</h1>

        <p>
          Take a look at some of the moments, people, and memories from
          our events and community initiatives.
        </p>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <h2 id="gallery-title">Gallery</h2>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.name}>
              <div className="gallery-card__image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="gallery-card__content">
                <h3>{item.name}</h3>

                <p className="gallery-card__date">{item.date}</p>

                <a
                  className="gallery-card__button"
                  href={item.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Gallery