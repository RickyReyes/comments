import React, { useState } from 'react'

export default function NewComment({comments, setComments, currentUser}) {
  const [newComment, setNewComment] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      setComments(prevComments => ([
        ...prevComments,
        {
          id: Date.now(),
          content: newComment,
          createdAt: "just now",
          score: 0,
          user: currentUser
        }
      ]))
      setNewComment("")
    }
  }
  return (
    <form className="new-comment" onSubmit={(e) => handleSubmit(e)}>
      <textarea value={newComment} 
                onChange={(e) => setNewComment(e.target.value)} 
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit(e)
                  }
                }}
                placeholder="Add a comment...">
      </textarea>
      <div className="new-comment-footer">
        <img className="comment-user-image" src={currentUser.image.png} />
        <button type="submit" className="new-comment-send">send</button>
      </div>
    </form>
  )
}
