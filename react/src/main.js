import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer'
import YoutubeShowContainer from './containers/YoutubeShowContainer'
import PlaylistIndexContainer from './containers/PlaylistIndexContainer'
import ProfileShowContainer from './containers/ProfileShowContainer'


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
