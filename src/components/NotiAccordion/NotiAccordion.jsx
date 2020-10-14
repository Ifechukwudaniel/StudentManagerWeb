import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pagination from '@material-ui/lab/Pagination';


import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import CardFooter from '../Card/CardFooter';

const useStyles = makeStyles((theme) => ({
    container: {
        height: "35%",
        minHeight: "300px"
    },
    root: {
        width: '100%',
        height: "180px",
        overflowY: 'scroll'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
}));

const NotiAccordion = (props) => {
    const classes = useStyles();
    const [page, setPage] =  useState(1);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    

    return (
        <Card>
            <div className={classes.container}>
                <CardHeader color="success">
                    <h4 className={classes.cardTitleWhite}>{props.title}</h4>
                    <p className={classes.cardCategoryWhite}>
                        {props.subTitle}
                    </p>
                </CardHeader>
                <CardBody>
                    <div className={classes.root}>
                        {
                            props.data
                            .slice((page-1)*4, page*4  )
                            .map(item => {
                            
                                return (
                                    <Accordion key={item.id}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className={classes.heading}>{item.title}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {item.body}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>)

                            })
                        }
                    </div>
                </CardBody>
                <CardFooter>
                    <Pagination page={page} onChange={handleChangePage} count={Math.ceil(props.data.length/4)} />
                </CardFooter>
            </div>
        </Card>
    );
}


export default NotiAccordion;