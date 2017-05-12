import React from 'react';
import PlaylistShow from '../components/PlaylistShow'



class PlaylistIndexContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playlists: []
    }
  }

  componentWillMount() {
      fetch('/api/v1/playlists')
        .then(response => response.json())
        .then(body => {

          this.setState({ playlists: body })
        })

    }
  render() {
    let all_playlists = this.state.playlists.map (playlist => {
      return(
        <PlaylistShow
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          playlistId={playlist.playlist_id}
        />

      )
    });
    return(
      <div>
        <div className="playlistIndex">
      <h1>Curated Playlists</h1>
        </div>
      <h3>{all_playlists}</h3>
      </div>

    )
  }


}

export default PlaylistIndexContainer
