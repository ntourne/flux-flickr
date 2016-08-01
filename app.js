/*
 * Module dependencies
 */

import React from 'react';
import ImageActions from './actions/ImageActions';
import ImageGrid from './components/ImageGrid';

// fetch flickr images every 5 seconds
setInterval(function() {
    ImageActions.fetchList();
}, 5000);

React.render(
    <ImageGrid />,
    document.getElementById('app-container')
)
