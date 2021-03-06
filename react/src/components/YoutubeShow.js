import React from 'react';


class YoutubeShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      messages: []


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
    }).then(message => {
      this.setState({ messages: message.message })
    })
  }


  render() {

    let currentMessage;
    if (this.state.messages.length > 0) {
      debugger;

      currentMessage = this.state.messages.map (message => {

        return (
          <h4>{message}</h4>
        )
      })
    }


    let songs_with_ids = []
    this.props.position.map (song => {
      songs_with_ids.push({ id: song.snippet.resourceId.videoId, title: song.snippet.title, image: song.snippet.thumbnails.default.url })
    });

    let iframes;
    if (songs_with_ids.length > 0) {
      iframes = songs_with_ids.map(song => {
        let songHandler = () => {





          this.createSong(song.title, song.id)


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
      <div >
        <div className="leftSide">
        {currentMessage}
      </div>
      <div id="container">


      <div>





        <iframe id="player" width="640" height="360"
    src={`https://www.youtube.com/embed/?listType=playlist&list=${this.props.id}`}
    allowTransparency="true" frameBorder="0" allowFullScreen></iframe>
        <br/>


      </div>
      {iframes}
      </div>
      </div>







    )
  }


}

export default YoutubeShow
