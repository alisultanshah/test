import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { red } from '@mui/material/colors';
import MailIcon from '@mui/icons-material/Mail';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my:10 ,ml:5
      ,"& h6":
      {
        fontWeight:'bold',
        mb:2,
      }}}>
        <Typography variant='h6'>
          Contact My Resturant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate bibendum pulvinar. Nullam pretium fringilla quam eget vehicula. In volutpat sapien feugiat, placerat nulla eget, bibendum quam. In lorem nulla, sagittis ut lectus bibendum, aliquet tempor ipsum. Nam erat velit
        </p>
      </Box>
       <Box sx={{m:3 ,width:'600px',ml:5
      ,"@media (max-width:600px)":
      {
         width:'300px',
  
      }}}>
         <TableContainer component={Paper}>
            <Table aria-albel='contact table'>
               <TableHead>
                  <TableRow>
                    <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>Contact Details</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:"red",pt:1}}/> 123248484 (toll free)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{color:"skyblue",pt:1}}/> sultanali@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <AddIcCallIcon sx={{color:"skyblue",pt:1}}/> 9826751549 
                  </TableCell>
                </TableRow>
               </TableBody>
            </Table>
         </TableContainer>
       </Box>
    </Layout>

  )
}

export default Contact