import React from 'react';

const PostItem = (...props) => {
  console.log(props);
  return (
    <div className="post__container">
      <div className="post-title">
        {props.build.id}. {props.build.title}
      </div>
      <div className="post-description">{props.build.desc}</div>
    </div>
  );
};

export default PostItem;
