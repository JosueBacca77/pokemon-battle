import { Button as MUIButton } from "@mui/material";
import { ButtonProps } from "./types";

export default function Button(props:ButtonProps) {

    const { text, variant, color, onClick } = props;

  return (
    <MUIButton variant={variant} color={color} onClick={onClick}>
      {text}
    </MUIButton>
  )
}
