import "./App.css";
import { useState, useEffect } from "react";
import Lists from "./Components/List/List";
import Loader from "./Components/Loader/Loader";
import Details from "./Components/Details/Details";

const url = (anchor) => process.env.REACT_APP_URL + anchor;
console.log(url("users.json"));

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [info, setInfo] = useState();
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading({ users: true, info: false });
    fetch(url("users.json"))
      .then((response) => response.json())
      .then((result) => {
        setLoading({ users: false, info: false });
        setUsers(result);
      })
      .catch(error => setError(error.message))
  }, []);

  useEffect(() => {
    if (selectedUser) {
      setLoading({ users: false, info: true });
      fetch(url(`${selectedUser}.json`))
        .then((response) => response.json())
        .then((result) => {
          setLoading({ users: false, info: false });
          setInfo(result);
        })
        .catch(error => setError(error.message))
    }
  }, [selectedUser]);

  function setUser(id) {
    setSelectedUser(id);
  }

  return (
    <div className="App">
      {loading.users ? (
        <Loader />
      ) : (
        <div className="users-list-wrapper">
          <Lists users={users} setUser={setUser} />
        </div>
      )}
      {loading.info ? (
        <Loader />
      ) : (
        <div className="info-wrapper">
          <Details info={info} />
        </div>
      )}
    </div>
  );
}

export default App;
