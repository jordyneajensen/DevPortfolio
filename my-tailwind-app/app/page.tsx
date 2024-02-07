import React from 'react';
import About from './about';
import Contact from './contact'
import Skills from './skills';
import Navbar from './components/navbar'
import Footer from './footer'
import Projects from './projects'
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