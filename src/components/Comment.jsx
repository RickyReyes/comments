import React from 'react'

export default function Comment({currentUser, user, score, content, createdAt, isReply, replyingTo }) {
  console.log(isReply)
  return (
    <li className="comment">
      <div className="comment-header">
        <img 
          className="comment-user-image"
          src={user.image.png} 
          alt="user image" />
        <p className="comment-username">{user.username}</p>
        <p className="comment-created-at">{createdAt}</p>
      </div>
      <p className="comment-content">
        {isReply && <span className="comment-replying-to">@{replyingTo}</span>} {content}</p>
      <div className="comment-footer">
        <div className="comment-votes-container">
          <img src="./images/icon-plus.svg" />
          <p className="comment-score">{score}</p>
          <img src="./images/icon-minus.svg" />
        </div>
        {currentUser.username == user.username ? 
        <div className="comment-action-button-container">
          <button className="comment-action-button delete">
            <img src="./images/icon-delete.svg" />
            Delete
          </button>
          <button className="comment-action-button">
            <img src="./images/icon-edit.svg" />
            Edit
          </button>
        </div> :
        <button className="comment-action-button">
          <img src="./images/icon-reply.svg" />Reply
        </button>
        }
      </div>
    </li>
  )
}
