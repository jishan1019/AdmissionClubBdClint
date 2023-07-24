import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../SecurityLayout/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Admission = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:4000/myAdmission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire("Apply Succesfull", "Go Back", "success");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {" "}
      <div className="bg-[#F2F2F2] m-8 rounded-md">
        <h1 className="font-semibold text-2xl text-center mt-8 pt-10 mb-2">
          Apply Collage
        </h1>
        <p className="text-center text-orange-800">
          Please give all info for apply collage
        </p>

        <div className="mt-8 mb-8 p-4 min-h-[70vh]">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
              <input
                className="p-3 rounded-md w-full block"
                placeholder="Enter Candidate Name"
                {...register("candidedName", { required: true })}
              />

              <input
                className="p-3 rounded-md w-full block "
                placeholder="Enter Subject Name"
                {...register("subject", { required: true })}
              />

              <input
                defaultValue={user?.email}
                className="p-3 rounded-md w-full block "
                placeholder="Enter Candidate Email"
                {...register("email", { required: true })}
                readOnly
              />

              <input
                className="p-3 rounded-md w-full block "
                placeholder="Enter Phone number"
                {...register("phnNumber", { required: true })}
              />

              <input
                className="p-3 rounded-md w-full block "
                placeholder="Enter Candided Adress"
                {...register("address", { required: true })}
              />

              <input
                type="date"
                className="p-3 rounded-md w-full block "
                placeholder="Enter date of birth"
                {...register("barth", { required: true })}
              />

              <input
                className="p-3 rounded-md w-full block "
                placeholder="Enter Candidied Image Url"
                {...register("image", { required: true })}
              />

              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <input
              className="w-full text-center p-3 mt-8 bg-orange-600 text-white font-semibold"
              type="submit"
              value="Apply Now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admission;
