import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import EditorPage from './pages/editorpage/EditorPage';
import {Toaster} from 'react-hot-toast';

function App() {
    return (
    <div className="App">
        <Toaster
            position='top-center'
        >
        </Toaster>
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/editor/:roomId' element={<EditorPage />} />
          </Routes>
        </Router>
    </div>
    );
}

export default App;
