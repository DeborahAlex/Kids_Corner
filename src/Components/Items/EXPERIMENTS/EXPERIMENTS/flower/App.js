import React, {useState} from 'react'
import Experiment from './exp'
import Heading from './heading'
import Fcn from './fcneeds'
import Fcs from './fcpro'
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
     <Experiment name="Flower Chromatography" on="5-8" content="Turn white flowers into colourful ones!!!!" cont="Manual-" />
     <Fcn/> <Fcs/>
     <p className="h"><Footer/></p>
        </div>  
  );
} 
export default A;