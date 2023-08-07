import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
	const { register, handleSubmit } = useForm();
  const {isAuthUser, setIsAuthUser} = useState(false);

  
	const onSubmit = (data) => {
    
    //finding user data if exist or not
    axios.get("https://6481788729fa1c5c50316f7a.mockapi.io/jwt-token",).then((res) => {
      res.data.forEach((item) => {
        if(item.email === data.email && item.password === data.password){
          localStorage.setItem("authUser", item.email);
        } else {
          return null;
        }
      })
    })

	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				verticalAlign: "middle",
			}}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="email">email</label>
				<input {...register("email")} />
				<label htmlFor="email">password</label>
				<input {...register("password")} />

				<button type="submit">Submit</button>
			</form>
			<h1>
				Not a user , go to <Link to="/signup">sign up</Link>
			</h1>
		</div>
	);
};

export default Login;
