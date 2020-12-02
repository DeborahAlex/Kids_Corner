import React, {useState} from 'react'
import Activity from './act'
import Heading from './heading'
import Lfn from './lfneed'
import Lfs from './lfsteps'
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
     <Activity name="Lady Finger Painting" on="3-5" content="Paint an easy and vibrant drawing with lady fingers!!!!" cont="How to-" />
     <Lfn/> <Lfs/>
     <p className="h"><Footer/></p>
        </div>  
  );
} 
export default A;