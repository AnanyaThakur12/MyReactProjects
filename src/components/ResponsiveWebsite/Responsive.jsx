import React from 'react'
import './Responsive.css'
import codingImg from '../../images/sysadmin_03.jpg'

const Responsive = () => {
    return (
        <div className="main">
            <div className="nav">
                <h2>Logo</h2>
                <div className="nav-part2">
                    <h4>Store</h4>
                    <h4>Courses</h4>
                    <h4>Career</h4>
                    <h4>Blog</h4>
                    <h4>Account</h4>
                    <button>Sign in</button>
                    <i class="ri-menu-3-fill"></i>
                </div>
            </div>

            <div className="content">
                <div className="left">
                    <h1>Learn from the <span>coolest</span> coding platform of India.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident odio nobis. Blanditiis quis nam inventore?</p>
                    <button>Explore now</button>
                </div>

                <div className="right">
                    <img src={codingImg} alt='Coding' />
                </div>
            </div>
        </div>
    )
}

export default Responsive