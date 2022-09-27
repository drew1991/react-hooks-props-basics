import React from "react";

function BlogContent(props) {
  if (!props.articleText) {
    return null
  } else {
    
  
  return <div id="blog-content">{props.articleText}</div>;
  }
}

export default BlogContent;
