import React from 'react';
import './Home.scss';
import SvgIcon from '../../assets/home.svg'
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="Home">
            <div className="circle"></div>
            <ReactSVG src={SvgIcon} id="svg-icon"/>
            <div className="content">
                <h1>AUTO Omelette</h1>
                <h2>Start At 20 ฿</h2>
                <h2>To 40 ฿</h2>
                <p>
                    It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. 
                </p>

                <Link to="/content" id="order">
                    <div className="order-btn">
                            ORDER NOW
                    </div>
                </Link>
            </div>
        </div>
    )
}