
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import {BrowserRouter,Routes,Route} from 'react-router-dom'





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route index element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/signin' element={<SignIn/>}/>


      </Routes>
      
    </BrowserRouter>
    {/* <Home/>
    <SignUp/>
    <SignIn/> */}
    </div>
  );
}

export default App;
