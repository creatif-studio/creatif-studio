import React, { useMemo } from "react";

const Button = ({
  children,
  className,
  disabled,
  mode = "primary",
  buttonSize = "base",
  icon,
  iconSize = 18,
  neutral,
  iconPosition = "left",
  ...rest
}) => {
  const Icon = useMemo(() => {
    return icon;
  }, [icon]);

  const disabledStyle = useMemo(() => {
    if (neutral) return "";
    return "bg-gray-200 text-gray-600";
  }, [neutral]);

  const themedStyle = useMemo(() => {
    if (neutral) return "";
    const style = {
      primary:
        "bg-primary-500 text-white border border-primary-500 hover:bg-primary-600",
      secondary: "bg-white border border-gray-300 hover:bg-gray-200",
      tertiary: "bg-black text-white border border-black hover:bg-slate-800",
    };

    return style[mode];
  }, [mode, neutral]);

  const sizedStyle = useMemo(() => {
    if (neutral) return "";
    const style = {
      base: "px-4 py-2",
      md: "px-5 py-3",
    };

    return style[buttonSize];
  }, [buttonSize, neutral]);

  const baseStyle = useMemo(() => {
    if (neutral) return "";
    return "flex items-center justify-center gap-3 font-medium text-sm outline-none transition-colors ease-in";
  }, [neutral]);

  return (
    <button
      className={`${baseStyle} ${sizedStyle} ${themedStyle} ${
        disabled ? disabledStyle : className
      } `}
      {...rest}
    >
      {icon && iconPosition === "left" && <Icon size={iconSize} />}
      {children}
      {icon && iconPosition === "right" && <Icon size={iconSize} />}
    </button>
  );
};

export default Button;
