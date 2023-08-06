import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
const About = () => {
  return (
    <Layout>
      <Box sx={
        {
          my:15,textAlign:'center',p:2,
    "& h6":
    { 
      fontWeight:"bold",
      my:2,
      fontSize:'2rem',

    },
    "& p":
    {
      textAlign:'justify'
    },
    "@media (max-width:600px)":
    {
       mt:0
       ,
       "& h6":
       {
        fontSize:'1.5rem',
        fontFamily:'inherit'
       }
    }
    }}>
        <Typography variant='h6'>
          Welcome to My Resturant
        </Typography>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate bibendum pulvinar. Nullam pretium fringilla quam eget vehicula. In volutpat sapien feugiat, placerat nulla eget, bibendum quam. In lorem nulla, sagittis ut lectus bibendum, aliquet tempor ipsum. Nam erat velit, placerat at efficitur pulvinar, condimentum non nibh. Proin molestie turpis ac urna ullamcorper ultricies. Curabitur porta magna nulla, a tempus mauris consequat id. Vestibulum in tortor quis augue blandit mattis at vel elit. Nam a scelerisque turpis, a dictum dolor. Pellentesque odio tellus, pellentesque nec pharetra a, tempor id orci. Fusce venenatis id arcu et feugiat. Nullam vel ligula et turpis tempor bibendum</p>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate bibendum pulvinar. Nullam pretium fringilla quam eget vehicula. In volutpat sapien feugiat, placerat nulla eget, bibendum quam. In lorem nulla, sagittis ut lectus bibendum, aliquet tempor ipsum. Nam erat velit, placerat at efficitur pulvinar, condimentum non nibh. Proin molestie turpis ac urna ullamcorper ultricies. Curabitur porta magna nulla, a tempus mauris consequat id. Vestibulum in tortor quis augue blandit mattis at vel elit. Nam a scelerisque turpis, a dictum dolor. Pellentesque odio tellus, pellentesque nec pharetra a, tempor id orci. Fusce venenatis id arcu et feugiat. Nullam vel ligula et turpis tempor bibendum</p>

      </Box>
    </Layout>
  )
}

export default About