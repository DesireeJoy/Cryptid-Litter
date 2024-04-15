
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Meet from '../Meet/Meet';
import Involve from '../Involve/Involve';
import Media from  '../Media/Media';
import Book from '../Book/Book';
import '../../styles/App.css';

function App() {

  return (
    <Router>
    <div className="App">
      <Header />
      <Nav />
   
        <Routes>
        <Route path="/meet" element={<Meet />} />
          <Route path="/book" element={<Book />} />
          <Route path="/media" element={<Media />} />
          <Route path="/involve" element={<Involve />} />
          <Route path="*" element={<Navigate to="/book" replace />} />
      
      </Routes>
   
    </div>
    </Router>);
}

export default App;
