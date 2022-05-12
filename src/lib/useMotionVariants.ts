type direction = 'left' | 'right' | 'bottom' | 'top';

export const useMotionVariants = (direction?: direction) => {
  let transform;
  let directionConfirm;
  if (direction === 'left') {
    transform = 'translateX(50px)';
  }
  if (direction === 'right') {
    transform = 'translateX(-50px)';
  }
  if (direction === 'bottom') {
    transform = 'translateY(-50px)';
  }
  if (direction === 'top') {
    transform = 'translateY(50px)';
  }
  if (direction === 'left' || direction === 'right') {
    directionConfirm = 'row';
  }
  if (direction === 'bottom' || direction === 'top') {
    directionConfirm = 'column';
  }
  const pageVariants = {
    initial: {
      transform,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      transform: directionConfirm === 'row' ? 'translateX(0px)' : 'translateY(0px)',
      opacity: 1,
      transition: { duration: 0.3 },
    },
    leaving: {
      transform,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  return { pageVariants };
};
