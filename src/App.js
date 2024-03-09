import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext/UserContext";
import UserList from "./components/UserList";
import UserDetails from './components/UserDetails'
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserList />} />
          <Route exact path="/user-details/:userId" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
