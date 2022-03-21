import styled from "@emotion/styled";
import { useState, useRef, useEffect } from "react";
import MaterialButton from "@mui/material/Button";
import React from "react";
import type { ButtonBaseProps } from "@mui/material/ButtonBase";
import CircularProgress from "@mui/material/CircularProgress";

interface Props extends ButtonBaseProps {
  color: "blue" | "orange" | "pink";
  callback?: () => void;
}

interface SecondaryProps extends ButtonBaseProps {
  color: "blue" | "orange" | "pink";
  callback?: () => void;
}

function BaseBttn({ color }: any, Component: any) {
  return styled(Component)`
    background-color: ${color === "blue"
      ? "var(--blue)"
      : color === "orange"
      ? "var(--orange)"
      : "var(--pink)"};
    border-radius: var(--border-radius);
    text-transform: none;
  `;
}

export const SecondaryButton = styled(MaterialButton)`
  border-radius: var(--border-radius);
  text-transform: none;
  background-color: transparent;
`;

export const MainButton = ({ color, children, callback }: Props) => {
  const [state, setState] = useState(children);
  const [loading, setLoading] = useState(false);
  const [fixedWidth, setFixedWidth] = useState();
  const BaseButton = BaseBttn({ color }, MaterialButton);
  const button: any = useRef();

  useEffect(() => {
    setFixedWidth(button.current.clientWidth);
  }, []);

  function clickHandler() {
    setState(null);
    setLoading(!loading);
    callback ? callback() : null;
  }

  return (
    <BaseButton
      onClick={clickHandler}
      disabled={!!loading}
      ref={button}
      sx={{ width: fixedWidth }}
    >
      {loading ? (
        <CircularProgress role="progressbar" color="success" size={24} />
      ) : (
        state
      )}
    </BaseButton>
  );
};
