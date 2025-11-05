
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
import profileImg from '../images/profile.png'
import profileImg2 from '../images/Rectangle 6369.png'
import profileImg3 from '../images/Rectangle 6370.png'
import profileImg4 from '../images/Rectangle 6371.png'
import { TbMedal2 } from "react-icons/tb";
import { TfiMedallAlt } from "react-icons/tfi";
import { PiMedalMilitaryBold } from "react-icons/pi"

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

export const GAMER_LEADERBOARD = [
    {
        img: profileImg,
        name: "Dzika",
        srore: 1430,
        icon: <TbMedal2/>
    },
    {
        img: profileImg2,
        name: "NoobPlayer",
        srore: 1417,
        icon: <TfiMedallAlt/>
    },
    {
        img: profileImg3,
        name: "Mrs Jam",
        srore: 1390,
        icon: <PiMedalMilitaryBold/>
    },
    {
        img: profileImg4,
        name: "KillerX",
        srore: 1372,
        icon: 4
    },
    {
        img: profileImg,
        name: "Dzika",
        srore: 1430,
        icon: 5
    },
    {
        img: profileImg2,
        name: "NoobPlayer",
        srore: 1417,
        icon: 6
    },
    {
        img: profileImg3,
        name: "Mrs Jam",
        srore: 1390,
        icon: 7
    },
    {
        img: profileImg4,
        name: "KillerX",
        srore: 1372,
        icon: 8
    },
    {
        img: profileImg,
        name: "Dzika",
        srore: 1430,
        icon: 9
    },
    {
        img: profileImg2,
        name: "NoobPlayer",
        srore: 1417,
        icon: 10
    },
    {
        img: profileImg3,
        name: "Mrs Jam",
        srore: 1390,
        icon: 11
    },
    {
        img: profileImg4,
        name: "KillerX",
        srore: 1372,
        icon: 12
    },
    {
        img: profileImg,
        name: "Mrs Jam",
        srore: 1113,
        icon: 13
    },
]