import logo from './logo.svg';
import './App.css';
import AddBus from './components/AddBus';
import DeleteBus from './components/DeleteBus';
import SearchBus from './components/SearchBus';
import BusNavBar from './components/BusNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
    <BusNavBar/>
    <AddBus/>
    <SearchBus/>
    <DeleteBus/>
   </div>
  );
}

export default App;
