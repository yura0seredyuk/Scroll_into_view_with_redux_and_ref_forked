import React from "react";
import { connect } from "react-redux";
import { getPost } from "./postActions";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComment: null
    };

    this._nodes = new Map();
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
    const path = window.location.href;
    const commentId = path.slice(path.indexOf("?") + 1);
    if (commentId) {
      this.setState({
        activeComment: commentId
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activeComment !== prevState.activeComment) {
      this.scrollToComment();
    }
  }

  scrollToComment = () => {
    const { activeComment } = this.state;
    const { comments } = this.props.posts.post;
    const nodes = [];

    Array.from(this._nodes.values())
      .filter(node => node != null)
      .forEach(node => {
        nodes.push(node);
      });

    const commentIndex = comments.findIndex(
      comment => comment.id == activeComment
    );

    if (nodes[commentIndex]) {
      nodes[commentIndex].scrollIntoView({
        behavior: "smooth",
        nearest: "block"
      });
    }
  };

  createCommentList = () => {
    const { post } = this.props.posts;
    const { activeComment } = this.state;

    if (post) {
      return post.comments.map((comment, index) => {
        return (
          <div
            key={comment.id}
            className={
              "comment " + (activeComment == comment.id ? "activeComment" : "")
            }
            ref={c => this._nodes.set(comment.id, c)}
          >
            {comment.text}
          </div>
        );
      });
    }
  };

  displayPost = () => {
    const { post } = this.props.posts;

    if (post) {
      return (
        <div className="post">
          <h4>{post.title}</h4>
          <p>{post.text}</p>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Link to="/posts">Back to posts</Link>
        <div>{this.displayPost()}</div>
        <div>{this.createCommentList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: postId => {
      dispatch(getPost(postId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
