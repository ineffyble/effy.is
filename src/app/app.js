import React from 'react';
import {render} from 'react-dom';
import Effy from './components/effy.js';
import EffyLayout from './components/effylayout.js';
import ShowEffyThings from './components/showeffythings.js';
import ShowHerPartners from './components/showherpartners.js';
import CheckOutHerHormoneGraph from './components/checkoutherhormonegraph.js';
import {Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/"><IndexRedirect to="/ineffyble" /></Route>
    <Route component={EffyLayout}>
      <Effy is="ineffyble" so={ShowEffyThings} />
      <Effy is="in love" so={ShowHerPartners} />
      <Effy is="on hrt" so={CheckOutHerHormoneGraph} />
      <Effy is="tweeting" soRedirectTo="herTwitter" />
      <Effy is="tumbling" soRedirectTo="herTumblr" />
    </Route>
  </Router>,
   document.getElementById('app'));
