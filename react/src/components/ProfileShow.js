import React from 'react';


class ProfileShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      names: [],
      playlist: [],
      selected: "addSongBefore"
    }
    this.createIndividual = this.createIndividual.bind(this)
    this.submitIndividual = this.submitIndividual.bind(this)
    this.removeIndividual = this.removeIndividual.bind(this)
  }

  createIndividual(id, name){
    let currentPlaylist = this.state.playlist
    let currentName = this.state.names
    let newPlaylist = currentPlaylist.concat(id)
    let newName = currentName.concat(name)


    this.setState({
      playlist: newPlaylist,
      names: newName
    })

  }

  removeIndividual(id, name){
    let currentPlaylist = this.state.playlist
    let newPlaylist = currentPlaylist.filter((item) => {

      return item !== id

    })

    this.setState({ playlist: newPlaylist })

    let currentName = this.state.names
    let newName = currentName.filter((item) => {


      return item !== name

    })

    this.setState({ names: newName})





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
    let currentStateofPlaylist;
    if (this.state.names.length > 0) {
      currentStateofPlaylist = this.state.names.map (name => {


          return (
          <ul> <li>{name}</li> </ul>
        )

      })

    }

    let handleSubmit = () => {
      this.submitIndividual()
    }
    let favoriteSongs = []
    this.props.songs.map (song => {

      favoriteSongs.push({ name: song.name, youtubeId: song.youtube_id })
    });

    let iframes;
    if (favoriteSongs.length > 0) {
      iframes = favoriteSongs.map (song => {
        let individualRemover = () => {
          this.removeIndividual(song.youtubeId, song.name)
        }
        let individualHandler = () => {
          this.createIndividual(song.youtubeId, song.name)
        }


        return(
          <div className="favoritesContainer">
            
             <iframe id="player" width="640" height="360"
        src={`https://www.youtube.com/embed/${song.youtubeId}`}
        allowTransparency="true" frameBorder="0" allowFullScreen></iframe>





      <button className="removeSongButton" onClick={individualRemover}>Delete Song from Playlist</button>
      <button className="addSongButton" onClick={individualHandler}>Add Song to Playlist</button>

      </div>



        )
      })
    }

    let currentState = this.state.playlist

    return(
      <div className="favoritesCenter">
        <div className= "leftSide">
          <a onClick={handleSubmit} href={"individuals"}> Click to save playlist</a> <br/>
          <h5>Current Songs in Playlist</h5>

          {currentStateofPlaylist}
        </div>

        <div>


            {iframes}

        </div>

      </div>



    )
  }


}

export default ProfileShow
