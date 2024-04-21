
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Meet from '../Meet/Meet';
import Involve from '../Involve/Involve';
import Media from  '../Media/Media';
import Book from '../Book/Book';
import '../../styles/App.scss';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {

  return (

    <PrimeReactProvider>
       <HashRouter>
    <div className="App">
      <div className='header-container'>
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
    </div>
    </HashRouter> </PrimeReactProvider>);
}

export default App;
