import React, { Component } from 'react';
import Card from './CardUI';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import img1 from '../../Assets/games/pic1.jpg';
import img2 from '../../Assets/games/pic2.jpg';
import img3 from '../../Assets/games/pic3.jpg';
import img4 from '../../Assets/games/pic4.jpg';
import img5 from '../../Assets/games/pic5.jpeg';
import img6 from '../../Assets/games/pic6.jpeg';
import img7 from '../../Assets/games/pic7.jpeg';
import img8 from '../../Assets/games/pic8.jpeg';
import img9 from '../../Assets/games/pic9.jpeg';
import img10 from '../../Assets/games/pic10.jpeg';
import img11 from '../../Assets/games/pic11.jpeg';
import img12 from '../../Assets/games/pic12.jpeg';
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
export default function Games(){
    const classes = useStyles();
        return(

           
            <div className="container-fluid justify-content-center">
                <div className="column">
                <Header title="Kids' Corner" sections={sections} />
               <h3 className = "text-center text-blue  my-5px">
                <center>
                {" "}
                   GAMES FOR UNDER 5 YEARS KIDS 
                {" "}
                </center>
             </h3>
             <div className={classes.root}>
                    <Grid container spacing={5}>
                    {/*<Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title=" CAPTAIN TOAD: TREASURE TRACKER " text="Lets Do"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title=" TINYBOP GAMES" text="Enjoy"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title=" TANGRAM " text="More Fun"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title=" RUBIK’S CUBE " text="Discover"/>
                    </div>
                </Grid>*/}
                   <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img8} title=" BULID A FORT " text="Make your own forts and play games!!!!" link="/games/fort" />
                    </div>
                    </Grid>
                   </Grid>
                    </div>
                 
                    
                    <h3 className = "text-center text-blue my-5px">
                       <center>
                       {" "}
                           GAMES FOR 5-8 YEARS KIDS
                        {" "}
                        </center>
                    </h3>
                   
                    <div className={classes.root}>
                    <Grid container spacing={5}>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title=" DROP THE COIN " text="Fun games to enjoy with friends!!!!" link="/games/dropthecoin"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img6} title=" PUZZLES " text="Solve puzzle games!!!!" link="/games/puzzles"/>
                    </div>
                    </Grid>
                    
                    
                  </Grid>
                  </div>
                    
                   
                    <h3 className = "text-center text-blue  my-5px">
                       <center>
                        {" "}
                           GAMES FOR 8-12 YEARS CHILDREN 
                        {" "}
                        </center>
           </h3>
           <div className={classes.root}>
                    <Grid container spacing={5}>
                   {/* <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img9} title="  DROP THE COIN " text="Lets Do"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img10} title=" PUZZLES " text="Enjoy"/>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img11} title=" CARD GAMES " text="More Fun"/>
                    </div>
            </Grid>*/}
                    <Grid item xs={4}>
                    <div className="col-md-4">
                        <Card imgsrc={img7} title=" CARD GAMES " text="Play card games amd have some fun!!!!" link="/games/cards"/>
                    </div>
                    </Grid>
                    
                    </Grid>
                </div>

                
                <Footer title="" description="Your one stop for all your child's entertainment needs!" />   

                </div>
                </div> 
                
        );

    }
