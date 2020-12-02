import React, {useState} from 'react'
import Activity from './act'
import Heading from './heading'
import Psn from './psneeds'
import Pss from './pssteps'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
function A() {
  const sections = [
    { title: 'Home', url: '/' },
    { title: 'Craft', url: '/Crafts' },
    { title: 'Recipe', url: '/Recipes' },
    { title: 'Rhymes', url: '/Rhymes' },
    { title: 'Games', url: '/Games' },
    { title: 'Experiments', url: '/Experiment' },
    { title: 'Stories', url: '/Stories' },
  ];
  return (
  
   <div className="app">
     <p className="h"><Header title="Kids' Corner" sections={sections} /></p>
     <Heading h="CRAFTS~" />
     <Activity name="Pen Stand" on="5-8" content="Create your own pen stand using ice-cream sticks!!!!" cont="How to-" />
     <Psn/> <Pss/>
     <p className="h"><Footer/></p>
        </div>  
  );
} 
export default A;