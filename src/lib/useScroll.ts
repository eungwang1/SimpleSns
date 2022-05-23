import { useState, useCallback } from 'react';

const useScroll = (page: string) => {
  const [scrollY, setScrollY] = useState('');
  const scrollSave = useCallback(() => {
    const scrollPos = window.scrollY + '';
    setScrollY(scrollPos);
    return localStorage.setItem(`${page}_scroll_pos`, scrollPos);
  }, []);

  const scrollRemove = useCallback(() => {
    setScrollY('0');
    localStorage.removeItem(`${page}_scroll_pos`);
  }, []);

  const scrollMove = useCallback(() => {
    const scrollPos = localStorage.getItem(`${page}_scroll_pos`);
    localStorage.removeItem(`${page}_scroll_pos`);
    window.scrollTo(0, Number(scrollPos));
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return { scrollSave, scrollRemove, scrollMove, scrollToTop };
};

export default useScroll;
