import React from 'react';
import { Link } from 'react-router';
class HomeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      playlistId: ""
    }


  }

  onNameChange(event) {
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
        <h1>"Submit a new Playlist"</h1>

          <form onSubmit={this.onSubmit}>
           <label>Playlist Name
             <input
               type="text"
               id="address"
               value={this.state.address}
               onChange={this.onNameChange}/>
           </label>
           <label>Playlist Url
             <input
               type="text"
               id="city"
               value={this.state.city}
               onChange={this.onPlaylistChange}/>
           </label>
         </form>




      </div>



    )
  }
}


export default HomeContainer
