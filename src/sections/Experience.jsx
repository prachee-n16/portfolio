import React from 'react'
import NCR_Logo from '../assets/NCR_Corporation_logo.png'
import FBC_Logo from '../assets/fbc.jpeg'
import maple from '../assets/maple.png'
import opencode from '../assets/opencode.jpeg'
import lingobyte from '../assets/lingobyte.jpeg'

import { Avatar, Typography, Box, Grid, Divider, Button, Card, CardContent, CardActions } from '@mui/material'

const Experience = () => {
  const experiences = [
    { jobTitle: 'Frontend Software Developer', company: 'NCR Corporation · Internship', duration: 'Sep 2022 - Dec 2022 · 4 mos', id: 'ncr-experience', imgSrc: NCR_Logo},
    { jobTitle: 'Quality Assurance Technician', company: 'Farm Business Consultants', duration: 'Jan 2022 - Apr 2022 · 4 mos', id: 'fbc-experience', imgSrc: FBC_Logo },
    { jobTitle: 'Content Developer', company: 'Maplesoft', duration: 'Jul 2021 - Dec 2021 · 6 mos', id: 'maplesoft-experience', imgSrc: maple  },
    { jobTitle: 'Intern', company: 'TheOpenCode Foundation', duration: 'Jul 2020 - Jul 2021 · 1 yr 1 mo', id: 'openCodeFoundation-experience', imgSrc: opencode},
    { jobTitle: 'Software Engineer Intern', company: 'Lingobyte', duration: 'Sep 2020 - Dec 2020 · 4 mos', id: 'lingobyte-experience',  imgSrc: lingobyte }
  ]
  return (
    <section>
      <Box display="flex" sx={{ flexDirection: "row", }}>
        <Typography fontWeight={700} sx={{ width: '400px', mt: 5, ml: 10 }} variant="h3" fontSize={18} >
          Experience
        </Typography>
        <Grid container spacing={2} sx={{ml: 10, mr: 10, mt: 2, mb: 4}}>
          {experiences.map((experience) =>
            <Grid item id={experience.id} xs={6}>
              <Card display='flex' sx={{ flexDirection: 'column', p: 1, maxWidth: '500px', minHeight: '200px' }}>
                  <CardContent>
                    <Box display="flex" sx={{ flexDirection: "row", }}>
                      <Avatar src={experience.imgSrc} sx={{ mr: 2, width: '52px', height: '52px' }} />
                      <Box display="flex" sx={{ flexDirection: "column" }}>
                        <Typography fontWeight={800}>
                          {experience.jobTitle}
                        </Typography>
                        <Typography sx={{ color: 'gray' }}>
                          {experience.company}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ fontWeight: 400, color: 'darkgray', mt: 5 }}>
                      {experience.duration}
                    </Typography>
                  </CardContent>
                  <Divider />
               
              </Card>
            </Grid>
          )}
        </Grid>
      </Box>
    </section>
  )
}

export default Experience