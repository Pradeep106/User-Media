import { useEffect, useState } from "react";
import { getAllUsers } from "../Services/Operations/UserAPI";
import Card from "./Card";
import SideBar from "./SideBar";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import { data } from "autoprefixer";

const DisplayUser = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page");
  

  const fetchData = async () => {
    try {
      const result = await getAllUsers(page);

      setTotal(result.data.data.userData.length);

      setUserData((prevUserData) => {
        setCount((prevCount) => prevCount + 1);
        return result.data.data.data;
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

  return (
    <div>
      <div className="flex gap-10  w-[100%]">
        <SideBar />
        <div className="flex flex-wrap border justify-center w-[100%] gap-2">
          {loading ? (
            <p>Loading ..</p>
          ) : (
            userData.map((data) => {
              return <Card key={data._id} data={data} />;
            })
          )}
        </div>
      </div>
      <div className="flex justify-center mt-10 pb-10">
        <p>{total}</p>
        <Pagination totalPage={total} />
      </div>
    </div>
  );
};

export default DisplayUser;
