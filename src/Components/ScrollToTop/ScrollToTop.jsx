import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls the window to the top when the path changes or component mounts
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    handleScroll(); // Scroll to top immediately on mount

    // Add event listener for route changes
    window.addEventListener('popstate', handleScroll);

    return () => {
      window.removeEventListener('popstate', handleScroll);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;