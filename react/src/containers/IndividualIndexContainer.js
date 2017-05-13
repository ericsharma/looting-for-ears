import React from 'react';


class IndividualIndexContainer extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        playlists: []

      }
    }
    componentDidMount() {
      fetch('/api/v1/users', {
        credentials: 'same-origin',
        method: 'GET'
      })
        .then(response => response.json())
        .then(body => {

          this.setState({ playlists: body.individuals })
          console.log(this.state.playlists)

        })
    }

    render() {

      let all_individuals = this.state.playlists.map (individual => {
        return (
          <div className="individualContainer">
            <center>
              <h3><a href={`individuals/${individual.id}`}>{individual.name}</a></h3>
            </center>

          </div>
        )
      })

      return(
          <div>

            {all_individuals}

          </div>



      )
    }

}

export default IndividualIndexContainer
