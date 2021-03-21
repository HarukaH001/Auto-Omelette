import React, { useEffect, useState } from 'react';
import './Content.scss';
import { Icon } from '@iconify/react';
import coinIcon from '@iconify/icons-twemoji/coin';
import eggIcon from '@iconify/icons-emojione/egg';
import broccoliIcon from '@iconify/icons-openmoji/broccoli';

export const Content = () => {
    const [priceComponent, setPC] = useState()
    const [price, setPrice] = useState(20)
    const [eggComponent, setEC] = useState()
    const [egg, setEgg] = useState(1)
    const [miscComponent, setMC] = useState()
    const [misc, setMisc] = useState([0,0,0])
    const [miscMax, setMM] = useState(0)
    useEffect(() => {
        setPC(renderPC())
        setEC(renderEC())
        setMC(renderMC())
        // eslint-disable-next-line
    },[price,egg,misc])
    // useEffect(() => {
    //     document.querySelector('.controller').addEventListener('contextmenu', e=>{

    //     })
    // },[])
    function priceHandler(e, value){
        setPrice(value)
        if(value === 20)
        setEgg(1)
    }
    function eggHandler(e, value, limit){
        if(value * 5 + 15 <= price)
        setEgg(value)
    }
    function miscHandler(e, index){
        let temp = [...misc]
        if(misc.reduce((a, b) => a + b, 0) < miscMax)temp[index]++
        setMisc(temp)
    }
    function renderPC(){
        const LST = [20,25,30,35,40]
        return LST.map(iter=>{

            return (
                <div key={'p'+iter} className={"control-btn " + (price===iter?'selected':'')} onClick={e => priceHandler(e, iter)}>
                    {iter}
                </div>
            )
        })
    }
    function renderEC(){
        const LST = [1,2]
        return LST.map(iter=>{

            return (
                <div key={'e'+iter} className={"control-btn " + (egg===iter?'selected ':'') + (iter*5+15 > price?'disabled':'')} onClick={e => eggHandler(e, iter)}>
                    {iter} ฟอง
                </div>
            )
        })
    }
    function renderMC(){
        const LST = ['หมูสับ', 'ไก่สับ', 'ผักรวม']
        return LST.map((iter, idx)=>{

            return (
                <div key={'m'+idx} className={"control-btn " + (misc[idx]!==0?'selected ':'') + (misc.reduce((a, b) => a + b, 0) === miscMax?'disabled':'')} onClick={e => miscHandler(e, idx)}>
                    {iter}
                </div>
            )
        })
    }
    return (
        <div className="Content">
            <header>
                <h1>Auto Omelettes</h1>
                <h2>make by ไข่เจียว</h2>
            </header>
            <div className="controller">
                <header>
                    <h3>Recipes</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                </header>
                <div className="content">
                    <div className="block">
                        <Icon icon={coinIcon} id="c-ico"/>
                        <span>ราคา&nbsp;&nbsp;( บาท )</span>
                    </div>
                    <div className="block">
                        {priceComponent}
                    </div>
                    <div className="block">
                        <Icon icon={eggIcon} id="c-ico"/>
                        <span>จำนวนไข่&nbsp;&nbsp;( ฟอง )</span>
                    </div>
                    <div className="block">
                        {eggComponent}
                    </div>
                    <div className="block">
                        <Icon icon={broccoliIcon} id="c-ico"/>
                        <span>เลือกเครื่อง&nbsp;&nbsp;( เลือกซ้ำได้ คลิกขวาเพื่อนำออก )</span>
                        <span></span>
                        <span>{misc.reduce((a, b) => a + b, 0) +' / ' + miscMax}</span>
                    </div>
                    <div className="block">
                        {miscComponent}
                    </div>
                </div>
                <footer>
                    <div className="total">
                        <span>Sub Total</span>
                        <span>฿ {price}</span>
                    </div>
                    <div className="confirm noselect">Confirm</div>
                </footer>
            </div>
        </div>
    )
}