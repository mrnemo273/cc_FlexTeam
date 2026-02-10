import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AnimatedCard({ children, className = '', style = {} }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll${isVisible ? ' visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
