import React from "react"
import PropTypes from "prop-types"
class Post extends React.Component {
  render () {
    return (
      <React.Fragment>
          <h2>Title: {this.props.title}</h2>
          <p>Body: {this.props.body}</p>
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  title: PropTypes.node,
  body: PropTypes.node
};
export default Post
