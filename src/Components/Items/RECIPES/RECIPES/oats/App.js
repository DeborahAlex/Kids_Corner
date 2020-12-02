import React, {useState} from 'react'
import Heading from './heading'
import Oats from './oats.js'
import Orep from './or'
import Or from './orr'
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
     <Heading h="RECIPES~" />
     <Oats name="Oats" on="breakfast" content="Make easy yet delicious oats with this! " cont="Recipe-" />
     <Orep/> <Or/>
     <p className="h"><Footer/></p>
   </div>  
  );
}
export default A;