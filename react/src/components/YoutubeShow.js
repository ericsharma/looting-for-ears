import React from 'react';


class YoutubeShow extends React.Component {
  constructor(props){
    super(props)

  }


  render() {

    let ids = []
    let individual_songs = this.props.position.map (song => {
      return(
        ids = [...ids, ...song.snippet.resourceId.videoId]

      )
    })




    return(
      <div id="container">
      <div>
      <h3>{this.props.title}</h3>




        <iframe id="player" width="640" height="360"
    src={`https://www.youtube.com/embed/?listType=playlist&list=${this.props.id}`}
    allowTransparency="true" frameBorder="0" allowFullScreen></iframe>


      </div>
      <div>
        <iframe id="player" width="640" height="360"
    src={`https://www.youtube.com/embed/Pbhw5Ne8NIQ`}
    allowTransparency="true" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div>
        <iframe id="player" width="640" height="360"
    src={`https://www.youtube.com/embed/DqPgURTYygQ`}
    allowTransparency="true" frameBorder="0" allowFullScreen></iframe>
      </div>
      </div>








    )
  }


}

export default YoutubeShow
