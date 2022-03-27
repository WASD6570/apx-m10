import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import React from "react";

interface baseType extends React.HTMLAttributes<HTMLElement> {
  children: any;
  color?: string;
  bold?: boolean;
  sx?: Object;
}

function Base({ fontSize, bold, color }: any) {
  return styled(Typography)`
    font-size: ${fontSize}px;
    font-weight: ${bold ? "700" : "400"};
    color: ${color};
  `;
}

export function Title({ children, color, sx }: baseType) {
  const BaseComponent = Base({ fontSize: "48", bold: true, color });
  return (
    <BaseComponent sx={sx} variant="h1">
      {children}
    </BaseComponent>
  );
}

export function Subtitle({ children, color, sx }: baseType) {
  const BaseComponent = Base({ fontSize: "32", bold: true, color });
  return (
    <BaseComponent sx={sx} variant="h3">
      {children}
    </BaseComponent>
  );
}

export function LargeText({ children, color, sx }: baseType) {
  const BaseComponent = Base({ fontSize: "20", bold: false, color });
  return (
    <BaseComponent sx={sx} variant="subtitle1">
      {children}
    </BaseComponent>
  );
}

export function LargeTextBold({ children, color, sx }: baseType) {
  const BaseComponent = Base({ fontSize: "20", bold: true, color });
  return (
    <BaseComponent sx={sx} variant="subtitle1">
      {children}
    </BaseComponent>
  );
}

export function Text({ children, color, sx }: baseType) {
  const BaseComponent = Base({ fontSize: "16", bold: false, color });
  return (
    <BaseComponent sx={sx} variant="body1">
      {children}
    </BaseComponent>
  );
}

export function BoldText({ children, color, sx }: baseType) {
  const BaseComponent = Base({ fontSize: "16", bold: true, color });
  return (
    <BaseComponent sx={sx} variant="body1">
      {children}
    </BaseComponent>
  );
}

export function TinyText({ children, color, sx }: baseType) {
  const BaseComponent = Base({ fontSize: "12", bold: false, color });
  return (
    <BaseComponent sx={sx} variant="caption">
      {children}
    </BaseComponent>
  );
}
