import React from 'react';
import {Comment} from './comment';

export class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map(function (comment, index) {
      return (
        <Comment key={index} author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}