import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import './App.css'
import Search from './components/Search';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
