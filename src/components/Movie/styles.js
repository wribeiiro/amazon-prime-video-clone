import styled from "styled-components";

export const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-left: 60px;
    cursor: pointer;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    vertical-align: middle;
    padding: 10px 45px 10px 45px;
`;

export const Card = styled.div`
    width: auto;
    height: 250px;
    margin: 5px;
    position: relative;
    border-radius: 4px;
    transition: all 300ms;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        z-index: 999;

        .description {
            width: 100%;
            height: 250px;
            left: 0;
            top: 0;
            position: absolute;
            padding: 10px;
            z-index: 99999;
            background:linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
            display: flex !important;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            flex-direction: column;
            font-size: 13px;
            text-align: justify;
            border-radius: 4px;

            h4 {
                font-size: 16px;
            }

            .overview {
                font-size: 13px;
                max-height: 75px;
                margin-top: 40px;
                margin-bottom: 40px;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 4px;
    }

    
`;