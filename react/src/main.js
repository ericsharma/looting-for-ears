import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer'
import PlaylistShowContainer from './containers/PlaylistShowContainer'
import PlaylistIndexContainer from './containers/PlaylistIndexContainer'


$(function() {
  if (document.getElementById('looting')) {
    ReactDOM.render(
      <YoutubeShowContainer/>,
      document.getElementById('looting')
        );
      }
    });


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
