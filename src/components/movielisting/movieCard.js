import React from 'react'
import { CardMedia } from '@mui/material'
import { Card } from '@mui/material';
import { Box, CardContent, CardActionArea, Modal } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

    Card: {
    width: 300,
    margin: 'auto'
  },
  Media: {
    height: 550,
    width: '100%',
    objectFit: 'cover'
  }
})





export default function MovieCard(movie) {
  console.log("value of object in movie card ", movie.movie.Poster)
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const classes = useStyles();


  return (
    <div>
     
      <Card elevation={5}
       className={classes.Media} >
        <CardActionArea onClick={handleOpen} >
        <CardMedia
         className={classes.Media}
        // style={{ height: "250px" , width: "250px" }}
        component="img"
        image={movie.movie.Poster}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {movie.movie.Title}
        </Typography>
          <Typography variant="body2" color="textSecondary">
            Type: { movie.movie.Type}
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
       


      <Modal
       style={{ heightcl: "300px" , width: "250px" , alignItems:'center',justifyContent:'center'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
       <Box >

         <Card elevation={5}  >
          <CardMedia
           sx={{ display: 'flex', flexDirection: 'column' }}
          component="img"
          image={movie.movie.Poster}
          />
          <CardContent>
          <Typography variant="h5" component="div">
            {movie.movie.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Type: { movie.movie.Type}
          </Typography>
          </CardContent>
      </Card>
      </Box>
      </Modal>


    </div>
  )
} 