import React from 'react';
import { Link } from 'react-router';
class HomeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playlist: {},
      title: "",
      position: []
    };


  }




  render() {

    return(
      <div>
        <h1>Eric Sharma</h1>
        <h3>Looting for Ears</h3>

       <Link to={`/playlists`}> Click To see the first playlist </Link>

      </div>



    )
  }
}


export default HomeContainer
