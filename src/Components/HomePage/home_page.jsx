
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../Header/Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from '../Footer/Footer';

var React = require('react');

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
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

const mainFeaturedPost = {
  title: 'Your one stop for all your child\'s entertainment needs!',
  description:
    "\"But my child is below five.. What do I do?\" Don't fear we are here for you... With activities from below five to age twelve, you're bound to find activities your child enjoys...",
  image: 'https://source.unsplash.com/random/?kids,playing,fun,',
  imgText: 'main image description',
  linkText: 'Don\'t have an account yet? Sign up',
};

const featuredPosts = [
  {
    title: 'Quilling',
    date: 'Nov 12',
    description:'Learn to make creative designs just by rolling paper!!!!',
    image: 'https://i.ytimg.com/vi/_imrlAmT8bg/maxresdefault.jpg',
    imageText: 'Image Text',
    link: '/crafts/quilling',
  },
  {
    title: 'Flower Chromatography',
    date: 'Nov 11',
    description:'Turn white flowers into colourful ones!!!!',
    image: 'https://th.bing.com/th/id/OIP.viUzkhlC1wTKmpNu6UE1QwHaHa?pid=Api&rs=1',
    imageText: 'Image Text',
    link: '/experiment/flower',
  },
];


const sidebar = {
  title: 'About',
  description:
    'In the busy world that we live in, time is very precious. It often takes a lot of time to find different age appropriate activities to keep children entertained.  We hope to provide a platform with a lot of options where you can come to get ideas and inspiration to keep your little ones entertained. ',
  
  social: [
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Kids' Corner" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="The Display Wall" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              //archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
          
        </main>
      </Container>
      <Footer title="" description="Your one stop for all your child's entertainment needs!" />
    </React.Fragment>
  );
}