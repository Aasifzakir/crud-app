import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ViewUser from './components/ViewUser';
import Form from './components/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  
  const { error } = useSelector((state) => state.users);
  useEffect(() => { 
    if(error){
      toast.error(error)
    } 
  }, [error])

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/addUser' element={<Form />} />
          <Route exact path='/editUser/:id' element={<Form />} />
          <Route exact path='/viewUser/:id' element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;