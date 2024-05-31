import React, { useState } from "react";
import "../../../styles/globals.css";

const Dropdown = (props) => {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);

  React.useEffect(() => {
    if (props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 300), // 변경된 duration 값 반영
      );
    }
  }, [props.visibility]);

  return (
    <article
      className={`components-dropdown ${
        props.visibility ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"
      }`}
    >
      {visibilityAnimation && props.children}
    </article>
  );
};

export default Dropdown;
