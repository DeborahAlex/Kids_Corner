import React, {useState} from 'react'
import Experiment from './exp'
import Heading from './heading'
import Mmn from './mmneeds'
import Mms from './mmpro'
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
     <Experiment name="Magic Milk" on="3-5" content="Make a colourful explosion in milk using science!!!" cont="Manual-" />
     <Mmn/> <Mms/>
     <p className="h"><Footer/></p>
        </div>  
  );
} 
export default A;