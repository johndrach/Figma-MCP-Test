import React, { useState } from "react";
import { Button } from "./components/ui/button";

// Figma variable values
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
const ICON_COLORS = {
  active: "#ffffff",
  hover: "#ffffff",
  pressed: "#ffffff",
  disabled: "#aeaaae",
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

function Button({
  size = "large",
  state = "active",
  icon = false,
  children,
}) {
  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: SIZES[size].height,
    minWidth: 80,
    padding: SIZES[size].padding,
    border: "none",
    borderRadius: BORDER_RADIUS,
    background: COLORS[state],
    color: TEXT_COLORS[state],
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 500,
    fontSize: SIZES[size].fontSize,
    opacity: state === "disabled" ? 0.5 : 1,
    cursor: state === "disabled" ? "not-allowed" : "pointer",
    gap: 8,
    transition: "background 0.2s, color 0.2s",
  };
  return (
    <button style={style} disabled={state === "disabled"}>
      {icon && (
        <img
          src={state === "disabled" ? ICONS.heartDisabled : ICONS.heart}
          alt="icon"
          style={{
            width: SIZES[size].icon,
            height: SIZES[size].icon,
            marginRight: 8,
            filter: state === "disabled" ? "grayscale(1)" : undefined,
          }}
        />
      )}
      {children}
    </button>
  );
}

export default function ButtonPlayground() {
  const [size, setSize] = useState("large");
  const [state, setState] = useState("active");
  const [icon, setIcon] = useState(true);
  const [label, setLabel] = useState("Test Button");

  return (
    <div style={{ fontFamily: 'Open Sans, sans-serif', padding: 32 }}>
      <h2>Button Playground</h2>
      <div style={{ marginBottom: 16 }}>
        <label>
          Size:
          <select value={size} onChange={e => setSize(e.target.value)}>
            <option value="large">Large (48px)</option>
            <option value="medium">Medium (32px)</option>
            <option value="small">Small (24px)</option>
          </select>
        </label>
        <label style={{ marginLeft: 16 }}>
          State:
          <select value={state} onChange={e => setState(e.target.value)}>
            <option value="active">Active</option>
            <option value="hover">Hover</option>
            <option value="pressed">Pressed</option>
            <option value="disabled">Disabled</option>
          </select>
        </label>
        <label style={{ marginLeft: 16 }}>
          <input
            type="checkbox"
            checked={icon}
            onChange={e => setIcon(e.target.checked)}
          />
          Show Icon
        </label>
        <label style={{ marginLeft: 16 }}>
          Label:
          <input
            type="text"
            value={label}
            onChange={e => setLabel(e.target.value)}
            style={{ marginLeft: 4 }}
          />
        </label>
      </div>
      <Button size={size} state={state} icon={icon}>
        {label}
      </Button>
      <hr style={{ margin: "32px 0" }} />
      <h3>All Variants</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {Object.keys(SIZES).map(sz =>
          ["active", "hover", "pressed", "disabled"].map(st => (
            <Button key={sz + st + "icon"} size={sz} state={st} icon={true}>
              {sz.charAt(0).toUpperCase() + sz.slice(1)} {st}
            </Button>
          ))
        )}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 16 }}>
        {Object.keys(SIZES).map(sz =>
          ["active", "hover", "pressed", "disabled"].map(st => (
            <Button key={sz + st + "noicon"} size={sz} state={st} icon={false}>
              {sz.charAt(0).toUpperCase() + sz.slice(1)} {st}
            </Button>
          ))
        )}
      </div>
    </div>
  );
} 