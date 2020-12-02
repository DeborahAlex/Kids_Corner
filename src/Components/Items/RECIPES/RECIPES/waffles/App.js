import React, {useState} from 'react'
import Waffle from './waffles'
import Heading from './heading'
import Wrep from "./wr"
import Wr from './wrr'
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
     <Waffle name="Waffles" on="breakfast" content="Learn how to make yummy waffles" cont="Recipe-" />
     <Wrep/> <Wr/>
     <p className="h"><Footer/></p>
   </div>  
  );
}
export default A;