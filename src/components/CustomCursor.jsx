import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dotX = gsap.quickTo(dotRef.current, "x", {
      duration: 0,
    });

    const dotY = gsap.quickTo(dotRef.current, "y", {
      duration: 0,
    });

    const ringX = gsap.quickTo(ringRef.current, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    const ringY = gsap.quickTo(ringRef.current, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const move = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);

      ringX(e.clientX);
      ringY(e.clientY);
    };

    window.addEventListener("mousemove", move);

    //----------------------------------
    // Hover Effect
    //----------------------------------

    const hoverItems = document.querySelectorAll(
      "a,button,.cursor-hover"
    );

    hoverItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(ringRef.current, {
          scale: 2,
          background: "rgba(201,162,39,.12)",
          borderColor: "#C9A227",
          duration: .25,
        });

        gsap.to(dotRef.current, {
          scale: 0,
          duration: .2,
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(ringRef.current, {
          scale: 1,
          background: "transparent",
          duration: .25,
        });

        gsap.to(dotRef.current, {
          scale: 1,
          duration: .2,
        });
      });
    });

    //----------------------------------
    // Click Effect
    //----------------------------------

    window.addEventListener("mousedown", () => {
      gsap.to(ringRef.current, {
        scale: .8,
        duration: .12,
      });
    });

    window.addEventListener("mouseup", () => {
      gsap.to(ringRef.current, {
        scale: 1,
        duration: .18,
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-[#C9A227] rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
      />

      <div
        ref={ringRef}
        className="custom-cursor fixed top-0 left-0 w-10 h-10 border border-[#C9A227] rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </>
  );
}