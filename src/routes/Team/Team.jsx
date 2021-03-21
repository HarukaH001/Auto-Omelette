import React from 'react';
import './Team.scss';
import ONE from '../../assets/1.png'
import TWO from '../../assets/2.jpg'
import THREE from '../../assets/3.jpg'
import FOUR from '../../assets/4.jpg'
import FIVE from '../../assets/5.jpg'
import SIX from '../../assets/6.jpg'

export const Team = () => {
    return (
        <div className="Team">
            <h1>Participant</h1>
            <h2>of project</h2>
            <div className="member-wrapper">
                <div className="member-box">
                    <div className="pic-wrapper">
                        <img src={ONE} alt="" id="one"/>
                    </div>
                    <div className="member-info">
                        <p>Korntawat Witchuvanit</p>
                        <p>กรธวัช วิชชุวาณิชย์</p>
                        <p>61010023</p>
                    </div>
                </div>
                <div className="member-box">
                    <div className="pic-wrapper">
                        <img src={TWO} alt="" id="two"/>
                    </div>
                    <div className="member-info">
                        <p>Kittisak Phormraksa</p>
                        <p>กิตติศักดิ์ พรหมรักษา</p>
                        <p>61010092</p>
                    </div>
                </div>
                <div className="member-box">
                    <div className="pic-wrapper">
                        <img src={THREE} alt="" id="three"/>
                    </div>
                    <div className="member-info">
                        <p>Natasit Saragan</p>
                        <p>ณัฐสิทธิ์ สารกาญจน์</p>
                        <p>61010362</p>
                    </div>
                </div>
                <div className="member-box">
                    <div className="pic-wrapper">
                        <img src={FOUR} alt="" id="four"/>
                    </div>
                    <div className="member-info">
                        <p>Tantatorn Suksangwarn</p>
                        <p>ทัณฑธร สุขสังวาลย์</p>
                        <p>61010402</p>
                    </div>
                </div>
                <div className="member-box">
                    <div className="pic-wrapper">
                        <img src={FIVE} alt="" id="five"/>
                    </div>
                    <div className="member-info">
                        <p>Nontapat Sirichuensuwan</p>
                        <p>นนทพัทธ์ สิริชื่นสุวรรณ</p>
                        <p>61010534</p>
                    </div>
                </div>
                <br></br>
                <div className="member-box">
                    <div className="pic-wrapper">
                        <img src={SIX} alt="" id="six"/>
                    </div>
                    <div className="member-info">
                        <p>Pasawee Lararun</p>
                        <p>พศวีร์ และอรุณ</p>
                        <p>61010707</p>
                    </div>
                </div>
            </div>
        </div>
    )
}