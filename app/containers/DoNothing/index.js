import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './style.css'

var sec = 0;
var min = 2;
var finish = false;
var cond = 0;

class Finish extends React.Component {
  render() {
    return (
      <div className="finish">
        <a href="https://www.linkedin.com/in/erwan-delory/" target="_blank">
          <p className="finish-text">LinkedIn</p>
        </a>
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    return (
      <div className="timer">
          {cond > 0
            ? <p className="try">Try Again !</p>
            : <br />
          }
          {cond > 0
            ? <AffichageRouge />
            : <Affichage />
          }
          
        </div>
    );
  }
}

class Affichage extends React.Component {
  render() {
    return (
      <div>
        {sec < 10
          ? <p>{min} : 0{sec}</p>
          : <p>{min} : {sec}</p>
        }
      </div>
    );
  }
}

class AffichageRouge extends React.Component {
  render() {
    return (
      <div>
        {sec < 10
          ? <p style={{color: "red"}}>{min} : 0{sec}</p>
          : <p style={{color: "red"}}>{min} : {sec}</p>
        }
      </div>
    );
  }
}

const Interval = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    setSeconds(seconds => seconds = 0);
    setMinutes(minutes => minutes = 2);
    const interval = setInterval(() => {
      if(min == 0 && sec == 0) {
        return;
      }
      if(min == 0 && sec == 1) {
        finish = true;
      }
      else if(sec == 0) {
        setMinutes(minutes => minutes - 1);
        setSeconds(seconds => seconds = 59);
        min--;
        sec = 59;
      }
      setSeconds(seconds => seconds - 1);
      sec--;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  window.addEventListener('keydown', (e) => {
    setSeconds(seconds => seconds = 0);
    setMinutes(minutes => minutes = 2);
    sec = 0;
    min = 2;
    cond = 1;
    setTimeout(remiseZero, 3000);
  });

  window.addEventListener('mousemove', (e) => {
    setSeconds(seconds => seconds = 0);
    setMinutes(minutes => minutes = 2);
    sec = 0;
    min = 2;
    cond = 1;
    setTimeout(remiseZero, 3000);
  });

  function remiseZero() {
    cond = 0;
  }

  return (
    <article>
      <Helmet>
        <title>Do Nothing</title>
        <meta
          name="description"
          content="A React.js Boilerplate application"
        />
      </Helmet>
      <div className="App">
        <div className="navbar">
          <a href="https://www.linkedin.com/in/erwan-delory/" target="_blank"><p>Erwan DELORY</p></a>
        </div>
        <div className="title">
          <p>do nothing for 2 minutes</p>
        </div>
        {finish
          ? <Finish />
          : <Timer />
        }
        <div className="text">
          <p>Just relax and listen the waves.</p>
          <p>Don't touch your mouse or keyboard.</p>
        </div>
      </div>
      <iframe width="1" height="1" src="https://www.youtube.com/embed/RDgqjBD4vZQ?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </article>  
  );
};

export default Interval;