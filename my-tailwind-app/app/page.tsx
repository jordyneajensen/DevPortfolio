import React from 'react';
import About from '../pages/about';
import Contact from '../pages/contact'
import Skills from '../pages/skills';
import Navbar from '../pages/navbar'
import Footer from '../pages/footer'
import Projects from '../pages/projects'
import Layout from './layout'
import "./globals.css";
 // Adjust the path accordingly

const Page: React.FC = () => {
  return (
    <div>
      <Layout >
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
     </Layout>
    </div>
  );
};

export default Page;