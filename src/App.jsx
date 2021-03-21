import './App.scss';
import { useEffect, useState } from 'react'
import { Home, Content, Team } from './routes'
import { MemoryRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Iconly } from 'react-iconly';
import bxsStoreAlt from '@iconify/icons-bx/bxs-store-alt';

function App() {
  const [location, setLocation] = useState('home')
  useEffect(() => {
    // window.addEventListener('contextmenu', e=>{
    //     e.preventDefault()
    //     return false
    // })
    let navw = document.querySelector('nav').clientWidth
    document.documentElement.style.setProperty('--navw', `${navw}px`);
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let navw = document.querySelector('nav').clientWidth
      document.documentElement.style.setProperty('--navw', `${navw}px`);
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    })

    document.querySelectorAll('.btn').forEach((iter, idx) => {
      iter.addEventListener('click', e => {
        switch (idx) {
          case 0:
            setLocation('home')
            break
          case 1:
            setLocation('content')
            break
          case 2:
            setLocation('team')
            break
          default:
            setLocation('home')
            break
        }
      })
    })

    return () => {
      window.onresize = null
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (location === 'home') {
      setTimeout(() => {
        let orderBtn = document.querySelector('#order')
        if(orderBtn){
          orderBtn.addEventListener('click', () => {
            setLocation('content')
          })
        }
      },100)
      
    }

  }, [location])

  return (
    <div className="App noselect">
      <Router>
        <div className="container">
          <nav>
            <div>
              <Icon icon={bxsStoreAlt} id="main-ico" />
            </div>
            <div>
              <Link to="/" className={"btn " + (location === 'home' ? 'selected' : '')}>
                <Iconly name="Home" id="nav-ico" />
              </Link>
            </div>
            <div>
              <Link to="/content" className={"btn " + (location === 'content' ? 'selected' : '')}>
                <Iconly name="Document" id="nav-ico" />
              </Link>
            </div>
            <div>
              <Link to="/team" className={"btn " + (location === 'team' ? 'selected' : '')}>
                <Iconly name="User" id="nav-ico" />
              </Link>
            </div>
          </nav>
          <section>
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/content"><Content /></Route>
              <Route exact path="/team"><Team /></Route>
            </Switch>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
