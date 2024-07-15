import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import TrendingArticle from './components/TrendingArticle';
import DigitalMarketing from './components/DigitalMarketing';
import CyberSecuriy from './components/CyberSecurity';
import DataScience from './components/DataScience';
import FullStack from './components/FullStack';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<TrendingArticle />} />
        <Route path='/fullstack' element={<FullStack />} />
        <Route path='/dataScience' element={<DataScience />} />
        <Route path='/cyberSecurity' element={<CyberSecuriy />} />
        <Route path='/digitalMarketing' element={<DigitalMarketing />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
