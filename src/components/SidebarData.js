import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';



export const  SidebarData = [
    {
        title: 'المشتركين',
        icon: <PeopleIcon /> ,
        link: '/',
    },

    {
        title: 'متابعة المشتركين',
        icon: <HowToRegIcon /> ,
        link: '/FollowUp',
    },

    {
        title: 'الشكاوى',
        icon: <SentimentVeryDissatisfiedIcon /> ,
        link: '/Complaints',
    },
    {
        title: 'الوجبات',
        icon: <RamenDiningIcon /> ,
        link: '/Meals',
    },
    {
        title: 'المكونات',
        icon: <RestaurantIcon /> ,
        link: '/Ingredients',
    },
]