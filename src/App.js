// React packages import
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components import
import Header from './views/components/Header';
import Posts from './views/components/Posts';
import PostForm from './views/components/PostForm';
import Footer from './views/components/Footer';

// Pages import
import Home from './views/pages/Home';
import News from './views/pages/news/News';
import Gallery from './views/pages/galleries/Gallery';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
          <Routes>
            <Route path='/news/:id' element={<News />} />
            <Route path='/galleries/:id' element={<Gallery />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
          {/* <Home />
          <PostForm /> */}
          {/* <Posts /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
