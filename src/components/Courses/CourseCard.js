import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink  } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    alignSelf:'center',
    textDecoration:'none'
  },
  nav: {
    color:'rgba(0,0,0,0.2)'
  },
 active:{
  color:'rgba(0,0,0,0.2)'
 }
});

export default function CourseCard({courseCode, title, image, id}) {
  const classes = useStyles();
   
  // const preventDefault = (event) => event.preventDefault();
  return (
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={courseCode}
          height="140"
          image={image}
          title= {title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {courseCode}
          </Typography>
          
          <Typography gutterBottom variant="h5" component="span">
             {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         <NavLink activeClassName={classes.active} className={classes.nav} to={`/material/${id}`}  color="inherit">
           <Button style={{textDecoration:'none'}} variant="contained" size="small" color="primary">
             View  {courseCode} Materials
        </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}