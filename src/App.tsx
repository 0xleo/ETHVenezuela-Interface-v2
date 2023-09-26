import {Suspense, lazy} from 'react';

// import Card from './components/Card.tsx'
// import { TitleMAIN } from "./components/TitleMAIN.tsx";
// import { InfoEND } from "./components/InfoEND.tsx";
// import { Navbar } from "./components/Navbar.tsx";
// import { Buttom } from "./components/Buttom.tsx";
// import { FAQ } from "./components/FAQ.tsx";

const TitleMAIN = lazy(()=>import("./components/TitleMAIN.tsx"))
const Card = lazy(()=>import("./components/Card.tsx"))
const InfoEND = lazy(()=>import("./components/InfoEND.tsx"))
const Navbar = lazy(()=>import("./components/Navbar.tsx"))
const Buttom = lazy(()=>import("./components/Buttom.tsx"))
const FAQ = lazy(()=>import("./components/FAQ.tsx"))

import LoadingComp from "./components/LoadingComp.tsx";




import './App.css';


function App() {

  return (
    <>
        <Suspense fallback={<LoadingComp/>}>
    <Navbar/>
    <TitleMAIN/>
      <div className='containBtnIntro'>
        <div className='buttomIntro'>Join</div>
        <div className='buttomIntro'>Contribute</div>
      </div>
      <p className='aboutTitle'></p>
      <p className='aboutCommuity'><span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>What is this?</span><br/>Is a collective dedicated to promoting Ethereum adoption in the country through education, events, and collaboration. <br/> <br /> Our aim is to boost the crypto ecosystem, fostering an innovation environment that nurtures community hubs.</p> 
      <Buttom/>
      <Card/>
      <h3>FAQ</h3>
      <FAQ/>
      <InfoEND/>
      </Suspense>
    </>
  )
}

export default App
