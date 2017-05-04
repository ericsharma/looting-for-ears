import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import HomeContainer from './containers/HomeContainer'
import YoutubeShowContainer from './containers/YoutubeShowContainer'



class Root extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' >
          <Route path='playlists' component={YoutubeShowContainer} />
        </Route>
      </Router>
    )
  }
}


export default Root;
