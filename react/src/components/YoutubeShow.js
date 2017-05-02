import React from 'react';




class YoutubeShow extends React.Component {
  constructor(props){
    super(props)

  }

  render() {


    return(
      <div>
      <h3>{this.props.title}</h3>



        <iframe id="ytplayer" type="text/html" width="640" height="360"
    src={`https://www.youtube.com/embed/?listType=playlist&list=${this.props.id}`}
    frameBorder="0" allowFullScreen></iframe>
      </div>



    )
  }

}

export default YoutubeShow
