import './Team.css'
import teamPhoto from '../assets/team-photo.jpg'
import hariLoukyaaKuppam from '../assets/hari-loukyaa-kuppam.webp'
import fionaWang from '../assets/fiona-wang.webp'
import harveenKaurSandhu from '../assets/harveen-kaur-sandhu.webp'
import hayleyHuang from '../assets/hayley-huang.webp'
import sophiaLiang from '../assets/sophia-liang.webp'
import sahasraSiddabhaktuni from '../assets/sahasra-siddabhaktuni.webp'
import ridhiGoyal from '../assets/ridhi-goyal.webp'
import zoeEffiong from '../assets/zoe-effiong.webp'
import jasmineSharma from '../assets/jasmine-sharma.webp'
import taliaWatad from '../assets/talia-watad.webp'
import ahanPandey from '../assets/ahan-pandey.webp'
import anmolSharma from '../assets/anmol-sharma.webp'

const executives = [
  {
    name: 'Jasmine Sharma',
    position: 'President',
    image: jasmineSharma,
  },
  {
    name: 'Harveen Kaur Sandhu',
    position: 'President',
    image: harveenKaurSandhu,
  },
  {
    name: 'Sophia Liang',
    position: 'Vice President',
    image: sophiaLiang,
  },
  {
    name: 'Zoe Effiong',
    position: 'Secretary',
    image: zoeEffiong,
  },
  {
    name: 'Ridhi Goyal',
    position: 'Secretary',
    image: ridhiGoyal,
  },
  {
    name: 'Hari Loukyaa Kuppam',
    position: 'Director of Logistics',
    image: hariLoukyaaKuppam,
  },
  {
    name: 'Fiona Wang',
    position: 'Director of Logistics',
    image: fionaWang,
  },
  {
    name: 'Ahan Pandey',
    position: 'Director of Logistics',
    image: ahanPandey,
  },
  {
    name: 'Talia Watad',
    position: 'Director of Marketing',
    image: taliaWatad,
  },
  {
    name: 'Sahasra Siddabhaktuni',
    position: 'Director of Marketing',
    image: sahasraSiddabhaktuni,
  },
  {
    name: 'Hannah Mactal',
    position: 'Director of Publicity',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    name: 'Anmol Sharma',
    position: 'Director of Publicity',
    image: anmolSharma,
  },
  {
    name: 'Hayley Huang',
    position: 'Director of Publicity',
    image: hayleyHuang,
  },
]

function Team() {
  return (
    <main className="team-page">
      <section className="team-page__intro" aria-labelledby="team-title">
        <img
          className="team-page__group-photo"
          src={teamPhoto}
          alt="Helping Hands of Peel executive team"
        />

        <h1 id="team-title">Helping Hands of Peel Executives</h1>
      </section>

      <section className="team-page__directory" aria-label="Executive team">
        <div className="team-grid">
          {executives.map(({ name, position, image }) => (
            <article className="executive-card" key={name}>
              <img src={image} alt={`${name} - ${position}`} />

              <div className="executive-card__details">
                <p className="executive-card__position">{position}</p>
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