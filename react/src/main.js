import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer'
import YoutubeShowContainer from './containers/YoutubeShowContainer'
import PlaylistIndexContainer from './containers/PlaylistIndexContainer'
import ProfileShowContainer from './containers/ProfileShowContainer'
import IndividualIndexContainer from './containers/IndividualIndexContainer'
import IndividualShow from './components/IndividualShow'


$(function() {
  if (document.getElementById('looting')) {
    ReactDOM.render(
      <YoutubeShowContainer/>,
      document.getElementById('looting')
        );
      }
    });
//
//
$(function() {
  if (document.getElementById('home')){
    ReactDOM.render(
      <HomeContainer/>,
      document.getElementById('home')
      );
    }
  });

$(function() {
  if (document.getElementById('playlist')){
    ReactDOM.render(
      <PlaylistIndexContainer/>,
      document.getElementById('playlist')
      );
    }
  });
$(function() {
  if (document.getElementById('profile')){
    ReactDOM.render(
      <ProfileShowContainer/>,
      document.getElementById('profile')
      );
    }
  });
$(function() {
  if (document.getElementById('individuals')){
    ReactDOM.render(
      <IndividualIndexContainer/>,
      document.getElementById('individuals')
      );
    }
  });
$(function() {
  if (document.getElementById('individual')){
    ReactDOM.render(
      <IndividualShow/>,
      document.getElementById('individual')
      );
    }
  });
