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
        // console.log(price, egg, misc, miscMax)
        setPC(renderPC())
        setEC(renderEC())
        setMC(renderMC())
        // eslint-disable-next-line
    },[price,egg,misc, miscMax])
    function validation(){
        let cost = egg * 10 + misc.reduce((a,b)=>a+b,0) * 5 + 10
        let balance = price - cost
        return balance===0?'validated':'disabled'
    }
    function priceHandler(e, value){
        setPrice(value)
        if(value <= 25){
            setEgg(1)
        } else if(value === 40){
            setEgg(2)
        }
        setMisc([0,0,0])
    }
    function eggHandler(e, value, limit){
        if(value * 10 + 10 <= price && !(value===1&&price===40)){
            setEgg(value)
        }
        setMisc([0,0,0])
        
    }
    function miscHandler(e, index){
        let temp = [...misc]
        if(misc.reduce((a, b) => a + b, 0) < miscMax)temp[index]++
        setMisc(temp)
    }
    function miscRHandler(e, index){
        e.preventDefault()

        let temp = [...misc]
        if(misc[index] > 0) temp[index]--
        setMisc(temp)

        return false
    }
    function renderPC(){
        const LST = [20,30,40]
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
                <div key={'e'+iter} className={"control-btn " + (egg===iter?'selected ':'') + (iter*10+10 > price || (price===40&&iter===1)?'disabled':'')} onClick={e => eggHandler(e, iter)}>
                    {iter} ฟอง
                </div>
            )
        })
    }
    function renderMC(){
        const LST = ['หมูสับ', 'ไก่สับ', 'ผักรวม']

        let cost = egg * 10 + misc.reduce((a,b)=>a+b,0) * 5 + 10
        let balance = price - cost
        let mm = balance / 5 + misc.reduce((a,b)=>a+b,0)
        setMM(mm > 2? 2: mm)

        document.querySelectorAll('#mc').forEach((iter, idx)=>{
            let width = iter.clientWidth
            const {top, left} = iter.getBoundingClientRect()
            document.documentElement.style.setProperty('--miscleft'+idx, `${width + left}px`);
            document.documentElement.style.setProperty('--misctop'+idx, `${top}px`);
        })

        return LST.map((iter, idx)=>{

            return (
                <div id="mc" key={'m'+idx} className={"control-btn " + (misc[idx]!==0?'selected ':'') + (misc.reduce((a, b) => a + b, 0) === miscMax?'disabled':'')} onClick={e => miscHandler(e, idx)} onContextMenu={e => miscRHandler(e, idx)}>
                    {iter}
                    {misc[idx]!==0 && <div className={"counter"+idx}>{misc[idx]}</div>}
                </div>
            )
        })
    }
    return (
        <div className="Content">
            <div className="state-wrapper">

            </div>
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
                    <div className={"confirm noselect " + validation()}>Confirm</div>
                </footer>
            </div>
        </div>
    )
}