import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './componants/Navbar';
import HeroSection from './componants/HeroSection';
import Project from './componants/Project';
import About from './componants/About';
import Contact from './componants/Contact';
import Footer from './componants/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  // Netflix-style initial loading animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Netflix loading animation
  if (loading) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-netflix-red font-bold text-5xl md:text-7xl font-netflix"
        >
          YASHIFY
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-1 bg-netflix-red mt-2"
          />
        </motion.div>
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PageWrapper>
          <Navbar />
          <HeroSection />
          <Footer />
        </PageWrapper>
      ),
    },
    {
      path: '/Project',
      element: (
        <PageWrapper>
          <Navbar />
          <Project />
          <Footer />
        </PageWrapper>
      ),
    },
    {
      path: '/About',
      element: (
        <PageWrapper>
          <Navbar />
          <About />
          <Footer />
        </PageWrapper>
      ),
    },
    {
      path: '/contact',
      element: (
        <PageWrapper>
          <Navbar />
          <Contact />
          <Footer />
        </PageWrapper>
      ),
    },
  ]);

  // Wrapper component for page transitions
  function PageWrapper({ children }) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="bg-netflix-black min-h-screen"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
