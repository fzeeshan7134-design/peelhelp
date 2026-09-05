import './WhatWeDo.css'

const areas = [
  {
    title: 'Community Service',
    description:
      'We organize initiatives that give back to our community and create meaningful change.',
  },
  {
    title: 'Volunteering',
    description:
      'We connect youth with opportunities to volunteer, contribute their time, and make a difference.',
  },
  {
    title: 'Community Impact',
    description:
      'We bring people together to support local causes and build a stronger, more connected community.',
  },
]

function WhatWeDo() {
  return (
    <section className="what-we-do" aria-labelledby="what-we-do-title">
      <div className="what-we-do__intro">
        <p className="what-we-do__eyebrow">WHAT WE DO</p>

        <h2 id="what-we-do-title">Making a Difference Together</h2>

        <p className="what-we-do__description">
          Helping Hands of Peel brings youth together to give back,
          volunteer, and create positive change in our community.
        </p>
      </div>

      <div className="what-we-do__cards">
        {areas.map((area) => (
          <article className="what-we-do__card" key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>

      <div className="impact-section">
        <div className="impact-stat">
          <h3>100+</h3>
          <p>Volunteers</p>
        </div>

        <div className="impact-stat">
          <h3>20+</h3>
          <p>Events</p>
        </div>

        <div className="impact-stat">
          <h3>500+</h3>
          <p>People Reached</p>
        </div>

        <div className="impact-stat">
          <h3>10+</h3>
          <p>Initiatives</p>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo