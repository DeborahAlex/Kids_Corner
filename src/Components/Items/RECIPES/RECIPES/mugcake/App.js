import React, {useState} from 'react'
import Mugcake from './mugcake'
import Heading from './heading'
import Mrep from './mr'
import Mr from './mrr'
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
     <Mugcake name="Mug Cake" on="sweet tooth" content="Make mouth-watering mug cakes in a jiffy" cont="Recipe-" />
     <Mrep/> <Mr/>
     <p className="h"><Footer/></p>
   </div>  
  );
}
export default A;