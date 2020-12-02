import React, {useState} from 'react'
import Activity from './act'
import Heading from './heading'
import Qn from './qneeds'
import Qs from './qsteps'
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
     <Heading h="CRAFTS~" />
     <Activity name="Quilling" on="8-12" content="Learn to make creative designs just by rolling strips of paper!!!!" cont="How to-" />
     <Qn/> <Qs/>
     <p className="h"><Footer/></p>
        </div>  
  );
} 
export default A;