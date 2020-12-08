import React, { Component } from 'react';
import Card from './CardUI';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import img1 from '../../Assets/crafts/pic1.jpg';
import img2 from '../../Assets/crafts/pic2.jpg';
import img3 from '../../Assets/crafts/pic3.jpg';
import img4 from '../../Assets/crafts/pic4.jpg';
import img5 from '../../Assets/crafts/pic5.jpg';
import img6 from '../../Assets/crafts/pic6.jpg';
import img7 from '../../Assets/crafts/pic7.jpg';
import img8 from '../../Assets/crafts/pic8.jpg';
import img9 from '../../Assets/crafts/pic9.jpeg';
import img10 from '../../Assets/crafts/pic10.jpeg';
import img11 from '../../Assets/crafts/pic11.jpeg';
import img12 from '../../Assets/crafts/pic12.jpeg';
import { makeStyles } from '@material-ui/core/styles';
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
  export default function Craft(){
    
        const classes = useStyles();
        return(
            
            <div className="container-fluid justify-content-center">
                <div className="column">
                <Header title="Kids' Corner" sections={sections} />
               <h3 className = "HeadSubTitle">
                   <center>
                {" "}
                    CRAFTS FOR UNDER 5 YEARS KIDS 
                {" "}
                    </center>
                    </h3>
                    <div className={classes.root}>
                    <Grid container spacing={5}>
                    {/*
                   <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title=" STRAW ROCKETS " text="Lets Do"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title=" PAPER PLATE CROWN " text="Enjoy"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title=" COLOURFUL JELLYFISH CRAFT " text="More Fun"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title=" PLASTIC PLATE SNOW GLOBE CRAFT " text="Discover"/>
                    </div>
                    </Grid>*/}
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img12} title=" PUPPET MAKING " text="Make your own cute puppets at home!" link="crafts/puppet"/>
                    </div>
                    </Grid>
                    </Grid>
                    </div>
                    
                    <h3 className = "text-center text-blue my-5px">
                       <center>
                       {" "}
                            CRAFTS FOR 5-8 YEARS KIDS
                        {" "}
                        </center>
                        </h3>
                        <div className={classes.root}>
                    <Grid container spacing={4}>
                   {/* <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title=" HOPPING GRASSHOPPER " text="Lets Do"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img6} title=" MELTED CRAYON BUTTERFLIES " text="Enjoy"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img7} title=" DANCING PUPPETS " text="More Fun"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img8} title=" LEAF PAINT BRUSHES " text="Discover"/>
                    </div>
                </Grid>*/}
                <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img11} title=" ORIGAMI " text="Learn the Japanese art of paper folding" link="crafts/origami"/>
                    </div>
                    </Grid>
                    </Grid>
                   </div>
                    <h3 className = "text-center text-blue  my-5px">
                        <center>
                        {" "}
                            CRAFTS FOR 8-12 YEARS CHILDREN 
                        {" "}
                         </center>
                         </h3>
                         <div className={classes.root}>
                    <Grid container spacing={5}>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img9} title=" SLIME " text="Make easy, colorful slime at home!!!!" link="crafts/slime"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img10} title=" QUILLING " text="Learn to make creative designs just by rolling strips of paper!!!!" link="crafts/quilling"/>
                    </div>
                    </Grid>
                    
                    
                    </Grid>
                    </div>


                <Footer title="" description="Your one stop for all your child's entertainment needs!" />   


                </div>
                </div> 
               
                
        );

    }

