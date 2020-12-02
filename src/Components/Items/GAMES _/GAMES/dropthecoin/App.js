import React, {useState} from 'react'
import Game from './game'
import Heading from './heading'
import Gn from './gneeds.js'
import Htp from './howtoplay'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
function A() {

  const sections = [
    { title: 'Home', url: '/' },
    { title: 'Craft', url: '/Crafts' },
    { title: 'Recipe', url: '/Recipes' },
    { title: 'Songs', url: '/Rhymes' },
    { title: 'Games', url: '/Games' },
    { title: 'Experiments', url: '/Experiment' },
    { title: 'Stories', url: '/Stories' },
  ];
  return (
  
   <div className="app">
      <p className="h"><Header title="Kids' Corner" sections={sections} /></p>
     <Heading h="GAMES~" />
     <Game name="Drop The Coin" on="5-8" content="Fun games to enjoy with friends!!!!" cont="How to play-" />
     <Gn/> <Htp/>
     <p className="h"><Footer/></p>
        </div>  
  );
} 
export default A;