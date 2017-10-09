import makeRouteConfig from 'found/lib/makeRouteConfig'
import Route from 'found/lib/Route'
import React from 'react'
import {graphql} from 'react-relay'

import App from './Components/App'
import RedirectException from 'found/lib/RedirectException';

const query = graphql`
query Routes_Query {
  viewer {
    ...Layout_viewer
  }

}`

export default makeRouteConfig(
  <Route path="/" Component={App} query={query}  onError={err=>{debugger;}} />,
)
