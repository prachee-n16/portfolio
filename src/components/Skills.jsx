import React from 'react'

import { Typography, Box, Link } from '@mui/material'

const Skills = () => {
  const skills = [
    { title: 'Languages', skill: ['HTML5/CSS3/JS(ES6)', 'Python', 'Java', 'JavaScript', 'C/C++', 'PHP', 'Maple'] },
    { title: 'Framework/Libraries', skill: ['React.JS', 'NextJS', 'NodeJS', 'ExpressJS', 'Axios', 'Bootstrap', 'Material-UI', 'jQuery', 'Jest'] },
    { title: 'Tools', skill: ['Git/Github', 'Firebase', 'Heroku', 'Postman', 'Figma', 'VSCode', 'JIRA', 'Confluence'] },
    { title: 'Hardware', skill: ['STM32 Nucleo', 'Breadboarding', 'Circuit Analysis'] },
  ]
  return (
    <Box id="Skills" display="flex" sx={{ flexDirection: "row", }}>
      <Typography fontWeight={700} sx={{ width: '400px', mt: 5, ml: 10 }} variant="h3" fontSize={18} >
        Skills
      </Typography>
      <Box sx={{ width: '90vw', ml: 10, p: 0, mr: 10, mt: 4 }}>
        {skills.map((skill) =>
          <>
            <Typography fontWeight={400} sx={{ width: '400px', mt: 1}} variant="h3" fontSize={16} >
              {skill.title}
            </Typography>
            <Box display="flex" sx={{flexWrap: 'wrap', mt: 1}}>
              {skill.skill.map((s) =>
                <Box sx={{ borderRadius: '5px', backgroundColor: '#8455c6', px: 1, py: 0.5, mx: 0.5 }}>
                  <Typography color="white" fontSize={13} component="div" sx={{}}>
                    {s}
                  </Typography>
                </Box>
              )}
            </Box>
          </>
        )
        }
      </Box>
    </Box>
  )
}

export default Skills