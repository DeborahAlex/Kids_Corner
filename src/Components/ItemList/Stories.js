import React, { Component } from 'react';
import Card from './CardUI';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import img1 from '../../Assets/stories/pic1.jpeg';
import img2 from '../../Assets/stories/pic2.jpeg';
import img3 from '../../Assets/stories/pic3.jpeg';
import img4 from '../../Assets/stories/pic4.jpeg';
import img5 from '../../Assets/stories/pic5.jpeg';
import img6 from '../../Assets/stories/pic6.jpeg';
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

export default function Stories(){
    const classes = useStyles();
        return(

           
            <div className="container-fluid justify-content-center">
                <div className="column">
                <Header title="Kids' Corner" sections={sections} />
               <h3 className = "text-center text-blue  my-5px">
                <center>
                {" "}
                    STORIES FOR UNDER 5 YEARS KIDS 
                {" "}
                </center>
           </h3>
           <div className={classes.root}>
                    <Grid container spacing={5}>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title=" GOLDILOCKS " text="Fun children's stories to read" link="/stories/goldilocks"/>
                    </div>
                    </Grid>
                    {/*
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title=" JUNGLE BOOK " text="Enjoy"/>
                    </div>
                    </Grid>*/}
                  </Grid>
                  </div>

                    
                    
                    <h3 className = "text-center text-blue my-5px">
                       <center>
                       {" "}
                            STORIES FOR 5-8 YEARS KIDS
                        {" "}
                        </center>
           </h3>
           <div className={classes.root}>
                    <Grid container spacing={5}>
                    {/* <Grid item xs={4}>
                   
                   <div className="col-md-4">
                        <Card imgsrc={img3} title=" CHARLOTTE'S WEB " text="Lets Do"/>
                    </div>
                </Grid>*/}
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title=" PETER PAN " text="Books that will leave you content" link="/stories/peterpan"/>
                    </div>
                    </Grid>
                    </Grid>
                   </div>
                    <h3 className = "text-center text-blue  my-5px">
                       <center>
                        {" "}
                            STORIES FOR 8-12 YEARS CHILDREN 
                        {" "}
                        </center>
           </h3>
           <div className={classes.root}>
                    <Grid container spacing={5}>
                    {/* <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title=" TREASURE ISLAND " text="Lets Do"/>
                    </div>
            </Grid>*/}
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img6} title=" ROBIN HOOD " text="Stories that will take you to faraway lands" link="/stories/robinhood"/>
                    </div>
                    </Grid>
                    </Grid>
                    </div>

     
                <Footer title="" description="Your one stop for all your child's entertainment needs!" />   

                </div>
                </div> 
                
        );

    }



