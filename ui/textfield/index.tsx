import styled from "@emotion/styled";
import MaterialTextField from "@mui/material/TextField";
import { TinyText } from "ui/typography";
import type { TextFieldProps } from "@mui/material/TextField";
import React from "react";

type Props = TextFieldProps & {
  label?: string;
  type: React.InputHTMLAttributes<unknown>["type"];
};

function TextFieldComp(props: Props) {
  return (
    <div className={props.className}>
      {props.label ? <TinyText>{props.label}</TinyText> : null}
      <MaterialTextField
        className={props.className}
        required={props.required}
        error={props.error}
        disabled={props.disabled}
        type={props.type}
        placeholder={props.type}
      ></MaterialTextField>
    </div>
  );
}

const TextField = styled(TextFieldComp)`
  display: flex;
  flex-direction: column;
  & > div > div > fieldset,
  input {
    animation-duration: 0;
    border-radius: var(--border-radius);
    border: 3px solid #000;
  }
`;

export { TextField };
