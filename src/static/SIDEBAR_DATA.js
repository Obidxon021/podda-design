
import About from '../routes/about/About'
import Chart from '../routes/chart/Chart'
import Gaming from '../routes/gaming/Gaming'
import Home from '../routes/home/Home'
import PetHouse from '../routes/petHouse/PetHouse'
import PetStorage from '../routes/petStorage/PetStorage'
import Profiles from '../routes/profiles/Profiles'
import Roulette from '../routes/roulette/Roulette'

import { GoHomeFill } from "react-icons/go";
import { IoGameControllerSharp } from "react-icons/io5";
import { LuRabbit } from "react-icons/lu";
import { FaChartColumn } from "react-icons/fa6";
import { MdInsertChart } from "react-icons/md";
import { FaDiceD20 } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { PiBoneFill } from "react-icons/pi";

export const SIDEBAR_DATA = [
    {
        id: 0,
        title: 'Home',
        icon: <GoHomeFill/>,
        route: '/',
        component: <Home/>,
    },
    {
        id: 1,
        title: 'Gaming',
        icon: <IoGameControllerSharp/>,
        route: '/gaming',
        component: <Gaming/>,
    },
    {
        id: 2,
        title: 'Profiles',
        icon: <LuRabbit/>,
        route: '/profiles',
        component: <Profiles/>,
    },
    {
        id: 3,
        title: 'LeaderBoard',
        icon: <FaChartColumn/>,
        route: '/leaderboard',
        component: <Chart/>,
    },
    {
        id: 4,
        title: 'Pet Storage',
        icon: <MdInsertChart/>,
        route: '/pet-storage',
        component: <PetStorage/>,
    },
    {
        id: 5,
        title: 'Gamer Roulette',
        icon: <FaDiceD20/>,
        route: '/gamer-roulette',
        component: <Roulette/>,
    },
    {
        id: 6,
        title: 'About',
        icon: <FaUser/>,
        route: '/about',
        component: <About/>,
    },
    {
        id: 7,
        title: 'Pet House',
        icon: <PiBoneFill />,
        route: '/pet-house',
        component: <PetHouse/>,
    },
]