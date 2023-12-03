import React, { useEffect, useState } from "react";
import { getAllUsers } from "../Services/Operations/UserAPI";

const SearchUser = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const fetchData = async () => {
    try {
      const result = await getAllUsers(1);

      setUserData((prevUserData) => {
        setCount((prevCount) => prevCount + 1);
        return result.data.data.userData;
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(()=>{
    const filteData = userData.filter((item)=>item.first_name)
  })

  const onChangeHandler = (e) => {
    setQuery((prev)=>e.target.value);
  };

  return (
    <div>
      <input
        className="border-2 border-red-500"
        type="text"
        placeholder="Search"
        onChange={onChangeHandler}
      />

      {query.length > 1
        ? filteredResults.map((item) => (
            <h1 key={item.id}>{item.first_name}</h1>
          ))
        : userData.map((value) => <h1 key={value.id}>{value.first_name}</h1>)}
    </div>
  );
};

export default SearchUser;
