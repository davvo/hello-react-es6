'use strict';

import React from 'react';
import {CommentBox} from './comment-box';

React.render(
	<CommentBox url="comments.json" pollInterval={2000}/>,
	document.getElementById('content')
);