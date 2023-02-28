import React from 'react'
import './style.css'
import hotel from '../../assets/hotels/hotel-1.jpeg'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper"


function Card({card}) {
  return (
    <div className='cardBox'>
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={false}
            mousewheel={true}
            cssMode={true}
            pagination
            modules={[Pagination,Navigation]}
            className='swiperContainer'
            >
            { card.imgSrc.map((src,i)=>(
            <SwiperSlide key={i}>
                <img src={src} className='cardImg' />
            </SwiperSlide>
            ))}
            
        </Swiper>
        <div className='cardInfoFlex'>
            <h3 className='cardTittle'>{card.title}</h3>
            <div className='cardRating'>
                <StarRateRoundedIcon/>
                <p>{card.rating}</p>
            </div>
        </div>
        <p style={{margin:0, color: 'var(--font-grey)'}}>{card.description}</p>
        <p style={{margin:0,color: 'var(--font-grey)'}}>{card.date}</p>
        <p style={{margin:'0.2rem',fontSize:'1rem',color: 'var(--font-grey)'}}>
            <span style={{color:'var(--black)'}}>${card.price}</span> night
        </p>
    </div>
  )
}

export default Card
