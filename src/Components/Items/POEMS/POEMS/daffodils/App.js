import React, {useState} from 'react'

import Heading from './heading'
import Ttn from './p'
import Poems from './poems'
import Header from './Header'
import Footer from './Footer'
const sections = [
  { title: 'Home', url: '/' },
  { title: 'Craft', url: '/Crafts' },
  { title: 'Recipe', url: '/Recipes' },
  { title: 'Rhymes', url: '/Rhymes' },
  { title: 'Games', url: '/Games' },
  { title: 'Experiments', url: '/Experiment' },
  { title: 'Stories', url: '/Stories' },
];
function A() {

  return (
  
   <div className="app">
    <p className="h"><Header title="Kids' Corner" sections={sections} /></p>
     <Heading h="POEMS~" />
     <Poems name="Daffodils" on="8-12" content="Meaningful poems to read" cont="by William Wodsworth" />
    <Ttn/>
    <p className="h"><Footer/></p>
        </div>  
  );
} 
export default A;