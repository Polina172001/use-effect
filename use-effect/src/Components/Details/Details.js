import { useState, useEffect } from "react";
const url = (anchor) => process.env.REACT_APP_URL + anchor;
const Details = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([]);
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

  return (
    info ? (<div>
        <img src={info.avatar} alt='avatar' />
        <div>{info.name}</div>
        <div>{info.details.city}</div>
        <div>{info.details.company}</div>
        <div>{info.details.position}</div>
    </div>) : null
  );
};

export default Details;