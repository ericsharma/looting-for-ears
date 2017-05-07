import React from 'react';
import ProfileShow from '../components/ProfileShow'


class ProfileShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      songs: {}
    }
  }

  componentWillMount() {
    fetch('/api/v1/users')
      .then(response => response.json())
      .then(body => {
        this.setState({ songs: body })
      })

    }

  render() {

    return(
      <div>
      <ProfileShow
      body={this.state.songs}
      />

      </div>



    )
  }
}


export default ProfileShowContainer
