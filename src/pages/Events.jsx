import './Events.css'

const events = [
  {
    name: 'Community Event',
    date: 'Date Coming Soon',
    description:
      'Join Helping Hands of Peel for an upcoming community event. More details about this event will be available soon.',
    image: 'https://placehold.co/900x600/e0e0e0/999999?text=Event+Photo',
  },
  {
    name: 'Volunteer Day',
    date: 'Date Coming Soon',
    description:
      'A day dedicated to volunteering, giving back, and making a positive difference in our community.',
    image: 'https://placehold.co/900x600/e0e0e0/999999?text=Event+Photo',
  },
  {
    name: 'Helping Hands Initiative',
    date: 'Date Coming Soon',
    description:
      'An opportunity for our community to come together, support a local cause, and create meaningful impact.',
    image: 'https://placehold.co/900x600/e0e0e0/999999?text=Event+Photo',
  },
]

function Events() {
  return (
    <main className="events-page">
      <section className="events-page__intro">
        <p className="events-page__eyebrow">EVENTS</p>

        <h1>Our Events</h1>

        <p className="events-page__description">
          Discover the events and initiatives we organize to bring our
          community together and make a difference.
        </p>
      </section>

      <section className="events-list" aria-label="Helping Hands of Peel events">
        {events.map((event) => (
          <article className="event-card" key={event.name}>
            <div className="event-card__image">
              <img src={event.image} alt={event.name} />
            </div>

            <div className="event-card__content">
              <p className="event-card__date">{event.date}</p>

              <h2>{event.name}</h2>

              <p className="event-card__description">
                {event.description}
              </p>

              <a className="event-card__button" href="#">
                Learn More
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Events