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
          <CardContent className={classes.CardContent}>
              <Typography color="textprimary" className={classes.name} gutterBottom variant="h5" component="h2">
                Germany
              </Typography>

              <div className={classes.information}>
                <Typography color="textprimary"  className={classes.detail} component="p">
                    Population:
                </Typography>
                <Typography color="textsecondary" className={classes.body} variant="body2" component="p">
                      123525
                </Typography>
              </div>

              <div className={classes.information}>
                <Typography color="textprimary"  className={classes.detail} component="p">
                    Region:
                </Typography>
                <Typography color="textsecondary" className={classes.body} variant="body2" component="p">
                    Europe
                </Typography>
              </div>

              <div className={classes.information}>
                <Typography color="textprimary"  className={classes.detail} component="p">
                  Capital:
                </Typography>
                <Typography color="textsecondary" className={classes.body} variant="body2" component="p">
                     Berlin
                </Typography>
            </div>
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
            transition: 'all 0.3s ease-out',
            "&:hover":{
              transform: 'translate(-5px,-20px)'
          }
        },
        CardContent:{
          padding:'4% 11%'
        },
        name: {
          fontFamily:'inherit',
          paddingBottom:'4px',
          fontWeight:'600'
        },
        detail: {
          fontFamily:'inherit',
          fontWeight:'600',
          paddingRight:'4px',
          fontSize:'16px',
          color:' hsl(0, 0%, 52%)'
        },
        information: {
          display: 'flex',
          fontFamily:'inherit',
        },
        body: {
          alignSelf: 'center',
          fontFamily:'inherit',
          fontSize:'16px'
        },
          media: {
            height: 140,
          },
    }))

export default CountryCard;