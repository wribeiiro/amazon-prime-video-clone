import styled from "styled-components";

export const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-left: 47px;
    cursor: pointer;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    vertical-align: middle;
    padding: 10px 45px 10px 45px;
`;

export const Card = styled.div`
	flex: 1;
    width: auto;
    height: 150px;
    margin: 5px;
    position: relative;
    border-radius: 4px;
    transition: all 300ms;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        z-index: 999;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }
`;