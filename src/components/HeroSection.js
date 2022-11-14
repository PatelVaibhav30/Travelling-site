import React from 'react'
import { Button } from './Button'
import * as AiIcon from 'react-icons/ai'
// import '../../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER <span className='far fa-play-circle'><AiIcon.AiOutlinePlayCircle/></span>
            </Button>

        </div>
    </div>
  )
}

export default HeroSection