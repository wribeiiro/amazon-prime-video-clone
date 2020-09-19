import styled from "styled-components";

import SearchIcon from "../../assets/search.svg";

export const Container = styled.header`
	width: 100%;
	height: 72px;
	background-color: #1A232E;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.brand-logo {
		max-height: 72px;
		width: 20%;
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-right: 5%;
	}

  	.nav-wrapper {
    	display: flex;
    	align-items: center;
    	justify-content: flex-start;
    	margin-left: 5%;
  	}
`;

export const Menu = styled.nav`
	margin-left: 3%;
	
	a {
		border: none;
		background: transparent;
		height: 1.5em;
		margin: 0 9px;
		color: rgba(242,244,246,.7);
		font-size: 1em;
		line-height: 1em;
		text-decoration: none;
		font-weight: 600;
	}

	.active-link {
		font-weight: 700;
		color: #fff;
		border-bottom: solid 1px #fff;
	}
`;

export const Search = styled.div`
	margin-right: 15px;
	display: flex;
	align-items: center;
	width: 250px;
	height: 40px;
	background: url(${SearchIcon}) no-repeat 7px center;
	background-size: 20px 20px;
	border: solid 1px rgba(197, 200, 202, 0.5);
	border-radius: 4px;

	input {
		margin-left: 40px;
		background: transparent;
		border: none;

		&::placeholder {
			font-size: 16px;
			color: rgba(242,244,246,.7);
		}

		&:hover {
			cursor: pointer;
		}

		&:focus {
			color: rgba(242,244,246,.7);
		}
	}
`;

export const User = styled.div`
    .user-logo {
		width: 32px;
		margin-right: 8px;
		vertical-align: middle;
	}
	
	.arrow-icon {
		color: rgba(242,244,246,.7);
		font-size: 1em;
	}

	span {
		color: rgba(242,244,246,.7);
		max-width: 120px;
		line-height: 22px;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 15px;
		vertical-align: middle;
		margin-right: 8px;
	}
`;