import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import UserContext from "./context";
import Createaccount from "./Createaccount";
import Deposit from "./Deposit";
import Home from "./Home";
import Withdraw from "./Withdraw";
import Navebar from "./Navbar";
import Alldata from "./Alldata";

//import CustomerCare from "./Customercare";
// import Login from "./Pages/login";
function App() {
  return (
    <HashRouter>
      <Navebar />

      <UserContext.Provider
        value={{
          users: [
            {
              username: "Boopathy",
              email: "boopathy@gmail.com",
              age: 21,
              gender: "Male",
              balance: 0
            }
          ]
        }}
      >
        <div className="container" style={{ padding: "10px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/login" exact element={<Login />} /> */}

            <Route path="/Createaccount" element={<Createaccount />} />

            <Route path="/Deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
             <Route path="/alldata" element={<Alldata />} />
            {/* <Route path="/customercare" element={<CustomerCare />} />  */}
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
