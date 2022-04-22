import { useEffect } from "react";

export const useHideOnClickOutside = (
  elemRef,
  targetStateVars,
  idleTargetState = true
) => {
  const elem = elemRef.current;
  const [targetState, setTargetState] = targetStateVars;

  const handleClickOutside = (event) => {
    if (!elem.contains(event.target) && targetState === idleTargetState) {
      setTargetState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  });
};
