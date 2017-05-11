import React from 'react';
import YoutubeShowContainer from '../containers/YoutubeShowContainer'



class PlaylistShow extends React.Component {
  constructor(props){
    super(props)
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
