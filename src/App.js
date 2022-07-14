import { useState } from 'react';
import './App.css';
import Comment from './components/Comment';
import NewComment from './components/NewComment';
import data from "./data.json"

function App() {
  const [comments, setComments] = useState(data.comments.map(comment => ({
    ...comment,
    id: Date.now()
  })))
  const [currentUser, setCurrentUser] = useState(data.currentUser)
  return (
    <div className="App">
      <ul className="comments-container">
        {comments.map((comment) => (
          <>
            <Comment 
              key={comment.id}
              currentUser={data.currentUser} 
              {...comment} />
            {comment.replies && 
              <ul className="replies-container">
                {comment.replies.map(reply => (
                  <Comment 
                    key={reply.id}
                    currentUser={data.currentUser} 
                    isReply={true} 
                    {...reply} />
                ))}
              </ul>}
          </>
        ))}
        <NewComment 
          comments={comments}
          setComments={setComments}
          currentUser={data.currentUser} />
      </ul>
    </div>
      
  )
}

export default App;
