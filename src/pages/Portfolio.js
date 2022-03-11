import React from 'react';

import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import SideNav from '../components/fixed/SideNav';

import Logo from '../components/Logo';
import FullPage from './PortfolioContent/FullPage';


const Portfolio = ({ mainApp }) => {

    const customInit = (Main) => loadStarsPreset(Main)

    return (

        <>

            <Particles
                options={{
                    particles: {
                        size: {
                            value: 6,
                        },
                        move: {
                            speed:0.2,
                        },
                    },
                    preset: "stars"}}
                init={customInit}
            />

            <Logo/>
            <SideNav anchorList={['home','about','skills','services','works','contact']}/>

            <FullPage mainApp={mainApp} />
        </>        
    );
}

export default Portfolio;