import React from 'react';
import Header from "./Header";
import Hero from "./Hero";
import WeeklySpecials from './WeeklySpecials';
import Testimonials from './Testimonials';
import AboutLittleLemon from './AboutLittleLemon';
import Footer from './Footer';


const Home = () =>{
    return(
        <>
        <Header />
        <Hero />
        <WeeklySpecials />
        <Testimonials />
        <AboutLittleLemon />
        <Footer />
        </>
    );
}

export default Home;