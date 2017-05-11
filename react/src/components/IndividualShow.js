import React from 'react';

class IndividualShow extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(

      <div id='PlaylistIndexBox'>
      <iframe id="player" width="640" height="360"
        src={`https://www.youtube.com/embed/${this.props.firstSong}?playlist=${this.props.list}`}
        allowTransparency="true" frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }


}

export default IndividualShow
