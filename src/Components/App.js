import React, {Component} from 'react'
import {
  graphql,
  QueryRenderer
} from 'react-relay'
import Layout from './Layout'

export default class App extends Component {
  render() {
    return(
        <Layout viewer={this.props.viewer}>
          <WidgetList viewer={this.props.viewer}/>
        </Layout>
      );
  }
}
