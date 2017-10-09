import React, {Component} from 'react'
import {
  graphql,
  QueryRenderer
} from 'react-relay'
import Layout from './Layout'

export default class App extends Component {
  render() {
    debugger;
    throw new Error();
    return(
        <Layout viewer={this.props.viewer}>

        </Layout>
      );
  }
}
