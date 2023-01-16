import React from 'react'
import profile from '../assets/profile.jpeg'

import { Box, Avatar, useTheme } from '@mui/material'


const Hero = () => {
  const theme = useTheme();
  return (
    <section>
      <Box sx={{
        background: 'linear-gradient(115deg, rgba(221,214,243,1) 0%, rgba(250,172,168,1) 100%)',
        width: '100%',
        height: '30vh',
        position: 'relative'
      }}>
        <Avatar
          alt="Prachee Nanda"
          size="large"
          src={profile}
          sx={{
            width: 124,
            height: 124,
            position: 'absolute',
            bottom: '0',
            left: '20px',
            transform: 'translate(50%, 80%)',
            border: '5px solid',
            borderColor: theme.palette.mode === 'light' ? 'white' : 'black'
          }}
        />
      </Box>
    </section>
  )
}

export default Hero