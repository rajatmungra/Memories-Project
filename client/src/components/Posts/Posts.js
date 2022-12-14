// import Post from "./Post/Post";
// import { Grid, CircularProgress } from "@material-ui/core";
// import { useSelector } from "react-redux";

// import useStyles from './style'
// const Posts = () => {

//     const classes = useStyles();
//     const posts = useSelector((state) => state.reducer);
//     console.log(posts);

  

//     return (

//         !posts.length ? <CircularProgress /> : (
//             <Grid className={classes.container} container alignItems="stretch" spacing={3}>
//                 {
//                    posts.map((post) =>  (
//                     <Grid item key={post._id} xs={12} sm={6}>
//                         <Post post={post} />
//                     </Grid>
//                     )
//                  )
//                 }
//             </Grid>

//         )


//     )
// }

// export default Posts;



// import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './style';

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.reducer);
  // console.log(posts);
  const classes = useStyles();

 

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;