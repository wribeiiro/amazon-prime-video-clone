import React from 'react';

import { Slider } from "./styles";

const Slide = () =>(
    <Slider>
        <ul className="slider">
            <li className="slider-item">
                <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/svod_row_sh_prisonbreak/e25655d0-ec54-4b94-8e1c-9d00598f4908._UR3000,600_SX1500_FMwebp_.jpg" alt="" title="" />
                
                <div className="controls">
                    <div className="arrow arrow-prev"></div>
                    <div className="arrow arrow-next"></div>
                </div>
            </li>

            <div className="controls-round">
                <div className="controls-round-item"></div>
            </div>
        </ul>
    </Slider>
);

export default Slide;