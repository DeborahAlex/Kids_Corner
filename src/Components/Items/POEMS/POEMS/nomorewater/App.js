import React, {useState} from 'react'

import Heading from './heading'
import Ttn from './p'
import Poems from './poems'
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
     <Heading h="POEMS~" />
     <Poems name="No More Water" on="5-8" content="Fun poems to read" cont="by Kenn Nesbitt" />
    <Ttn/>
    <p className="h"><Footer/></p>
        </div>  
  );
} 
export default A;