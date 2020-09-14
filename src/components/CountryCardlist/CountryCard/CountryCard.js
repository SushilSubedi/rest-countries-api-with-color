import React from 'react';
import {
    makeStyles,
    createStyles,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
 } from '@material-ui/core';

const CountryCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Germany
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Population: 2567
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Population: 2567
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                 Population: 2567
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}
const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            width: '300px',
            height:'300px',
            paddingTop: "1%",
            paddingLeft: "2%",
            paddingRight: "2%"
        },
          media: {
            height: 140,
          },
    }))

export default CountryCard;