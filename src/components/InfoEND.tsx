import './InfoEND.css'
// import instagram from './src/components/assets/instagram.svg'
// import twitterX from './src/components/assets/twitterX.svg'
// import telegram from './src/components/assets/telegram.svg' 
import { ReactComponent as Instagram} from "./src/components/assets/instagram.svg"
import { ReactComponent as TwitterX} from "./src/components/assets/twitterX.svg"
import { ReactComponent as Telegram} from "./src/components/assets/telegram.svg"

export const InfoEND = () => {
  return (
    <>
    <main className='containInfo'>
      <section className='section1'>
      <a href="" target="_blank" rel="noreferrer">
      <div className='Contact'>Contact</div>
      </a>
      <a href="" target="_blank" rel="noreferrer">
      <div className='Contact'>Contact</div>
      </a>
      <a href="" target="_blank" rel="noreferrer">
      <div className='Contact'>Contact</div>
      </a>
      </section>

      <section className='section2'>
      <a href="" target="_blank" rel="noreferrer">
          <img src={Instagram} className="logos" alt="Instagram logo" />
      </a>

      <a href="" target="_blank" rel="noreferrer">
          <img src={TwitterX} className="logos" alt="TwitterX logo" />
      </a>  

      <a href="" target="_blank" rel="noreferrer">
          <img src={Telegram} className="logos" alt="Telegram logo" />
      </a>
      </section>

    </main>
    </>
  )
}
