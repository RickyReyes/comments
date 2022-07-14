import React, { useState } from 'react'

export default function Comment({currentUser, user, score, content, createdAt, isReply, replyingTo }) {
  const [vote, setVote] = useState(null)
  const [currentScore, setCurrentScore] = useState(score)

  function handleVote(upOrDown) {
    if (upOrDown == "up" && !vote) {
      setCurrentScore(prevScore => prevScore + 1)
      setVote("up")
    }
    if (upOrDown == "down" && !vote) {
      setCurrentScore(prevScore => prevScore - 1)
      setVote("down")
    }
    if (upOrDown == "down" && vote == "up") {
      setCurrentScore(prevScore => prevScore - 2)
      setVote("down")
    }
    if (upOrDown == "up" && vote == "down") {
      setCurrentScore(prevScore => prevScore + 2)
      setVote("up")
    }
    if (upOrDown == vote) {
      setCurrentScore(prevScore => {
        return vote == "up" ? prevScore - 1 : prevScore + 1
      })
      setVote(null)
    }
  }

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
          <img 
            style={{filter: vote == "up" ? "invert(17%) sepia(86%) saturate(621%) hue-rotate(95deg) brightness(52%) contrast(101%)" : "none"}}
            src="./images/icon-plus.svg" 
            onClick={() => handleVote("up")} />
          <p className="comment-score">{currentScore}</p>
          <img 
            style={{filter: vote == "down" ? "invert(7%) sepia(90%) saturate(7500%) hue-rotate(2deg) brightness(97%) contrast(106%)" : "none"}} 
            src="./images/icon-minus.svg" 
            onClick={() => handleVote("down")} />
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
