import React from 'react';

class IndividualShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstSong: "",
      list: "",
      name: "",
      edit: window.location.href + "/edit"

    }
  }


  componentDidMount() {
    let currentUrl = window.location.href;

    let individualDatabaseId = currentUrl.match(/[\w]+$/g)[0]


    let protoURI = "/api/v1/individuals/";
    protoURI += `${individualDatabaseId}`;
    let uri = encodeURI(protoURI);

    fetch(uri, {
      credentials: `same-origin`,
      method: 'GET'
    })
      .then(response => response.json())
      .then(body => {

        console.log(body)
        this.setState({
          firstSong: body.first_song,
          list: body.list,
          name: body.name

        })
      }

      )


  }

  render() {

    return(
      <div>
        <div id="containerNoVid">
          <a href= {this.state.edit}>Click to Edit Playlist Name</a> <br/>
                  {this.state.name} <br/>
        </div>
        <div id='container'>

          <iframe id="player" width="640" height="360"
            src={`https://www.youtube.com/embed/${this.state.firstSong}?playlist=${this.state.list}`}
            allowTransparency="true" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    )
  }


}

export default IndividualShow
