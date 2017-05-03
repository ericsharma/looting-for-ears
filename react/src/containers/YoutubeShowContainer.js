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

  componentWillMount() {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PL7k6guMA0Xct4u4ZpmtcjNE27l7QdHBn-&key=AIzaSyDd_hMhi34WXD4mE5ok9hVeVKp5QcJLHSs&

      `)
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        let erroMessage = `${response.status}, (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
       }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        playlist: body.items[0].snippet.playlistId,
        title: body.items[0].snippet.title,
        position: body.items

      });
    })
    .catch(error => console.error(`Error in fetch: $(error.message)`))
  }



  render() {

    return(
      <div>


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
