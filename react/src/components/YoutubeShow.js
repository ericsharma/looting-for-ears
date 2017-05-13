import React from 'react';


class YoutubeShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      song: false


    }
    this.createSong = this.createSong.bind(this)


  }
  createSong(name, id){
    let payload = {
        name: name,
        youtube_id: id

    }
    fetch('/api/v1/songs', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload) })
    .then(response => {
      let parsed = response.json()
      return parsed
    })
  }

  render() {


    let songs_with_ids = []
    this.props.position.map (song => {
      songs_with_ids.push({ id: song.snippet.resourceId.videoId, title: song.snippet.title, image: song.snippet.thumbnails.default.url })
    });

    let iframes;
    if (songs_with_ids.length > 0) {
      iframes = songs_with_ids.map(song => {
        let songHandler = () => {
          if (this.state.song === true) {
            return (
              <h2> You've already liked this song</h2>
            )

          } else {


          this.setState({ song: true  })

          this.createSong(song.title, song.id)
        }

        }
        return(
          <div>
            <center>
            <h8>{song.title}</h8> <br/>

            <img src={song.image} ></img>

            <button className="likeSong"onClick={songHandler}>Like Song</button>
            </center>

          </div>

        )
      })
    }




    return(
      <div id="container">
      <div>





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
