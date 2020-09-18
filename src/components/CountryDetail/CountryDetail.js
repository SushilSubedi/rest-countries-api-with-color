import React from 'react';
import { makeStyles,createStyles, Box,Button, Container, Paper, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom'

const CountryDetail = () => {
    const classes = useStyles();
    const history = useHistory();

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
                        <img className={classes.imgsrc} src= "" alt=""/>
                        anskfas
                    </div>
                    <div className={classes.infor}>
                        <Typography variant="h4" className={classes.name}>Germany</Typography>
                        <div className={classes.infor2}>
                            <div className={classes.location}>
                                <div className={classes.information}>
                                    <Typography color="textPrimary"  className={classes.detail} component="p">
                                        Native Name:
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                        Belgie
                                    </Typography>
                                </div>
                                <div className={classes.information}>
                                    <Typography color="textPrimary"  className={classes.detail} component="p">
                                        Population:
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                        123525
                                    </Typography>
                                </div>
                                <div className={classes.information}>
                                    <Typography color="textPrimary"  className={classes.detail} component="p">
                                        Region:
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                        123525
                                    </Typography>
                                </div>
                                <div className={classes.information}>
                                    <Typography color="textPrimary"  className={classes.detail} component="p">
                                        Sub Region:
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                        123525
                                    </Typography>
                                </div>
                                <div className={classes.information}>
                                    <Typography color="textPrimary"  className={classes.detail} component="p">
                                        Captial:
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                        123525
                                    </Typography>
                                </div>
                            </div>
                            <div className={classes.currency}>
                                <div className={classes.information}>
                                        <Typography color="textPrimary"  className={classes.detail} component="p">
                                            Top Level Domain:
                                        </Typography>
                                        <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                            .be
                                        </Typography>
                                </div>
                                <div className={classes.information}>
                                        <Typography color="textPrimary"  className={classes.detail} component="p">
                                            Currencies:
                                        </Typography>
                                        <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                            Euro
                                        </Typography>
                                </div>
                                <div className={classes.information}>
                                        <Typography color="textPrimary"  className={classes.detail} component="p">
                                            Language:
                                        </Typography>
                                        <Typography color="textSecondary" className={classes.body} variant="body2" component="p">
                                            Dutch,French,German
                                        </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={classes.border}>
                            <Typography color="textPrimary" className={classes.detail}>Border Countries: </Typography>
                            <Typography color="textSecondary" className={classes.country}>France</Typography>
                            <Typography color="textSecondary" className={classes.country}>Germany</Typography>
                            <Typography color="textSecondary" className={classes.country}>Netherlands</Typography>
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
            // border:'1px solid hsl(0, 0%, 52%)',
            textTransform:'initial',
            fontSize:'14px',
            width:'100%'
        },
        infor2: {
            display:'grid',
            gridTemplateColumns:'repeat(2,1fr)'
        },
        name: {
            paddingBottom:'3%',
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