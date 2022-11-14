import React from 'react'
import './Cards.css';
import CardItem from './CardItem.js'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out this EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src={process.env.PUBLIC_URL+"/images/img-9.jpg"}
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'/>

                    <CardItem src={process.env.PUBLIC_URL+"/images/img-8.jpg"}
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'/>

                    <CardItem src={process.env.PUBLIC_URL+"/images/img-7.jpg"}
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'/>
                </ul>

                <ul className='cards__items'>
                    <CardItem src={process.env.PUBLIC_URL+"/images/img-6.jpg"}
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/products'/>

                    <CardItem src={process.env.PUBLIC_URL+"/images/img-5.jpg"}
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/products'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards