import React from 'react'

export default function NewComment({currentUser}) {
  return (
    <div className="new-comment">
      <textarea placeholder="Add a comment...">
      </textarea>
      <div className="new-comment-footer">
        <img className="comment-user-image" src={currentUser.image.png} />
        <button className="new-comment-send">send</button>
      </div>
    </div>
  )
}
