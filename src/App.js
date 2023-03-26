import User from './components/User';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Todos from './components/Todos';
import Albums from './components/Albums';
import CommentDetails from './components/CommentDetails';
import PostDetails from './components/PostDetails';
import TodoDetails from './components/TodoDetails';
import CompletedTodo from './components/CompletedTodo';
import PendingTodos from './components/PendingTodos';

function App() {
  return (
    <Router>
      <div className="App">
      
      <Switch>

        <Route exact path="/" >
          <User/>
        </Route>

        <Route exact path="/posts:id:name">
          <Posts/>
        </Route>

        <Route exact path="/comments:id:name">
          <Comments/>
        </Route>

        <Route exact path="/todos:id:name">
          <Todos/>
        </Route>

        <Route exact path="/albums:id:name">
          <Albums/>
        </Route>

        <Route exact path='/commentDetails:id'>
          <CommentDetails/>
        </Route>

        <Route exact path='/postDetails:id'> 
          <PostDetails/>
        </Route>

        <Route exact path='/todoDetails:id'>
          <TodoDetails/>
        </Route>

        <Route exact path='/completedTodos:id:name'>
          <CompletedTodo/>
        </Route>

        <Route exact path='/pendingTodos:id:name'>
          <PendingTodos/>T
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
