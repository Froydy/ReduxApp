import './App.css';
import Likes from './Likes';
import Tittle from './Tittle';
import Comments from './Comments';
import Spin from './spin';
import {useSelector} from 'react-redux';


function App() {
  const error = useSelector(state => {
    const {appReducer} = state;
    return appReducer.error;
    
})
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && 
            <div className='error-message'>
              {error}
            </div>
           }
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Tittle/>
            <Likes/>
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
