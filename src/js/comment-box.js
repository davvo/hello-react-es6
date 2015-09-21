import React from 'react';

import {CommentList} from './comment-list';
import {CommentForm} from './comment-form';
import {get, post} from './ajax';

export class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  loadCommentsFromServer() {    
    get(this.props.url).then(data => this.setState({data: data}));
  }

  handleCommentSubmit(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    post(this.props.url, comment).then(data => this.setState({data: data}));
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    var fn = this.loadCommentsFromServer.bind(this);
    setInterval(fn, this.props.pollInterval);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
      </div>
    );
  }

}
