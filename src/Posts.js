import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  createPostList = () => {
    const { posts } = this.props;

    if (posts.posts) {
      return posts.posts.map(post => {
        return (
          <div key={post.id} className="post">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
            <p>{post.text}</p>
            <div>
              {post.comments.map(comment => {
                return (
                  <div>
                    <Link to={`/post/${post.id}/?${[comment.id]}`}>
                      {comment.id}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      });
    } else {
      return <h4>Loading...</h4>;
    }
  };

  render() {
    return <div>{this.createPostList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Posts);
