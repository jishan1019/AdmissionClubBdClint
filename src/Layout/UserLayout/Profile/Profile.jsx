import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../SecurityLayout/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${user?.email}`)
      .then((res) => res.json())
      .then((userData) => {
        console.log(userData);
        setData(userData);
      });
  }, [user]);

  return (
    <>
      <div className="card card-side bg-base-100 border-2 p-3 mt-16 m-6 flex justify-between items-center flex-col md:flex-row rounded-sm">
        <figure>
          <img className="md:ml-16 ml-6 " src={data?.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {data?.name}</h2>
          <p>Email: {user?.email}</p>
          <p>Univresity: {user?.university}</p>
          <p>Adress: {user?.adress}</p>
          <button className="btn bg-orange-400 font-semibold text-white w-24 mt-2">
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
