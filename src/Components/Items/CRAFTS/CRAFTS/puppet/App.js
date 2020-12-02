import React, {useState} from 'react'
import Activity from './act'
import Heading from './heading'
import Pn from './pneed'
import Ps from './psteps'
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
     
     <Activity name="Puppet Making" on="3-5" content="Make your own cute puppets at home!" cont="How to-" />
     <Pn/> <Ps/>
     <p className="h"><Footer/></p>
        </div>  
  );
}
export default A;