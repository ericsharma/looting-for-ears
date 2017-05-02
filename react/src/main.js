import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeShowContainer from  './containers/YoutubeShowContainer'

$(function() {
  ReactDOM.render(
    <YoutubeShowContainer/>,
    document.getElementById('app')
  );
});
