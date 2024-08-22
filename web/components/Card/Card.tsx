import { Card as MUICard } from "@mui/material";
import { CardProps } from "./types";

export default function Card(props:CardProps) {

    const { children, classes } = props;

  return (
    <MUICard 
        classes={classes}
    >
        {children}
    </MUICard>
  )
}
