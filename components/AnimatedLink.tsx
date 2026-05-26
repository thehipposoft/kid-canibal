'use client'
import React, { ReactNode } from "react";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

type AnimatedLinkProps = {
  href: string;
  className?: string;
  children?: ReactNode;
  ref?: React.ForwardedRef<HTMLAnchorElement>;
  linkKey?: string | number;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const pageAnimation = () => {
  // 1. Outgoing page: Slide up and fade
  document.documentElement.animate(
    [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(-50px)" },
    ],
    {
      duration: 800,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  // 2. Incoming page: Slide up from bottom
  document.documentElement.animate(
    [
      { transform: "translateY(100vh)" },
      { transform: "translateY(0)" },
    ],
    {
      duration: 800,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

const AnimatedLink = ({ href, className, children, linkKey, onMouseEnter, onMouseLeave }: AnimatedLinkProps) => {
  const router = useTransitionRouter();

  return (
    <Link
      key={linkKey}
      href={href}
      className={className}
      onClick={(e) => {
        if (!e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          router.push(href, {
            onTransitionReady: pageAnimation,
          });
        }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Link>
  );
};

export default AnimatedLink;