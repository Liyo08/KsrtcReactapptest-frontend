import logo from './logo.svg';
import './App.css';
import AddBus from './components/AddBus';
import DeleteBus from './components/DeleteBus';
import SearchBus from './components/SearchBus';
import BusNavBar from './components/BusNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewBus from './components/ViewBus';

function App() {
  return (
   
   <BrowserRouter>
   <Routes>
<Route path='/' element={<AddBus/>}/>
<Route path='/search' element={<SearchBus/>}/>
<Route path='/delete' element={<DeleteBus/>}/>
<Route path='/view' element={<ViewBus/>}/>


   </Routes>
   
   
   
   </BrowserRouter>
  );
}

export default App;
