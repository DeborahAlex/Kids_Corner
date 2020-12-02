import React, {useState} from 'react'
import Sandwiches from './sandwiches'
import Heading from './heading'
import Srep from './sr'
import Sr from './srr'
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
     <Heading h="RECIPES~" />
     <Sandwiches name="Sandwiches" on="snacks" content="Prepare healthy and tasty sandwiches! " cont="Recipe-" />
     <Srep/> <Sr/>
     <p className="h"><Footer/></p>
   </div>  
  );
}
export default A;