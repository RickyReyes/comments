import './App.css';
import { useState } from "react"
import Comment from './components/Comment';
import NewComment from './components/NewComment';
import data from "./data.json"

function App() {
  // const [comments, setComments] = useState(data)
  return (
    <div className="App">
      <ul className="comments-container">
        {data.comments.map(comment => (
          <>
            <Comment currentUser={data.currentUser} { ...comment } />
            {comment.replies && 
              <ul className="replies-container">
                {comment.replies.map(reply => (
                  <Comment currentUser={data.currentUser} isReply={true} {...reply} />
                ))}
              </ul>}
          </>
        ))}
        <NewComment currentUser={data.currentUser} />
      </ul>
    </div>
      
  )
}

export default App;
