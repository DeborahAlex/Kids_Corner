import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import Gallery from './imgpart/src/components/Gallery'
import * as serviceWorker from './serviceWorker';
import Home from './Components/HomePage/home_page';
import SignUp from './Components/SignUp/signupside';
import SignIn from './Components/SignIn/signin'
import WrongPassword from './Components/SignIn/wrongpassword'
import AccountNotFound from './Components/SignIn/accountnotfound'
import UserExists from './Components/SignUp/User_exists'
import ImageUpload from './imgpart/src/components/HomePage'
import Crafts from './Components/ItemList/Crafts'
import Stories from './Components/ItemList/Stories'
import Games from './Components/ItemList/Games'
import Rhymes from './Components/ItemList/Rhymes'
import Recipes from './Components/ItemList/Recipe'
import Experiment from './Components/ItemList/Experiments'
import LadyFinger from './Components/Items/CRAFTS/CRAFTS/ladyfinger/App'
import Origami from './Components/Items/CRAFTS/CRAFTS/origami/App'
import Penstand from './Components/Items/CRAFTS/CRAFTS/penstand/App'
import Puppet from './Components/Items/CRAFTS/CRAFTS/puppet/App'
import Quilling from './Components/Items/CRAFTS/CRAFTS/quilling/App'
import Slime from './Components/Items/CRAFTS/CRAFTS/slime/App'
import Flower from './Components/Items/EXPERIMENTS/EXPERIMENTS/flower/App'
import Lavalamp from './Components/Items/EXPERIMENTS/EXPERIMENTS/lavalamp/App'
import Magicmilk from './Components/Items/EXPERIMENTS/EXPERIMENTS/magicmilk/App'
import Walkingwater from './Components/Items/EXPERIMENTS/EXPERIMENTS/walkingwater/App'
import Cardss from './Components/Items/GAMES _/GAMES/cards/App'
import Dropthecoin from './Components/Items/GAMES _/GAMES/dropthecoin/App'
import Fort from './Components/Items/GAMES _/GAMES/fort/App'
import Puzzles from './Components/Items/GAMES _/GAMES/puzzles/App'
import Daffodils from './Components/Items/POEMS/POEMS/daffodils/App'
import Hope from './Components/Items/POEMS/POEMS/hope/App'
import Humptydumpty from './Components/Items/POEMS/POEMS/humptydumpty/App'
import Nomorewater from './Components/Items/POEMS/POEMS/nomorewater/App'
import Television from './Components/Items/POEMS/POEMS/television/App'
import Twinkle from './Components/Items/POEMS/POEMS/twinkle/App'
import Mugcake from './Components/Items/RECIPES/RECIPES/mugcake/App'
import Oats from './Components/Items/RECIPES/RECIPES/oats/App'
import Sandwiches from './Components/Items/RECIPES/RECIPES/sandwiches/App'
import Waffles from './Components/Items/RECIPES/RECIPES/waffles/App'
import Goldilocks from './Components/Items/STORIES/STORIES/goldilocks/App'
import Peterpan from './Components/Items/STORIES/STORIES/peterpan/App'
import Robinhood from './Components/Items/STORIES/STORIES/robinhood/App'
import {BrowserRouter as Router, Route} from "react-router-dom";
import SignUpSuccess from './Components/SignUp/sign_up_success';
import store from './imgpart/src/store/store'
//import { SdCardSharp } from '@material./Components/ItemList/-ui/icons';
ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/signup" exact component={SignUp}/>
    <Route path="/signin" exact component={SignIn}/>
    <Route path="/imageupload" exact component={ImageUpload}/>
    <Provider store={store}>
    <Route path="/gallery" exact component={Gallery}/>
    </Provider>
    <Route path="/userexists" exact component={UserExists}/>
    <Route path="/wrongpassword" exact component={WrongPassword}/>
    <Route path="/usernotfound" exact component={AccountNotFound}/>
    <Route path="/crafts" exact component={Crafts}/>
    <Route path="/stories" exact component={Stories}/>
    <Route path="/games" exact component={Games}/>
    <Route path="/rhymes" exact component={Rhymes}/>
    <Route path="/recipes" exact component={Recipes}/>
    <Route path="/experiment" exact component={Experiment}/>
    <Route path='/crafts/ladyfinger' component={LadyFinger}/>
    <Route path="/crafts/origami" component={Origami}/>
    <Route path="/crafts/penstand" component={Penstand}/>
    <Route path="/crafts/puppet" component={Puppet}/>
    <Route path="/crafts/slime" component={Slime}/>
    <Route path="/crafts/quilling" component={Quilling}/>
    <Route path="/experiment/flower" component={Flower}/>
    <Route path="/experiment/lavalamp" component={Lavalamp}/>
    <Route path="/experiment/magicmilk" component={Magicmilk}/>
    <Route path="/experiment/walkingwater" component={Walkingwater}/>
    <Route path="/games/cards" component={Cardss}/>
    <Route path="/games/dropthecoin" component={Dropthecoin}/>
    <Route path="/games/fort" component={Fort}/>
    <Route path="/games/puzzles" component={Puzzles}/>
    <Route path="/rhymes/daffodils" component={Daffodils}/>
    <Route path="/rhymes/hope" component={Hope}/>
    <Route path="/rhymes/humptydumpty" component={Humptydumpty}/>
    <Route path="/rhymes/television" component={Television}/>
    <Route path="/rhymes/twinkle" component={Twinkle}/>
    <Route path="/rhymes/nomorewater" component={Nomorewater}/>
    <Route path="/recipes/mugcake" component={Mugcake}/>
    <Route path="/recipes/oats" component={Oats}/>
    <Route path="/recipes/sandwiches" component={Sandwiches}/>
    <Route path="/recipes/waffles" component={Waffles}/>
    <Route path="/stories/goldilocks" component={Goldilocks}/>
    <Route path="/stories/peterpan" component={Peterpan}/>
    <Route path="/stories/robinhood" component={Robinhood}/>
    <Route path="/signupsuccess" component={SignUpSuccess}/>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
