import { CardContent, CardMedia, Card as MUICard } from "@mui/material";
import { CardProps } from "./types";

const DEFAULT_CARD_MEDI_HEIGHT = 160;

export default function Card(props:CardProps) {

    const { children, classes, cardMediaHeight=DEFAULT_CARD_MEDI_HEIGHT, cardMediaUrl, cardMediaTitle } = props;

  return (
    <MUICard 
        classes={classes}
    >
        {
            cardMediaUrl && 
            <CardMedia
                component="img"
                sx={{ objectFit: "contain" }}
                image={cardMediaUrl}
                alt={cardMediaTitle}
            />
        }
        <CardContent>
            {children}
        </CardContent>
    </MUICard>
  )
}
