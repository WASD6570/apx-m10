import styled from "@emotion/styled";
import MaterialTextField from "@mui/material/TextField";
import { TinyText } from "ui/typography";
import type { TextFieldProps } from "@mui/material/TextField";
import React from "react";

type Props = TextFieldProps & {
  type: React.InputHTMLAttributes<unknown>["type"];
  textLabel?: string;
  onValueChange?: (value: any) => void;
};

function TextFieldComp(props: any) {
  return (
    <div className={props.className}>
      {props.textLabel ? <TinyText>{props.textLabel}</TinyText> : null}
      <MaterialTextField
        {...props}
        onChange={(e) => {
          if (props.onValueChange) {
            props.onValueChange(e.target.value);
          }
        }}
      ></MaterialTextField>
    </div>
  );
}

function CodeInputComp(props: Props) {
  return (
    <div className={props.className}>
      {props.textLabel ? <TinyText>{props.textLabel}</TinyText> : null}
      <MaterialTextField
        {...props}
        onChange={(e) => {
          if (props.onValueChange) {
            props.onValueChange(e.target.value);
          }
        }}
      ></MaterialTextField>
    </div>
  );
}

const CodeInput = styled(CodeInputComp)`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 2px;
  }
  & > div > label {
    top: -3px;
    transform: translate(10px, -21px);
  }

  & > div > div > fieldset,
  input {
    text-align: center;
    font-size: large;
    font-weight: bold;
    animation-duration: 0;
    border-radius: var(--border-radius);
    border: 3px solid #000;
    padding: 10px 9px;
  }
`;

const Input = styled(TextFieldComp)`
  display: flex;
  min-height: 52px;
  flex-direction: column;
  & > * {
    margin: 2px;
  }
  & > div > label {
    top: -3px;
    transform: translate(10px, -21px);
  }

  & > div > div > fieldset,
  input {
    animation-duration: 0;
    border-radius: var(--border-radius);
    border: 3px solid #000;
    padding: 10px 9px;
  }
`;

const InputProfile = styled(MaterialTextField)`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 2px;
  }
  & > div > label {
    top: -3px;
    transform: translate(10px, -21px);
  }

  & > div > div > fieldset,
  input {
    animation-duration: 0;
    border-radius: var(--border-radius);
    border: 3px solid #000;
    padding: 10px 9px;
  }
`;

export { Input, CodeInput, InputProfile };
