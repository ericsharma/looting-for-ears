import React from 'react';
import YoutubeShowContainer from '../containers/YoutubeShowContainer'



class PlaylistShow extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(

      <div className='playlistIndex'>



        <div className='PlaylistIndexEntry'>
          <a href={`playlists/${this.props.id}`}>{this.props.name}</a>
        </div>
      </div>
    )
  }


}

export default PlaylistShow
