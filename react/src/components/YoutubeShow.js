import React from 'react';


class YoutubeShow extends React.Component {
  constructor(props){
    super(props)

  }


  render() {

    // let ids = []
    // let individual_songs = this.props.position.map (song => {
    //   return(
    //     ids = [...ids, ...song.snippet.resourceId.videoId]
    //
    //   )
    // })
    let songs_with_ids = []
    this.props.position.map (song => {
      songs_with_ids.push({ id: song.snippet.resourceId.videoId, title: song.snippet.title })
    });

    let iframes;
    if (songs_with_ids.length > 0) {
      iframes = songs_with_ids.map(song => {
        return(
          <div >
            <h8>{song.title}</h8> <br/>
            <iframe
              id={song.id}
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${song.id}`}
              allowTransparency="true"
              frameBorder="0"
              allowFullScreen
              />
            <button>Like Song</button>

          </div>
        )
      })
    }




    return(
      <div id="container">
      <div>
      <h3>Looting For Chill </h3>




        <iframe id="player" width="640" height="360"
    src={`https://www.youtube.com/embed/?listType=playlist&list=${this.props.id}`}
    allowTransparency="true" frameBorder="0" allowFullScreen></iframe>
        <br/>


      </div>
      {iframes}
      </div>








    )
  }


}

export default YoutubeShow
