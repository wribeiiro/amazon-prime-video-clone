import styled from "styled-components";

export const Slider = styled.header`
	.slider {
        display: block;
        height: 293px;
        width: 100vw;
        margin: auto;
        position: relative;
    }

    .slider li.slider-item {
        list-style: none;
        position: absolute;
    }

    .slider li.slider-item img {
        height: 100%;
        width: 100%;
        vertical-align: top;
    }

    .arrow {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 45%;
        margin-top: auto;
        transition: 0.5s ease;
        filter: drop-shadow(0 0 5px #000);
        cursor: pointer;
    }

    .arrow-next {
        border-bottom: 6px solid;
        border-left: 6px solid;
        transform: rotate(-135deg);
        right: 18px;
    }

    .arrow-prev {
        border-bottom: 6px solid;
        border-left: 6px solid;
        transform: rotate(45deg);
        left: 18px;
    }
    
    .controls-round {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background: transparent;
        width: 100vw;
        height: 293px;
    }

    .controls-round-item {
        cursor: pointer;
        background: rgba(242,244,246,.7);
        height: 14px;
        width: 14px;
        border-radius: 50%;
        margin: 3px;
        display: block;
        position: absolute;
        z-index: 10;
        bottom: 30px;
    }
`;