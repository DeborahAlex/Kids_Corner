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
    { title: 'Songs', url: '/Rhymes' },
    { title: 'Games', url: '/Games' },
    { title: 'Experiments', url: '/Experiment' },
    { title: 'Stories', url: '/Stories' },
  ];
  return (
  
   <div className="app">
     <p className="h"><Header title="Kids' Corner" sections={sections} /></p>
     <Heading h="RHYMES~" />
     <Poems name="Humpty Dumpty" on="3-5" content="Small nursery rhyme" cont="by Lewis Caroll" />
    <Ttn/>
    <p className="h"><Footer/></p>
        </div>  
  );
} 
export default A;