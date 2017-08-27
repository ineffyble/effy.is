import React from 'react';
import { IndexRoute, Route, Redirect} from 'react-router';
import { createRoutesFromReactChildren } from 'react-router/lib//RouteUtils';
import EffyRedirect from './effyredirect.js';

const Effy = () => <div>&lt;Effy&gt; elements are for configuration only and should not be rendered</div>;

Effy.createRouteFromReactElement = (element) => {
  var is = element.props.is.replace(' ', '/');
  var so = element.props.so;
  if (element.props.soRedirectTo) {
    so = EffyRedirect;
  }
  const effyRoute = createRoutesFromReactChildren(
      <Route path={is} component={so} />
  )[0];
  return effyRoute;
};

export default Effy;