import React, { useContext, useEffect, useState } from 'react';
import { makeStyles,createStyles, Box,Button, Container, Paper, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useParams } from 'react-router-dom';
import CountryContextAPI from '../../ContextAPI/CountryContextAPI/CountryContextAPI';

const CountryDetail = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [country,setCountry] = useState({});

    const { data } = useContext(CountryContextAPI);
     const { CountryID } = useParams();

    useEffect(() => {
        if(data.length){
            setCountry(data.find(country => country.name === CountryID)) 
        }
    },[CountryID,data])

    const NavigationHandler = () => {
        history.push('/');
    }

    return(
        <div className={classes.root}>
            <Container>
                <Box padding="2% 1%">
                    <Paper elevation={1} style={{width:'110px', height:'25'}}>
                        <Button className={classes.button} onClick={NavigationHandler}>
                            <ArrowBackIcon fontSize="small" style={{marginRight:'4px'}}/>
                            Back
                        </Button>
                    </Paper>
                </Box>
                <Box component={Paper} elevation ={0}  className={classes.box}>
                    <div className={classes.img}>
                        <img className={classes.imgsrc} src= {country?.flag} alt="Country flag"/>
                    </div>
                    <div className={classes.infor}>
                        <Typography variant="h4" className={classes.name}>{country?.name}</Typography>
                        <div className={classes.infor2}>
                            <div className={classes.location}>
                                <div className={classes.information}>
                                    <Typography color="textPrimary"  className={classes.detail} component="p">
                                        Native Name:
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                        {country?.nativeName}
                                    </Typography>
                                </div>
                                <div className={classes.information}>
                                    <Typography color="textPrimary"  className={classes.detail} component="p">
                                        Population:
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                        {country?.population}
                                    </Typography>
                                </div>
                                <div className={classes.information}>
                                    <Typography color="textPrimary"  className={classes.detail} component="p">
                                        Region:
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                        {country?.region}
                                    </Typography>
                                </div>
                                <div className={classes.information}>
                                    <Typography color="textPrimary"  className={classes.detail} component="p">
                                        Sub Region:
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                        {country?.subregion}
                                    </Typography>
                                </div>
                                <div className={classes.information}>
                                    <Typography color="textPrimary"  className={classes.detail} component="p">
                                        Captial:
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                        {country.capital}
                                    </Typography>
                                </div>
                            </div>
                            <div className={classes.currency}>
                                <div className={classes.information}>
                                        <Typography color="textPrimary"  className={classes.detail} component="p">
                                            Top Level Domain:
                                        </Typography>
                                        <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                            {country.topLevelDomain}
                                        </Typography>
                                </div>
                                <div className={classes.information}>
                                        <Typography color="textPrimary"  className={classes.detail} component="p">
                                            Currencies:
                                        </Typography>
                                        {
                                            (country?.currencies)?.map((currency,index) => (
                                                <Typography key={index} color="textSecondary" className={classes.body} variant="body2" component="p">
                                                    {currency.name}
                                                </Typography>)
                                            )
                                            }
                                </div>
                                <div className={classes.information}>
                                        <Typography color="textPrimary"  className={classes.detail} component="p">
                                            Language:
                                        </Typography>
                                        {
                                            country?.languages?.map((language,index) => (
                                                <Typography key={index} color="textSecondary" className={classes.body} variant="body2" component="p">
                                                    {language.name}
                                                </Typography>
                                            ))
                                        }
                                </div>
                            </div>
                        </div>
                        <div className={classes.border}>
                            <Typography color="textPrimary" className={classes.detail}>Border Countries: </Typography>
                                 {
                                    country?.borders?.map((country,index) => (
                                    <Typography key={index} color="textSecondary" className={classes.country}>{country}</Typography>
                                    ))
                                } 
                        </div>
                    </div>
                </Box>
            </Container>
        </div>
    )
}
const useStyles = makeStyles(theme => 
    createStyles({
        root: {
             padding:'2% 4%'
        },
        box:{
            display:'flex'
        },
        img:{
            flex: 1
        },
        infor: {
            flex: 2,
            marginLeft:'6%',
            marginRight:'2%'
        },
        imgsrc: {
            width:'400px',
            height:'300px'
        },
        button: {
            textTransform:'initial',
            fontSize:'14px',
            width:'100%'
        },
        infor2: {
            display:'grid',
            gridTemplateColumns:'repeat(2,1fr)'
        },
        name: {
            padding: '3% 0',
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
            fontSize:'16px',
            marginLeft:'4px'
          },
          border:  {
              display:'flex',
            padding:'2% 1%'
          },
          country: {
              marginLeft:"5%"
          },
          location: {
              margin:'1%'
          },
          currency: {
              margin:'1%'
          }
    }))


export default CountryDetail;