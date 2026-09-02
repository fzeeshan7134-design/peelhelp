import './Team.css'

const executives = [
  {
    name: 'Jasmine Sharma',
    position: 'President',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Harveen Kaur Sandhu',
    position: 'President',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Sophia Liang',
    position: 'Vice President',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Zoe Effiong',
    position: 'Secretary',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Ridhi Goyal',
    position: 'Secretary',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Hari Loukyaa Kuppam',
    position: 'Director of Logistics',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Fiona Wang',
    position: 'Director of Logistics',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Ahan Pandey',
    position: 'Director of Logistics',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Talia Watad',
    position: 'Director of Marketing',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Sahasra Siddabhaktuni',
    position: 'Director of Marketing',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Hannah Mactal',
    position: 'Director of Publicity',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Anmol Sharma',
    position: 'Director of Publicity',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
]

function Team() {
  return (
    <main className="team-page">
      <section className="team-page__intro" aria-labelledby="team-title">
        <img
          className="team-page__group-photo"
          src="https://placehold.co/1200x500/e0e0e0/999999?text=Group+Photo"
          alt="Helping Hands of Peel executive team"
        />

        <h1 id="team-title">Helping Hands of Peel Executives</h1>
      </section>

      <section className="team-page__directory" aria-label="Executive team">
        <div className="team-grid">
          {executives.map(({ name, position, image }) => (
            <article className="executive-card" key={name}>
              <img
                src={image}
                alt={`${name} - ${position}`}
              />

              <div className="executive-card__details">
                <p className="executive-card__position">
                  {position}
                </p>

                <h2>{name}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Team