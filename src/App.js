import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { Depositar } from './Pages/Depositar';
import { Sacar } from './Pages/Sacar';
import { Home } from './Pages/Home';
import { Saldo } from './Pages/Saldo';
import { Blockchain } from './Pages/Blockchain';
function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='Depositar' element={<Depositar />} />
          <Route exact path='Sacar' element={<Sacar />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='Saldo' element={<Saldo />} />
          <Route exact path='Blockchain' element={<Blockchain />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
