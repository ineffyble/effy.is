import React from 'react';
import {render} from 'react-dom';
import Effy from './components/effy.js';
import EffyLayout from './components/effylayout.js';
import ShowEffyThings from './components/showeffythings.js';
import ShowTheirPartners from './components/showtheirpartners.js';
import CheckOutTheirHormoneGraph from './components/checkouttheirhormonegraph.js';
import TheyAreIneffyble from './components/theyareineffyble.js';
import ShowTheirBio from './components/showtheirbio.js';
import ShowTheirTalks from './components/showtheirtalks.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

render(
  <BrowserRouter>
    <EffyLayout>
        <Effy is="effy" so={TheyAreIneffyble} />
        <Effy is="ineffyble" so={ShowEffyThings} />
        <Effy is="in love" so={ShowTheirPartners} />
        <Effy is="on hrt" so={CheckOutTheirHormoneGraph} />
        <Effy is="tweeting" soRedirectTo="theirTwitter" />
        <Effy is="tumbling" soRedirectTo="theirTumblr" />
        <Effy is="running for preselection" so={ShowTheirBio} />
        <Effy is="speaking" so={ShowTheirTalks} />
    </EffyLayout>
  </BrowserRouter>,
   document.getElementById('app'));
