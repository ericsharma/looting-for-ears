import React from 'react';
import { Link } from 'react-router';
import HomeShow from '../components/HomeShow'
class HomeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      playlistId: "",
      url: ""
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onPlaylistChange = this.onPlaylistChange.bind(this)



  }

  onNameChange(event) {
    console.log(event.target.value)
    this.setState({ name: event.target.value })

  }
  onPlaylistChange(event) {
    // this.setState({ url: event.target.value })
    // let id = this.state.url.match(/[\w-]+$/g)[0]
    // this.setState({ playlistId: {id} })
    this.setState({ url: event.target.value })
    this.setState({ playlistId: event.target.value.match(/[\w-]+$/g)[0] })
    // /\w+-?$/g

  }
  createPlaylist(name, id){
    let payload = {
        name: name,
        playlist_id: id

    }

    fetch('/api/v1/playlists', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload) })
    .then(response => {
      let parsed = response.json()
      return parsed
    })
  }



  render() {
    let playlistHandler = () => {
      this.createPlaylist(this.state.name, this.state.playlistId)
    }

    return(
      <div class="form">
        <h1>Submit a new Playlist</h1>

          <form onSubmit={playlistHandler}>
           <label>Playlist Name
             <input
               type="text"
               id="name"
               value={this.state.name}
               onChange={this.onNameChange}/>
           </label>
           <label>Playlist Url (Form will automatically extract relevant Playlist Id)
             <input
               type="text"
               id="name"
               value={this.state.url}
               onChange={this.onPlaylistChange}/>
           </label>
           <input type="submit" className="button" value="Submit" />
         </form>




      </div>



    )
  }
}


export default HomeContainer
