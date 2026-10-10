import './Founders.css'
import foundersPhoto from '../assets/founders-photo.webp'

function Founders() {
  return (
    <main className="founders-page">
      <section className="founders-page__content">
        <p className="founders-page__eyebrow">OUR STORY</p>

        <h1>Meet Our Founders</h1>

        <img
          className="founders-page__photo"
          src={foundersPhoto}
          alt="The two founders of Helping Hands of Peel"
        />

        <div className="founders-page__about">
          <h2>About Helping Hands of Peel</h2>

          <p>
            Helping Hands of Peel is a youth-led organization dedicated
            to giving back to the community through volunteering,
            community initiatives, and meaningful service. We aim to
            bring people together, inspire positive change, and make
            a lasting difference in the lives of others.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Founders