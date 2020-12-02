import React, { Component } from 'react';
import Card from './CardUI';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import img1 from '../../Assets/recipe/pic1.jpg';
import img2 from '../../Assets/recipe/pic2.jpg';
import img3 from '../../Assets/recipe/pic3.jpg';
import img4 from '../../Assets/recipe/pic4.jpg';
import img5 from '../../Assets/recipe/pic5.jpg';
import img6 from '../../Assets/recipe/pic6.jpg';
import img7 from '../../Assets/recipe/pic7.jpg';
import img8 from '../../Assets/recipe/pic8.jpg';
import img9 from '../../Assets/recipe/pic9.jpeg';
import img10 from '../../Assets/recipe/pic10.jpeg';
import img11 from '../../Assets/recipe/pic11.jpeg';
import img12 from '../../Assets/recipe/pic12.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const sections = [
    { title: 'Home', url: '/' },
    { title: 'Craft', url: '/Crafts' },
    { title: 'Recipe', url: '/Recipes' },
    { title: 'Rhymes', url: '/Rhymes' },
    { title: 'Games', url: '/Games' },
    { title: 'Experiments', url: '/Experiment' },
    { title: 'Stories', url: '/Stories' },
  ];

  export default function Recipe(){
    const classes = useStyles();
        return(
                <div className="container-fluid justify-content-center">
                <div className="column">
                <Header title="Kids' Corner" sections={sections} />
               <h3 className = "text-center text-blue  my-5px">
               <center>
                {" "}
                    RECIPES FOR UNDER 5 YEARS KIDS 
                {" "}
                </center>
               </h3>
               <div className={classes.root}>
                    <Grid container spacing={5}>
                    {/*<Grid item xs={4}> 
                    <div className="col-md-4">
                        <Card imgsrc={img1} title=" APPLE SLICES AND PEANUT BUTTER " text="Lets Do"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title=" YOGURT PARFAIT " text="Enjoy"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title=" POPCORN SNACKS " text="More Fun"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title=" CREAMY LIME POTATO SALAD " text="Discover"/>
                    </div>
        </Grid>*/}
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img10} title=" SANDWICH " text="Prepare healthy and tasty sandwiches! " link="/recipes/sandwiches"/>
                    </div>
                    </Grid>
                    </Grid>
                    </div>

                    <h3 className = "text-center text-blue my-5px">
                       <center>
                       {" "}
                       RECIPES FOR 5-8 YEARS KIDS
                        {" "}
                        </center>
                    </h3>
                    <div className={classes.root}>
                    <Grid container spacing={4}>
                   {/* <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title=" CARROT AND CHUTNEY SANDWICHES " text="Lets Do"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img6} title=" NOODLES WITH CHICKEN " text="Enjoy"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img7} title=" CURD RICE " text="More Fun"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img8} title=" BANANA STRAWBERRY SMOOTHIE " text="Discover"/>
                    </div>
                    </Grid>*/}
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img11} title=" MUG CAKES " text="Make mouth-watering mug cakes in a jiffy" link="/recipes/mugcake"/>
                    </div>
                    </Grid>
                    </Grid>
                    </div>
    
                    <h3 className = "text-center text-blue  my-5px">
                    <center>
                        {" "}
                        RECIPES FOR 8-12 YEARS CHILDREN 
                        {" "}
                    </center>
                    </h3>
                    <div className={classes.root}>
                    <Grid container spacing={5}>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img9} title=" WAFFLES " text="Learn how to make yummy waffles" link="/recipes/waffles"/>
                    </div>
                    </Grid>
                   
                    
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img12} title=" OATS " text="Make easy yet delicious oats with this!" link="/recipes/oats"/>
                    </div>
                    </Grid>
                    </Grid>
                    </div>

    
                <Footer title="" description="Your one stop for all your child's entertainment needs!" />   

                </div>
                </div> 
                
        );

    }



