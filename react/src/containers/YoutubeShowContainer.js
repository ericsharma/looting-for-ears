import React from 'react';
import YoutubeShow from '../components/YoutubeShow'


class YoutubeShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playlist: {},
      title: "",
      position: []
    };
  }

  componentDidMount() {
    let currentUrl = window.location.href;
    console.log(currentUrl.match(/[\w]+$/g)[0])
    let playlistDatabaseId = currentUrl.match(/[\w]+$/g)[0]


    let protoURI = "/api/v1/playlists?";
    protoURI += `id=${playlistDatabaseId}`;
    let uri = encodeURI(protoURI);

    fetch(uri)
    .then(response => response.json())
    .then(playlistObject => {
      let playlistId = playlistObject.playlist_id;

      let uri = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId="
      uri += playlistId
      uri += "&key=AIzaSyDd_hMhi34WXD4mE5ok9hVeVKp5QcJLHSs&"

      fetch(uri)
      .then(response => response.json())
      .then(body => {
        this.setState({
          playlist: body.items[0].snippet.playlistId,
          title: body.items[0].snippet.title,
          position: body.items
        });
      })
    });
  }
  render() {

    return(
      <div id="looting">
      <YoutubeShow
      key={this.state.playlist}
      id={this.state.playlist}
      title={this.state.title}
      position={this.state.position}
      />
      </div>



    )
  }
}


export default YoutubeShowContainer
