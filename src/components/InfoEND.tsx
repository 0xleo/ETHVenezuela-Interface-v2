import './InfoEND.css'
import { ItemsIMG } from './ItemsIMG'
// import instagram from './src/components/assets/instagram.svg'
// import twitterX from './src/components/assets/twitterX.svg'
// import telegram from './src/components/assets/telegram.svg' 

// import { ReactComponent as Instagram} from "./src/components/assets/instagram.svg"
// import { ReactComponent as TwitterX} from "./src/components/assets/twitterX.svg"
// import { ReactComponent as Telegram} from "./src/components/assets/telegram.svg"
// import { ItemsIMG } from "./src/components/ItemsIMG.tsx";

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
          <ItemsIMG src={'./src/components/assets/instagram.svg'} className="logos" alt="Instagram logo" />
      </a>

      <a href="" target="_blank" rel="noreferrer">
          <ItemsIMG src={'./src/components/assets/twitterX.svg'} className="logos" alt="TwitterX logo" />
      </a>  

      <a href="" target="_blank" rel="noreferrer">
          <ItemsIMG src={'./src/components/assets/telegram.svg'} className="logos" alt="Telegram logo" />
      </a>
      </section>

    </main>
    </>
  )
}

export default InfoEND;