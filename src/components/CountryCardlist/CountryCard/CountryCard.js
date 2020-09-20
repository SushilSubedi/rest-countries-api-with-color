import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    makeStyles,
    createStyles,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
 } from '@material-ui/core';
// import CountryDetail from '../../CountryDetail/CountryDetail';

const CountryCard = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const { country,population,Region,Capital,img } = props;

    const CountryDetailHandler = () => {
        history.push('/Country')
    }

    return (
        <Card className={classes.root} onClick={CountryDetailHandler}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.CardContent}>
              <Typography color="textPrimary" className={classes.name} gutterBottom variant="h5" component="h4">
                  {country}
              </Typography>

              <div className={classes.information}>
                <Typography color="textPrimary"  className={classes.detail} component="p">
                    Population:
                </Typography>
                <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                      {population}
                </Typography>
              </div>

              <div className={classes.information}>
                <Typography color="textPrimary"  className={classes.detail} component="p">
                    Region:
                </Typography>
                <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                    {Region}
                </Typography>
              </div>

              <div className={classes.information}>
                <Typography color="textPrimary"  className={classes.detail} component="p">
                  Capital:
                </Typography>
                <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                     {Capital}
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
            minHeight:'320px',
            transition: 'all 0.3s ease-out',
            "&:hover":{
              transform: 'translate(-5px,-20px)'
          }
        },
        CardContent:{
          padding:'4% 11%',
          margin:'1% 0'
        },
        name: {
          padding:'4% 0',
          fontWeight:'800'
        },
        detail: {
          fontWeight:'600',
          paddingRight:'4px',
          fontSize:'16px'
        },
        information: {
          display: 'flex',
          margin:'inherit'
        },
        body: {
          alignSelf: 'center',
          fontWeight:'300',
          fontSize:'16px'
        },
          media: {
            height: 150,
          },
    }))

export default CountryCard;