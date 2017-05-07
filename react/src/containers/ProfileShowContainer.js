import React from 'react';
import ProfileShow from '../components/ProfileShow'


class ProfileShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/users', {
      credentials: 'same-origin',
      method: 'GET'
    })
      .then(response => response.json())
      .then(body => {
        console.log(body)
        this.setState({ songs: body.songs })
      })

    }

  render() {

    return(
      <div>
      <ProfileShow
        
        songs={this.state.songs}
        />

      </div>



    )
  }
}


export default ProfileShowContainer
