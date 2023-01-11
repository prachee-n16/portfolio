import React from 'react'

import { Typography, Divider } from '@mui/material'

const Header = () => {
  return (
    <header>
        <Typography variant="h3" fontWeight={600} sx={{ml: 28, mt: 2}}>
            Prachee Nanda
        </Typography>
        <Typography fontStyle={'italic'} variant="body" color="gray" fontWeight={400} sx={{ml: 28}}>
            Computer Engineering @UWaterloo 2026 | Full-Stack Developer @UW Entrepreneurship Society
        </Typography>
        <Divider textAlign='center' variant="middle" sx={{mx: 10, mt: 6}}/>
    </header>
  )
}

export default Header