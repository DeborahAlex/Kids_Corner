import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];
//const cards = [1,2,3,4,5,6];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={3}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="data:image/jpeg;base64,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"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Kids Fort
                    </Typography>
                    <Typography>
                      The kids had a blast with this idea!!
                    </Typography>
                  </CardContent>
      
                </Card>
                
              </Grid>
            ))}

{cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.coplusk.net/project_images/205319/image/2018-08-21-000637-Ultimate-Slime-Recipe-3.jpg"
                    title="Joe's Slime"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Joe's Slime
                    </Typography>
                    <Typography>
                      This is the slime we made!!
                    </Typography>
                  </CardContent>
                </Card>
                
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://tse1.mm.bing.net/th?id=OIP.3jemHJLNJ23p13YHwVLQ7AHaEK&pid=Api&P=0&w=269&h=152"
                    title="Deepa's Work"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Deepa's Lovely Flowers
                    </Typography>
                    <Typography>
                      Hi! I am Deepa. I love flowers and to draw. 
                    </Typography>
                  </CardContent>
                </Card>
                
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    
    </React.Fragment>
  );
}