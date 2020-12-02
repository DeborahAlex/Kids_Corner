import React, {useState} from 'react'
import Experiment from './exp'
import Heading from './heading'
import Wwn from './wwneeds'
import Wws from './wwpro'
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
     <Heading h="EXPERIMENTS~" />
     <Experiment name="Walking Water" on="5-8" content="Cool experiment to make water walk in rainbow colours!!!!" cont="Manual-" />
     <Wwn/> <Wws/>
     <p className="h"><Footer/></p>
        </div>  
  );
} 
export default A;