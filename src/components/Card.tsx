import { Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// This swiper influences html and styles to Buttom.jsx and Buttom.css
import 'swiper/css';
import 'swiper/css/scrollbar';

import "./Card.css";

const Card = () => {
  return (
    <>
    <h3>Spaces</h3>
          
    <main className='swiperSlideContainer'>
    <Swiper
      modules={[Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
                  breakpoints={{
              "@0.00": {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              "@0.50": {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              "@1.00": {
                slidesPerView: 2.15,
                spaceBetween: 10,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              "@1.50": {
                slidesPerView: 3.15,
                spaceBetween: 10,
              },
              "@1.75": {
                slidesPerView: 4.15,
                spaceBetween: 10,
              },
            }}
      scrollbar={{ draggable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <section className='slidesButtoms'>
            <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
            <h1 className='titleSlide'>Title1</h1> 
<p>_________________________________________________________________________________________________________________________________</p>
            </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='slidesButtoms'>
            <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
            <h1 className='titleSlide'>Title2</h1> 
            <p>_________________________________________________________________________________________________________________________________</p>
            </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='slidesButtoms'>
            <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
            <h1 className='titleSlide'>Title3</h1> 
            <p>_________________________________________________________________________________________________________________________________</p>
            </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='slidesButtoms'>
            <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
            <h1 className='titleSlide'>Title4</h1> 
            <p>_________________________________________________________________________________________________________________________________</p>
            </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='slidesButtoms'>
            <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
            <h1 className='titleSlide'>Title5</h1> 
            <p>_________________________________________________________________________________________________________________________________</p>
            </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='slidesButtoms'>
            <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
            <h1 className='titleSlide'>Title6</h1> 
            <p>_________________________________________________________________________________________________________________________________</p>
            </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='slidesButtoms'>
            <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
            <h1 className='titleSlide'>Title7</h1> 
            <p>_________________________________________________________________________________________________________________________________</p>
            </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='slidesButtoms'>
            <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
            <h1 className='titleSlide'>Title8</h1> 
            <p>_________________________________________________________________________________________________________________________________</p>
            </section>
      </SwiperSlide>

      <div className="swiper-scrollbar"></div>
      
    </Swiper>
    </main>
    </>
  );
};

export default Card










// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import "./Card.css";

// const Card = () => {
//   return (
//     <>
//           <h3>Spaces</h3>
          
//     <main className='swiperSlideContainer'>
//     <Swiper
//       spaceBetween={10}
//       slidesPerView={1}
//                   breakpoints={{
//               "@0.00": {
//                 slidesPerView: 1.1,
//                 spaceBetween: 10,
//               },
//               "@0.50": {
//                 slidesPerView: 1.1,
//                 spaceBetween: 10,
//               },
//               "@0.75": {
//                 slidesPerView: 1.5,
//                 spaceBetween: 10,
//               },
//               "@1.00": {
//                 slidesPerView: 2.15,
//                 spaceBetween: 10,
//               },
//               "@1.25": {
//                 slidesPerView: 2.5,
//                 spaceBetween: 10,
//               },
//               "@1.50": {
//                 slidesPerView: 3.15,
//                 spaceBetween: 10,
//               },
//               "@1.75": {
//                 slidesPerView: 4.15,
//                 spaceBetween: 10,
//               },
//             }}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>
//         <section className='slidesButtoms'>
//             <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
//             <h1 className='titleSlide'>Title1</h1> 
// <p>_________________________________________________________________________________________________________________________________</p>
//             </section>
//       </SwiperSlide>

//       <SwiperSlide>
//         <section className='slidesButtoms'>
//             <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
//             <h1 className='titleSlide'>Title2</h1> 
//             <p>_________________________________________________________________________________________________________________________________</p>
//             </section>
//       </SwiperSlide>

//       <SwiperSlide>
//         <section className='slidesButtoms'>
//             <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
//             <h1 className='titleSlide'>Title3</h1> 
//             <p>_________________________________________________________________________________________________________________________________</p>
//             </section>
//       </SwiperSlide>

//       <SwiperSlide>
//         <section className='slidesButtoms'>
//             <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
//             <h1 className='titleSlide'>Title4</h1> 
//             <p>_________________________________________________________________________________________________________________________________</p>
//             </section>
//       </SwiperSlide>

//       <SwiperSlide>
//         <section className='slidesButtoms'>
//             <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
//             <h1 className='titleSlide'>Title5</h1> 
//             <p>_________________________________________________________________________________________________________________________________</p>
//             </section>
//       </SwiperSlide>

//       <SwiperSlide>
//         <section className='slidesButtoms'>
//             <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
//             <h1 className='titleSlide'>Title6</h1> 
//             <p>_________________________________________________________________________________________________________________________________</p>
//             </section>
//       </SwiperSlide>

//       <SwiperSlide>
//         <section className='slidesButtoms'>
//             <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
//             <h1 className='titleSlide'>Title7</h1> 
//             <p>_________________________________________________________________________________________________________________________________</p>
//             </section>
//       </SwiperSlide>

//       <SwiperSlide>
//         <section className='slidesButtoms'>
//             <img className='logoSlide' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="twitter x" /> 
//             <h1 className='titleSlide'>Title8</h1> 
//             <p>_________________________________________________________________________________________________________________________________</p>
//             </section>
//       </SwiperSlide>
//     </Swiper>
//     </main>
//     </>
//   )
// }

// export default Card