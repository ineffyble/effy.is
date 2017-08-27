import React from 'react';
import {render} from 'react-dom';
import Effy from './components/effy.js';
import EffyLayout from './components/effylayout.js';
import ShowEffyThings from './components/showeffythings.js';
import ShowHerPartners from './components/showherpartners.js';
import CheckOutHerHormoneGraph from './components/checkoutherhormonegraph.js';
import SheIsIneffyble from './components/sheisineffyble.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

render(
  <BrowserRouter>
    <EffyLayout>
        <Effy is="effy" so={SheIsIneffyble} />
        <Effy is="ineffyble" so={ShowEffyThings} />
        <Effy is="in love" so={ShowHerPartners} />
        <Effy is="on hrt" so={CheckOutHerHormoneGraph} />
        <Effy is="tweeting" soRedirectTo="herTwitter" />
        <Effy is="tumbling" soRedirectTo="herTumblr" />
    </EffyLayout>
  </BrowserRouter>,
   document.getElementById('app'));
