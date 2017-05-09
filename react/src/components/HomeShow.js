import React from 'react';
import YoutubeShowContainer from '../containers/YoutubeShowContainer'



class PlaylistShow extends React.Component {
  constructor(props){
    super(props)
  }

  createPlaylist(name, id){
    let payload = {
        name: name,
        playlist_id: id

    }
    fetch('/api/v1/playlists', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload) })
    .then(response => {
      let parsed = response.json()
      return parsed
    })
  }

  render() {
    return(
      <div id='PlaylistIndexBox'>
        <div className='PlaylistIndexEntry'>
          <a href={`playlists/${this.props.id}`}>{this.props.name}</a>
        </div>
      </div>
    )
  }


}

export default PlaylistShow
