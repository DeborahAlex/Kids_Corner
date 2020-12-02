import React, { Component } from 'react';
import Card from './CardUI';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import img1 from '../../Assets/rhymes/pic1.jpg';
import img2 from '../../Assets/rhymes/pic2.jpg';
import img3 from '../../Assets/rhymes/pic3.jpg';
import img4 from '../../Assets/rhymes/pic4.jpg';
import img5 from '../../Assets/rhymes/pic5.jpeg';
import img6 from '../../Assets/rhymes/pic6.jpeg';
import img7 from '../../Assets/rhymes/pic7.jpeg';
import img8 from '../../Assets/rhymes/pic8.jpeg';
import img9 from '../../Assets/rhymes/pic9.jpeg';
import img10 from '../../Assets/rhymes/pic10.jpeg';
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

export default function Song(){
    const classes = useStyles();
        return(

           
            <div className="container-fluid justify-content-center">
                <div className="column">
                <Header title="Kids' Corner" sections={sections} />
               <h3 className = "text-center text-blue  my-5px">
               <center>
                {" "}
                    RHYMES FOR UNDER 5 YEARS KIDS 
                {" "}
                </center>
           </h3>
           <div className={classes.root}>
                    <Grid container spacing={5}>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title=" HUMPTY DUMPTY " text="Small nursery rhyme" link="/rhymes/humptydumpty"/>
                    </div>
                    </Grid>
                    {/*
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title=" ROW , ROW , ROW YOUR BOAT " text="Enjoy"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title=" RING A RING O’ ROSES " text="More Fun"/>
                    </div>
                    </Grid>*/}
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title=" TWINKLE TWINKLE LITTLE STAR " text="Small nursery rhyme" link="/rhymes/twinkle"/>
                    </div>
                    </Grid>
                    </Grid>
                    </div>
                    <h3 className = "text-center text-blue my-5px">
                       <center>
                       {" "}
                            SONGS FOR 5-8 YEARS KIDS
                        {" "}
                        </center>
                   </h3>
                   <div className={classes.root}>
                    <Grid container spacing={4}>
        
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img7} title=" TELEVISION " text="Fun poems to read" link="rhymes/television"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img8} title=" NO MORE WATER " text="Fun poems to read" link="rhymes/nomorewater"/>
                    </div>
                    </Grid>
                    </Grid>
                    </div>
                    
                   
                   
                    <h3 className = "text-center text-blue  my-5px">
                        <center>
                        {" "}
                            SONGS FOR 8-12 YEARS CHILDREN 
                        {" "}
                        </center>
                        </h3>
                        <div className={classes.root}>
                    <Grid container spacing={4}>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img9} title=" DAFFODILS " text="Meaningful poems to read" link="/rhymes/daffodils"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img10} title=" HOPE IS THE THING WITH FEATHERS " text="Meaningful poems to read" link="/rhymes/hope"/>
                    </div>
                    </Grid>
                    </Grid>
                </div>

              
                <Footer title="" description="Your one stop for all your child's entertainment needs!" />   

                </div>
                </div> 
                
        );

    }



