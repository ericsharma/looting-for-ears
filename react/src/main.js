import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer'
import YoutubeShowContainer from './containers/YoutubeShowContainer'


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
