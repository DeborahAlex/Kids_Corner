import React, {useState} from 'react'
import Activity from './act'
import Heading from './heading'
import Sn from './sneed'
import Ss from './ssteps'
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
     <Activity name="Slime Making" on="8-12" content="Make easy, colorful slime at home!!!!" cont="How to-" />
     <Sn/> <Ss/>
     <p className="h"><Footer/></p>
        </div>  
  );
}
export default A;