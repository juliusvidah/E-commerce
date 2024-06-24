import { lazy } from "react";
import Error from "../error/Error";


const Home = lazy(()=> import('../home/Home'));
const About = lazy(()=> import('../about/About'));
const Shop = lazy(()=> import('../shop/Shop'));
const Contact = lazy(()=> import('../contact/Contact'));
const Blog = lazy(()=> import('../blog/Blog'));


export const routeData = [
    {
        id: 1,
        to: '/',
        text: 'Home',
        element: <Home />
    },
    {
        id: 2,
        to: '/about',
        text: 'About',
        element: <About />
    },
    {
        id: 3,
        to: '/shop',
        text: 'Shop',
        element: <Shop />
    },
    {
        id: 4,
        to: '/contact',
        text: 'Contact',
        element: <Contact />
    },
    {
        id: 5,
        to: '/blog',
        text: 'Blog',
        element: <Blog />
    },
    {
        id: 6,
        to: '/error',
        text: '',
        element: <Error />
    },
]