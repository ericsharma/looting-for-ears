import React from 'react';



class PlaylistShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playlist: []
    }
  }

  componentWillMount() {
      fetch('/api/v1/songs/:id')
        .then(response => response.json())
        .then(body => {
          this.setState({ playlist: body })
        })
    }
  render() {

    return(
      <h1>

       </h1>
    )
  }


}

export default PlaylistShowContainer
