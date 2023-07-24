import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../SecurityLayout/AuthProvider/AuthProvider";

const MyCollage = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/myCollage/${user?.email}`)
      .then((res) => res.json())
      .then((info) => {
        setData(info);
      });
  }, [user]);

  return (
    <>
      <div className="overflow-x-auto mt-16 mb-12">
        <table className="table">
          {/* head */}
          <thead className="bg-[#F2F2F2]">
            <tr>
              <th>Number</th>
              <th>Image</th>
              <th>Name</th>
              <th>Subject Name</th>
              <th>Phone Number</th>
              <th>Details</th>
            </tr>
          </thead>

          {data?.map((myCollage, index) => (
            <tbody key={index}>
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={myCollage?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{myCollage?.candidedName}</td>
                <td>{myCollage.subject}</td>
                <td>{myCollage.phnNumber}</td>
                <th>
                  <button className="btn btn-sm bg-orange-400 text-white">
                    Details
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default MyCollage;
