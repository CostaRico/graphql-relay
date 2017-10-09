import React, {Component} from 'react'
import BrowserProtocol from 'farce/lib/BrowserProtocol'
import queryMiddleware from 'farce/lib/queryMiddleware'
import createFarceRouter from 'found/lib/createFarceRouter'
import createRender from 'found/lib/createRender'
import {Resolver} from 'found-relay'
import {graphql} from 'react-relay'

import Routes from './Routes'
import environment from './Environment'

const FarceRouter = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: [{
    path: '/',
    query: graphql`
         query Router_Query {
          viewer {
            Post(id: "cj8kjyidn2odi0136i8v87a2a"){
              name
              id
            }
          }
        }
        `,
    render: (data) => {
      debugger;
      // if (resolving && props) {
      //   throw new RedirectException(`/${props.widget.name}`);
      // }

      return null;
    },
  }],
  resolver: new Resolver(environment),
  render: createRender({}),
});

export default class Router extends Component {
  render() {
    return (
      <FarceRouter resolver={new Resolver(environment)}/>
    )
  }
}
