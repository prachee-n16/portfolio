import { useState } from 'react'

import { Avatar, Typography, Link, Box, Grid, Divider, Button, Card, CardMedia, CardContent, CardActions, IconButton, Icon, ToggleButtonGroup, ToggleButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ComputerIcon from '@mui/icons-material/Computer';
import FlareIcon from '@mui/icons-material/Flare';
import ConstructionIcon from '@mui/icons-material/Construction';
import DataObjectIcon from '@mui/icons-material/DataObject';

import coved from '../assets/coved.jpeg'
import whispr from '../assets/whispr.png'
import courseGuru from '../assets/courseGuru.png'

const Projects = () => {
  const featured = [
    {
      title: 'COV-ED: Parenting made simple!',
      description: 'Prototype mobile game using Unity to entertain children during their free time',
      img: coved,
      githubLink: 'https://github.com/Shivam-J-07/COV-ED',
      devPostLink: 'https://devpost.com/software/cov-ed-f0hid8',
      youtubeLink: '',
      projectType: ['Hackathon', 'Winner']
    },
    {
      title: 'Whispr',
      description: 'Provides in-app translation features that enables for real-time multilingual communication',
      img: whispr,
      githubLink: 'https://github.com/prachee-n16/whispr-chatApp',
      devPostLink: '',
      youtubeLink: '',
      projectType: ['Personal']
    },
    {
      title: 'CourseGuru',
      description: 'CourseGuru is a website that compares courses offered by various educational platforms!',
      img: courseGuru,
      devPostLink: 'https://devpost.com/software/codeguru-2jy96q',
      youtubeLink: 'https://www.youtube.com/watch?v=WFTQj3xF0T4&t=1s',
      projectType: ['Hackathon', 'Winner']
    },
  ]

  const hackathon = [
    {
      title: 'COV-ED: Parenting made simple!',
      description: 'Prototype mobile game using Unity to entertain children during their free time',
      img: coved,
      githubLink: 'https://github.com/Shivam-J-07/COV-ED',
      devPostLink: 'https://devpost.com/software/cov-ed-f0hid8',
      youtubeLink: '',
      projectType: ['Hackathon', 'Winner']
    },
    {
      title: 'CourseGuru',
      description: 'CourseGuru is a website that compares courses offered by various educational platforms!',
      img: courseGuru,
      devPostLink: 'https://devpost.com/software/codeguru-2jy96q',
      youtubeLink: 'https://www.youtube.com/watch?v=WFTQj3xF0T4&t=1s',
      projectType: ['Hackathon', 'Winner']
    },
  ]

  const personal = [{
    title: 'Whispr',
    description: 'Provides in-app translation features that enables for real-time multilingual communication',
    img: whispr,
    githubLink: 'https://github.com/prachee-n16/whispr-chatApp',
    devPostLink: '',
    youtubeLink: '',
    projectType: ['Personal']
  }]
  const [projects, setProjects] = useState(featured)

  const handleProjectDisplay = (event, newProjectType) => {
    if (newProjectType === 'featured') setProjects(featured)
    if (newProjectType === 'hackathon') setProjects(hackathon)
    if (newProjectType === 'personal') setProjects(personal)
  }

  return (
    <>
      <Box display="flex" width="100%" sx={{ flexDirection: 'row', justifyContent: 'space-between', mr: 10 }}>
        <Typography fontWeight={700} sx={{ width: '400px', mt: 5, ml: 10 }} variant="h3" fontSize={18} >
          Projects
        </Typography>

        <ToggleButtonGroup
          value={projects}
          exclusive
          onChange={handleProjectDisplay}
          sx={{ ml: 10, mt: 5, mr: 10 }}
        >
          <ToggleButton value="featured" aria-label="left aligned">
            <FlareIcon />
            <Typography sx={{ fontWeight: 600, ml: 1 }}>
              Featured
            </Typography>
          </ToggleButton>
          <ToggleButton value="hackathon" aria-label="left aligned">
            <ConstructionIcon />
            <Typography sx={{ fontWeight: 600, ml: 1 }}>
              Hackathon
            </Typography>
          </ToggleButton>
          <ToggleButton value="personal" aria-label="left aligned">
            <DataObjectIcon />
            <Typography sx={{ fontWeight: 600, ml: 1 }}>
              Personal
            </Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box display="flex" sx={{ flexDirection: 'row', ml: 10, mt: 4, mb: 10 }}>
        <Grid container sx={{mr: 5}}>
          {projects.map((project) =>
            <Grid item xs={4}>
              <Card display="flex" sx={{ p: 1, height: '440px', width: '400px' }}>
                <CardMedia
                  component="img"
                  height="65%"
                  alt={`projectCover-${project.img}`}
                  image={project.img}
                />
                <CardContent>
                  <Typography variant="h5" fontSize={18} fontWeight={600}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" fontSize={13} color="gray">
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions disableSpacing={true} sx={{ justifyContent: 'space-between' }}>
                  <Box
                    sx={{ display: 'flex', flexDirection: 'row', }}
                  >
                    {project.projectType.map((type) =>
                      <Box sx={{ borderRadius: '5px', backgroundColor: '#8455c6', px: 1, py: 0.5, mx: 0.5 }}>
                        <Typography color="white" fontSize={11} component="div" sx={{}}>
                          {type}
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  <div>
                    {project.devPostLink &&
                      <IconButton href={project.devPostLink}>
                        <ComputerIcon />
                      </IconButton>
                    }
                    {project.githubLink &&
                      <IconButton href={project.githubLink}>
                        <GitHubIcon />
                      </IconButton>
                    }
                    {project.youtubeLink &&
                      <IconButton href={project.youtubeLink}>
                        <YouTubeIcon />
                      </IconButton>
                    }
                  </div>
                </CardActions>
              </Card>
            </Grid>
          )}

        </Grid>
      </Box>
    </>
  )
}

export default Projects