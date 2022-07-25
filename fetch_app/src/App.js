import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, changeData] = useState([]);

  //
  useEffect(() => {
    getData();
  }, []);
  //
  const getData = async function () {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      changeData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {data.map((values, i) => {
        return (
          <div key={i}>
            <ul>
              <li>{values.id}</li>
              <li>{values.email}</li>
              <li>{values.name}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default App;

//https://jsonplaceholder.typicode.com/posts/1/comments
