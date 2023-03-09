import React, { useMemo } from "react";
import { Popover } from "@headlessui/react";

const PopupItem = ({
  label = "-",
  className,
  onClick,
  icon,
  iconSize = 16,
  iconClassName = "",
  ...rest
}) => {
  const Icon = useMemo(() => {
    return icon;
  }, [icon]);
  return (
    <Popover.Button
      as="div"
      className={`h-9 px-2.5 flex items-center gap-2 hover:bg-slate-100 cursor-default text-sm ${className}`}
      onClick={onClick}
      {...rest}
    >
      {icon && <Icon size={iconSize} className={iconClassName} />}
      <p className="whitespace-nowrap">{label}</p>
    </Popover.Button>
  );
};

export default PopupItem;
