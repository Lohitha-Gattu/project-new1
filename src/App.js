import logo from './logo.svg';
import './App.css';
//import {CustForm} from "./components/CustForm";
import SideBar from "./components/SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Withdrawals from './pages/WithDrawals';
import Deposits from './pages/Deposits';
import Insurance from './pages/Insurance';
import Loans from './pages/Loans';
import CustomerList from './pages/CustomerList';
import Transaction from './pages/Transaction';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar>
      <Routes>
        <Route path="/transaction" element={<Transaction/>}/>
        <Route path="/customerlist" element={<CustomerList/>}/>
        <Route path="/loans" element={<Loans/>}/>
        <Route path="/insurance" element={<Insurance/>}/>
        <Route path="/deposits" element={<Deposits/>}/>
        <Route path="/withdrawals" element={<Withdrawals/>}/>
      </Routes>
      </SideBar>
      </BrowserRouter>
    </div>
  );
}

export default App;