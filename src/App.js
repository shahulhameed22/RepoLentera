import logo from './logo.svg';
import './App.css';
import { Resume } from './component/resume/resume';
import { User } from './component/user/user';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Landing } from './component/Landing page/landing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User/>}/>
          
         
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
