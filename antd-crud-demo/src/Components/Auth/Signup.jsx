import React from "react";

import {
	Link,
	json,
	useNavigate,
} from "react-router-dom";

import axios from "axios";
import { useForm } from "react-hook-form";

const Signup = () => {
	const { register, handleSubmit } = useForm();
	const header = {
		"Allow-Control-Allow-Origin": "*",
	};
	const directPage = useNavigate();

	const onSubmit = (data) => {
		axios
			.post(
				"https://6481788729fa1c5c50316f7a.mockapi.io/jwt-token",
				data,
				header
			)
			.then(directPage("/"));
		console.log(" signup done");
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
			}}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="email">email</label>
				<input {...register("email")} />
				<label htmlFor="email">password</label>
				<input {...register("password")} />
				<label htmlFor="email">
					confirm password
				</label>
				<input {...register("confirmPassword")} />

				<button type="submit">Submit</button>

        <h1>
				Already a user , go to <Link to="/">Login</Link>
			</h1>
			</form>
		</div>
	);
};

export default Signup;
