import React from 'react'

import { Box, Typography, Stack, Divider, Link } from '@mui/material'

const Contact = () => {
  const contactInfo = [
    { info: ['Location', 'Waterloo, ON'], url: false, id: 'location' },
    { info: ['Github', '/prachee-n16'], url: true, id: 'github', href: 'https://github.com/prachee-n16?' },
    { info: ['Linkedin', 'in/pracheenanda'], url: true, id: 'linkedin', href: 'https://www.linkedin.com/in/pracheenanda'  },
    { info: ['Email', 'p4nanda@uwaterloo.ca'], url: true, id: 'email', href: 'p4nanda@uwaterloo.ca'  },
  ]
  return (
    <Box sx={{ backgroundColor: '#f9f5ff', mt: 5, borderRadius: '5px', p: 3 }}>
      <Stack
        direction={"row"}
        justifyContent="space-evenly"
        divider={<Divider orientation="vertical" flexItem />}>
        {contactInfo.map((contact) =>
          <Box id={contact.id}>
            <Typography fontWeight={700} color='#8455c6' sx={{ opacity: '60%' }} >
              {contact.info[0]}
            </Typography>

            {contact.url
              ?
              <Link underline='none' href={contact.href} fontWeight={700} color='#8455c6' sx={{m: 0}} >
                {contact.info[1]}
              </Link>
              : <Typography fontWeight={700} color='#8455c6'>
                {contact.info[1]}
              </Typography>
            }
          </Box>
        )}
      </Stack>

    </Box>
  )
}

export default Contact