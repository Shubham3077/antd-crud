import React from "react";
import {
	Layout,
	Menu,
	Typography,
	Button,
	Space,
} from "antd";
import { Link } from "react-router-dom";

const Header = () => {
	const { Title } = Typography;
	const { Header } = Layout;
	return (
		<Header
			style={{
				display: "flex",
				justifyContent: "space-between",
			}}
			className="sticky "
		>
			<Title level={2} style={{ color: "white", marginTop: "14px" }}>
				
				React CRUD
			</Title>

			<div>
				<Space size={"large"}>
					<Link to={"/"} type="primary">LOGIN</Link>
					<Link to="/signup" type="primary">SIGNUP</Link>
				</Space>
			</div>
		</Header>
	);
};

export default Header;
