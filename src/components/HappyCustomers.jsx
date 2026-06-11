import { useEffect, useRef, useState } from "react";

function HappyCustomers() {
  const [count, setCount] = useState(1);
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  const end = 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 1;

    const timer = setInterval(() => {
      start++;
      setCount(start);

      if (start >= end) {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [startAnimation]);

  return (
    <div ref={sectionRef} className="text-center">
      <div className=" font-bold text-yellow-400">
        {count}K+
      </div>
    </div>
  );
}

export default HappyCustomers;