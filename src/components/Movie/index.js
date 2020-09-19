import React, { Fragment } from 'react'

import { Container, Card, Title } from "./styles";

const Movie = ( {title} ) =>(
    <Fragment>
        <div className="section-movies">
            <Title>{title}</Title>
            <Container>
                <Card>
                    <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/svod_row_sh_prisonbreak/e25655d0-ec54-4b94-8e1c-9d00598f4908._UR3000,600_SX1500_FMwebp_.jpg" alt="" title=""></img>
                </Card>
                <Card>
                    <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_TheBoys_S2_Homelander/891a1d8f-8e1b-4991-8208-7d018f280bac._UR3000,600_SX1500_FMwebp_.jpg" alt="" title=""></img>
                </Card>
                <Card>
                    <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_SH_FeartheWalkingDead_S5_NoLocaleOnly/a250aa9c-9675-47fe-a895-749f9d8947dd._UR3000,600_SX1500_FMwebp_.jpg" alt="" title=""></img>
                </Card>
                <Card>
                    <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_ChemicalHearts/a6d3ad64-989a-442a-aaba-bef5bfcc0096._UR3000,600_SX1500_FMwebp_.jpg" alt="" title=""></img>
                </Card>
            </Container>
        </div>
    </Fragment>
);

export default Movie;