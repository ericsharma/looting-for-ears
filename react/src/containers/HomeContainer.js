import React from 'react';
import { Link } from 'react-router';
class HomeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      playlistId: ""
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onPlaylistChange = this.onPlaylistChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)


  }

  onNameChange(event) {
    console.log(event.target.value)
    this.setState({ name: event.target.value })

  }
  onPlaylistChange(event) {
    this.setState({ playlistId: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault();
  }



  render() {

    return(
      <div class="form">
        <h1>Submit a new Playlist</h1>

          <form onSubmit={this.onSubmit}>
           <label>Playlist Name
             <input
               type="text"
               id="name"
               value={this.state.name}
               onChange={this.onNameChange}/>
           </label>
           <label>Playlist Url
             <input
               type="text"
               id="name"
               value={this.state.playlistId}
               onChange={this.onPlaylistChange}/>
           </label>
         </form>




      </div>



    )
  }
}


export default HomeContainer
