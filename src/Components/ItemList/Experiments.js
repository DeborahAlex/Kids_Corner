import React, { Component } from 'react';
import Card from './CardUI';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import img1 from '../../Assets/experiment/pic1.jpg';
import img2 from '../../Assets/experiment/pic2.jpg';
import img3 from '../../Assets/experiment/pic3.jpg';
import img4 from '../../Assets/experiment/pic4.jpg';
import img5 from '../../Assets/experiment/pic5.jpg';
import img6 from '../../Assets/experiment/pic6.jpg';
import img7 from '../../Assets/experiment/pic7.jpg';
import img8 from '../../Assets/experiment/pic8.jpg';
import img9 from '../../Assets/experiment/pic9.jpeg';
import img10 from '../../Assets/experiment/pic10.jpeg';
import img11 from '../../Assets/experiment/pic11.jpeg';
import img12 from '../../Assets/experiment/pic12.jpeg';
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
  
  export default function Experiment() {

const classes = useStyles();
        return(

           
            <div className="container-fluid justify-content-center">
                <div className="column">
                <Header title="Kids' Corner" sections={sections} />
               <h3 className ="HeadSubTitle">
               <center>
                {" "}
                    EXPERIMENTS FOR UNDER 5 YEARS KIDS 
                {" "}
                </center>
                </h3>
                <div className={classes.root}>
                    <Grid container spacing={5}>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img10} title=" MAGIC MILK " text="Make a colourful explosion in milk using science!!!" link="/experiment/magicmilk"/>
                    </div>
                    </Grid>
                    {/*
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title=" MAKE A WALKING WATER RAINBOW " text="Enjoy"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title=" HOW TO MAKE ROCK CANDY " text="More Fun"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title=" THE PEPPER AND SOAP EXPERIMENT " text="Discover"/>
                    </div>
                    </Grid>*/}
                    </Grid>
                    </div>
    
                    
                    <h3 className = "text-center text-blue my-5px">
                    <center>
                       {" "}
                           EXPERIMENTS FOR 5-8 YEARS KIDS
                        {" "}
                        </center>
                    </h3>
                   
                    <div className={classes.root}>
                    <Grid container spacing={4}>
                   {/* <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title=" SUPERHERO BUOYANCY EXPERIMENT " text="Lets Do"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img6} title=" EGG IN VINEGAR EXPERIMENT " text="Enjoy"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img7} title=" MAGNETIC CEREL " text="More Fun"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img8} title=" BAKING SOAD POWDERED BOAT " text="Discover"/>
                    </div>
                    </Grid>*/}
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img9} title=" FLOWER CHROMATOGRAPHY " text="Turn white flowers into colourful ones!!!!" link="/experiment/flower"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img11} title=" WALKING WATER " text="Cool experiment to make water walk in rainbow colours!!!!" link="/experiment/walkingwater"/>
                    </div>
                    </Grid>
                    </Grid>
                    </div>
                   
                    <h3 className = "text-center text-blue  my-5px">
                       <center>
                        {" "}
                           EXPERIMENTS FOR 8-12 YEARS CHILDREN 
                        {" "}
                        </center>
           </h3>
           <div className={classes.root}>
                    <Grid container spacing={5}>
                   
                  
                   
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img12} title=" LAVA LAMP " text="Create a mesmerizing lava lamp at home!!!!" link="/experiment/lavalamp"/>
                    </div>
                    </Grid>
                    </Grid>
                    </div>
                <Footer title="" description="Your one stop for all your child's entertainment needs!" />   

                </div>
                </div> 
                
        );

    }


