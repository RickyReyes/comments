import './App.css';
import Comment from './components/Comment';
import NewComment from './components/NewComment';
import data from "./data.json"

function App() {
  return (
    <div className="App">
      <ul className="comments-container">
        {data.comments.map(comment => (
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
        <NewComment currentUser={data.currentUser} />
      </ul>
    </div>
      
  )
}

export default App;
