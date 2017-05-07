import React from 'react';
import YoutubeShowContainer from './YoutubeShowContainer'


class PlaylistShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playlist: []
    }
  }

  componentWillMount() {
      fetch('/api/v1/playlists/:id')
        .then(response => response.json())
        .then(body => {
          this.setState({ playlist: body })
        })
    }
  render() {

    return(
      <h1>
        <YoutubeShowContainer
          playlistId={this.props.playlistId}/>

       </h1>
    )
  }


}

export default PlaylistShowContainer
