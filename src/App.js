import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import ShowDetails from './components/ShowDetails/ShowDetails';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';


function App() {
  const showDetails = useSelector(state => state.showDetails);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="details" element={<ShowDetails showDetails={showDetails} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
