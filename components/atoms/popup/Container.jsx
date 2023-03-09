import React, { useState } from "react";
import { Popover } from "@headlessui/react";

import { usePopper } from "react-popper";

const PopupContainer = ({
  children,
  items,
  placement = "bottom",
  className = "",
}) => {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 5],
        },
      },
    ],
  });

  return (
    <Popover>
      <Popover.Button
        ref={setReferenceElement}
        as="div"
        className="flex items-center"
      >
        {children}
      </Popover.Button>

      <Popover.Panel
        as="div"
        className={`popup-container animate-fade ${className}`}
        ref={setPopperElement}
        style={styles.popper}
        onClick={(e) => {
          e.stopPropagation();
        }}
        {...attributes.popper}
      >
        {items}
      </Popover.Panel>
    </Popover>
  );
};

export default PopupContainer;
