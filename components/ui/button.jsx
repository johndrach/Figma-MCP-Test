import * as React from "react";

// Figma variables
const COLORS = {
  active: "#7629a2",
  hover: "#5f1c8c",
  pressed: "#430f66",
  disabled: "#e6e1e5",
};
const TEXT_COLORS = {
  active: "#ffffff",
  hover: "#ffffff",
  pressed: "#ffffff",
  disabled: "#787579",
};
const SIZES = {
  large: { height: 48, fontSize: 16, padding: "0 24px", icon: 20 },
  medium: { height: 32, fontSize: 14, padding: "0 20px", icon: 16 },
  small: { height: 24, fontSize: 12, padding: "0 16px", icon: 14 },
};
const BORDER_RADIUS = 100;
const ICONS = {
  heart: "http://localhost:3845/assets/54279a5a5418d68bdb761ce36ddd1a42b2271365.svg",
  heartDisabled: "http://localhost:3845/assets/4eef1e483cadd07fc9ec49dfe3f6943cf6a751f0.svg",
};

const Button = React.forwardRef(
  (
    {
      className = "",
      size = "large",
      state = "active",
      icon = false,
      children,
      ...props
    },
    ref
  ) => {
    const s = SIZES[size] || SIZES.medium;
    const st = state || "active";
    return (
      <button
        ref={ref}
        className={
          `inline-flex items-center justify-center transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ` +
          className
        }
        style={{
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: s.height,
          maxWidth: '100%',
          padding: s.padding,
          border: "none",
          borderRadius: BORDER_RADIUS,
          background: COLORS[st],
          color: TEXT_COLORS[st],
          fontFamily: 'Open Sans, sans-serif',
          fontWeight: 500,
          fontSize: s.fontSize,
          opacity: st === "disabled" ? 0.5 : 1,
          cursor: st === "disabled" ? "not-allowed" : "pointer",
          minWidth: 120,
          gap: 0,
          whiteSpace: 'nowrap',
          transition: "background 0.2s, color 0.2s",
          ...props.style,
        }}
        disabled={st === "disabled"}
        {...props}
      >
        {icon && (
          <img
            src={st === "disabled" ? ICONS.heartDisabled : ICONS.heart}
            alt="icon"
            style={{
              width: s.icon,
              height: s.icon,
              margin: 0,
              marginRight: -2,
              padding: 0,
              border: 'none',
              display: 'inline-block',
              verticalAlign: 'middle',
              filter: st === "disabled" ? "grayscale(1)" : undefined,
            }}
          />
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button }; 