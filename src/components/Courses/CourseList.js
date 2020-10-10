import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    CardActionArea,
    CardActions,
    CardMedia,
    Button,
} from '@material-ui/core/'
import CourseCard from './CourseCard'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

export  default function CourseList() {
    const classes = useStyles()
    const data =[
      {
          "image": "https://cdn.pixabay.com/photo/2020/10/04/04/24/cat-5625168_1280.jpg",
          "material": [
              "5e8f113707e10ddea7863b8e",
              "5e8f119c07e10ddea7863b8f"
          ],
          "_id": "5e8f10c707e10ddea7863b87",
          "title": "intro to programming in c++ and javascript",
          "courseCode": "Csc 111",
          "description": "111",
          "department": "5e8e31f8e1a20dca09a7fef4",
          "level": "5e8e320de1a20dca09a7fef5",
          "__v": 0,
          "lecturer": "CSCS",
          "id": "5e8f10c707e10ddea7863b87"
      },
      {
          "image": "https://cdn.pixabay.com/photo/2020/10/04/04/24/cat-5625168_1280.jpg",
          "material": [
              "5f71a9e2698ea22aa4e8162b",
              "5f71a9fe698ea22aa4e8162c"
          ],
          "_id": "5e8f2ca6cc4f8ee5ff30a51e",
          "title": " Into To Computer",
          "courseCode": "csc200",
          "description": "hgsdhwdhjqwmdhjxwqgbdhwqbdkjw3bdiwbdxiuwgcfjqwhbdhqwmndebhqwjdebjhcfvejhfebfjhaebfveefeawfew",
          "department": "5e8e31f8e1a20dca09a7fef4",
          "level": "5e8e320de1a20dca09a7fef5",
          "__v": 0,
          "lecturer": "BSBS",
          "id": "5e8f2ca6cc4f8ee5ff30a51e"
      },
      {
          "image": "https://cdn.pixabay.com/photo/2020/10/05/14/32/horse-5629590_1280.jpg",
          "material": [],
          "_id": "5e9dc7da8ac82322efe9e202",
          "title": " Into To  testing",
          "courseCode": "CSC 123",
          "description": "An in to to testing ",
          "department": "5e8e31f8e1a20dca09a7fef4",
          "level": "5e8e320de1a20dca09a7fef5",
          "__v": 0,
          "lecturer": "MR CS",
          "id": "5e9dc7da8ac82322efe9e202"
      },
      {
          "image": "https://cdn.pixabay.com/photo/2020/10/05/14/32/horse-5629590_1280.jpg",
          "material": [],
          "_id": "5e9dc8098ac82322efe9e203",
          "title": " Into To  quantum computer",
          "courseCode": "Csc 125",
          "description": "An in to to bal ",
          "department": "5e8e31f8e1a20dca09a7fef4",
          "level": "5e8e320de1a20dca09a7fef5",
          "__v": 0,
          "lecturer": "MR D",
          "id": "5e9dc8098ac82322efe9e203"
      },
      {
          "image": "https://cdn.pixabay.com/photo/2020/10/05/08/04/boys-5628502_1280.jpg",
          "material": [],
          "_id": "5f6fedc6698ea22aa4e815de",
          "title": " Into To com",
          "courseCode": "Csc 122",
          "description": "An in to to bal ",
          "department": "5e8e31f8e1a20dca09a7fef4",
          "level": "5e8e320de1a20dca09a7fef5",
          "lecturer": "MR Prince ",
          "__v": 0,
          "id": "5f6fedc6698ea22aa4e815de"
      },
      {
          "image": "https://cdn.pixabay.com/photo/2020/10/04/04/24/cat-5625168_1280.jpg",
          "material": [],
          "_id": "5f73a93f94e63f48fd8e2b5e",
          "title": "test",
          "courseCode": "csc 129",
          "description": "hhbjjbjbjbjkkkkkk",
          "department": "5e8e31f8e1a20dca09a7fef4",
          "level": "5e8e320de1a20dca09a7fef5",
          "lecturer": "mr prince",
          "__v": 0,
          "id": "5f73a93f94e63f48fd8e2b5e"
      },
      {
          "image": "https://cdn.pixabay.com/photo/2020/10/04/04/24/cat-5625168_1280.jpg",
          "material": [],
          "_id": "5f7f0ae310e7d15068a289b0",
          "title": "daneil ife",
          "courseCode": "jbjkkjhkhkjkjvhjfghjhgjkj",
          "description": "hxsxhhxshshxshxh",
          "department": "5e8e31f8e1a20dca09a7fef4",
          "level": "5e8e320de1a20dca09a7fef5",
          "lecturer": "xxsxsxssxsxsxsxsxxsssssss",
          "__v": 0,
          "id": "5f7f0ae310e7d15068a289b0"
      }
  ]
    return (
        <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
               Course Overview
          </Typography>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {data.map(elem => (
                    <Grid  
                    justifyContent="center"
                    alignItems="center"
                    
                     item  xs={12} sm={6} md={3} key={data.indexOf(elem)}>
                        <CourseCard
                          courseCode={elem.courseCode}  
                          title={elem.title}  
                          image={elem.image}
                          id={elem.id}
                        />
                     </Grid>
                ))}
            </Grid>
        </div>
    )
}