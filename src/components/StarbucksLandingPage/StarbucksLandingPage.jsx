import React, { useState } from 'react'
import './StarbucksLandingPage.css'
import Header from '../Header/Header'
import greenCup from '../../images/green.png'
import orangeCup from '../../images/orange.png'
import pinkCup from '../../images/pink.png'


const StarbucksLandingPage = () => {
    const [bgColor, setBgColor] = useState('green')
    const [img, setImg] = useState(greenCup);
    const handleBackgroundChange = (color, img) => {
        setBgColor(color)
        setImg(img)
    }
    return (
        <>
            <div className='main'>
                <Header />
                <div className='content-wrapper'>
                    <div className='left-content'>
                        <h1 className='heading1'>It's not just Coffee</h1>
                        <h1 className='heading2'>It's <span>Starbucks's</span></h1>
                        <p className='heading3'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <button className='button'>Buy now</button>
                        <div className='iconContainer'>
                            <img onClick={() => handleBackgroundChange('#f25278', orangeCup)} className='iconSmall' src={orangeCup} alt='Starbuck coffee' />
                            <img onClick={() => handleBackgroundChange('green', greenCup)} className='iconSmall' src={greenCup} alt='Starbuck coffee' />
                            <img onClick={() => handleBackgroundChange('#FC94AF', orangeCup)} className='iconSmall' src={pinkCup} alt='Starbuck coffee' />
                        </div>

                    </div>


                    <div className='rounded-container'>
                        <div className="rounded-shape" style={{ backgroundColor: bgColor }}>
                            <img className='icon' src={img} alt='Starbuck coffee' />
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default StarbucksLandingPage


