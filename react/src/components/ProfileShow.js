import React from 'react';


class ProfileShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }


  render() {
    let favoriteSongs = []
    this.props.songs.map (song => {

      favoriteSongs.push({ name: song.name, youtubeId: song.youtube_id })
    });
    console.log(favoriteSongs)
    let iframes;
    if (favoriteSongs.length > 0) {
      iframes = favoriteSongs.map (song => {
        return(
          <div>
            <h8>{song.name}</h8>
             <iframe id="player" width="640" height="360"
        src={`https://www.youtube.com/embed/${song.youtubeId}`}
        allowTransparency="true" frameBorder="0" allowFullScreen></iframe>

          </div>
        )
      })
    }
    return(
      <div id="container">

        {iframes}
      </div>



    )
  }


}

export default ProfileShow
