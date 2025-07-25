import React from "react";

class Post extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Post;
