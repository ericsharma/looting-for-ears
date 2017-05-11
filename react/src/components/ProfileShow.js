import React from 'react';


class ProfileShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playlist: []
    }
    this.createIndividual = this.createIndividual.bind(this)
    this.submitIndividual = this.submitIndividual.bind(this)
  }

  createIndividual(id){
    this.state.playlist.push(id)


  }

  submitIndividual() {
    let payload = {
      first_song: this.state.playlist.shift(),
      list: this.state.playlist.toString()

    }


    fetch('/api/v1/individuals', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload) })
    .then(response => {
      let parsed = response.json()
      return parsed
    })

  }

  render() {

    let handleSubmit = () => {
      this.submitIndividual()
    }
    let favoriteSongs = []
    this.props.songs.map (song => {

      favoriteSongs.push({ name: song.name, youtubeId: song.youtube_id })
    });
    console.log(favoriteSongs)
    let iframes;
    if (favoriteSongs.length > 0) {
      iframes = favoriteSongs.map (song => {
        let individualHandler = () => {
          this.createIndividual(song.youtubeId)
        }


        return(
          <div>
            <h8>{song.name}</h8>
             <iframe id="player" width="640" height="360"
        src={`https://www.youtube.com/embed/${song.youtubeId}`}
        allowTransparency="true" frameBorder="0" allowFullScreen></iframe>

      <button onClick={individualHandler}>Add Song Playlist</button>
          </div>
        )
      })
    }
    let currentUrl = window.location.href;
    currentUrl += "/individuals"
    return(
      <div id="container">
          <button onClick={handleSubmit}>Click to save playlist</button> <br/>
          <a href={`${currentUrl}`}>View Personal Playlists</a>

          {iframes}

      </div>



    )
  }


}

export default ProfileShow
