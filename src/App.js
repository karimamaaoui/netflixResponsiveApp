import './App.css';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import { Header } from './components/headers/Header';
import Footer from './components/footer/Footer';
import SinglePage from "./components/watch/SinglePage"
import HomePage from "./home/homePage"

function App() {
  return (
    <>
    <Header/>
       <Router>

      <Routes>
        
      <Route path="/netflixResponsiveApp/" element={<HomePage />} />
      <Route path='/netflixResponsiveApp/singlepage/:id' element={<SinglePage />}  />

      </Routes>
    </Router>
  <Footer/>
    </>
    );
}

export default App;
