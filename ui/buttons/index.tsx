import styled from "@emotion/styled";
import { useState, useRef } from "react";
import MaterialButton from "@mui/material/Button";
import React from "react";
import type { ButtonBaseProps } from "@mui/material/ButtonBase";
import CircularProgress from "@mui/material/CircularProgress";
import { BoldText } from "ui/typography";
import { AnyStyledComponent } from "styled-components";
interface Props extends ButtonBaseProps {
  color: "blue" | "orange" | "pink";
  callback?: () => any;
  children: string | JSX.Element | null;
}

interface SecondaryProps extends ButtonBaseProps {
  color: "blue" | "orange" | "pink";
  callback?: () => void;
}

function BaseBttn({ color }: any, Component: any) {
  return styled(Component)`
    background-color: ${color === "blue"
      ? "var(--blue) !important"
      : color === "orange"
      ? "var(--orange) !important"
      : "var(--pink) !important"};
    border-radius: var(--border-radius);
    text-transform: none;
  `;
}

export const SecondaryButton = styled(MaterialButton)`
  border-radius: var(--border-radius);
  text-transform: none;
  background-color: transparent;
`;

export const LoaderButton = ({ color, children, callback, sx }: Props) => {
  const [childrenElements, setChildren] = useState(children);
  const [loading, setLoading] = useState(false);
  const BaseButton = BaseBttn({ color }, MaterialButton);
  const button: any = useRef();

  function clickHandler() {
    setChildren(null);
    setLoading(!loading);
    callback ? callback() : null;
  }

  return (
    <BaseButton
      onClick={clickHandler}
      disabled={!!loading}
      ref={button}
      sx={{ width: "100%", ...sx }}
    >
      {loading ? (
        <CircularProgress role="progressbar" color="success" size={24} />
      ) : (
        <BoldText sx={{ color: "black" }}>{childrenElements}</BoldText>
      )}
    </BaseButton>
  );
};

export const MainButton = ({ color, children, callback, sx }: Props) => {
  const BaseButton = BaseBttn({ color }, MaterialButton);

  function clickHandler() {
    callback ? callback() : null;
  }

  return (
    <BaseButton onClick={clickHandler} sx={{ width: "100%", ...sx }}>
      <BoldText sx={{ color: "black" }}>{children}</BoldText>
    </BaseButton>
  );
};
