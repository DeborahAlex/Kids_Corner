import React, {useState} from 'react'

import Heading from './heading'
import Sn from './s'
import Story from './story'
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
     <Heading h="STORIES~" />
     <Story name="Peter Pan" on="5-8" content="Books that will leave you content" cont="by J. M. Barrie" />
    <Sn/>
    <p className="h"><Footer/></p>
        </div>  
  );
} 
export default A;