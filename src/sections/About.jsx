import { useState } from 'react'
import Contact from '../components/Contact';

import { Typography, Box, Link } from '@mui/material'

const About = () => {
  const [readMore, setReadMore] = useState(true);

  return (
    <main>
      <Box display="flex" sx={{ flexDirection: "row", }}>
        <Typography fontWeight={700} sx={{ width: '400px', mt: 5, ml: 10 }} variant="h3" fontSize={18} >
          About Me
        </Typography>
        <Box sx={{ width: '90vw', ml: 10, p: 0, mr: 10 }}>
          <Typography fontWeight={400} sx={{ color: 'gray', lineHeight: '150%', mt: 5, textAlign: 'justify', textJustify: 'inter-word', mb: '4' }} variant="h3" fontSize={16} >
            My name is Prachee Nanda, and I'm a sophomore studying Computer Engineering at University of Waterloo. I’m a full-stack web developer, UI/UX designer and an ardent, lifelong learner who is always creating and learning awesome stuff.
            <br /> <br />
            I love solving problems! Whether it's finding the most elegant way to write a line of code or solving riveting sudoku puzzles, I love the challenge of finding a way and discovering solutions.
            {readMore ? <> <br /> <br /> </> : <br />}
          </Typography>
          <Typography fontWeight={400} sx={{ display: readMore ? 'none' : 'inline', color: 'gray', lineHeight: '150%', textAlign: 'justify', textJustify: 'inter-word' }} variant="h3" fontSize={16}>
            <br />
            My fascination with solving problems, combined with my competitive nature, has influenced me to participate in various public speaking competitions, math contests, business case presentations, and hackathons over the past few years. During these hackathons, I had the opportunity to deliver innovative solutions using software programming and engineering processes. The projects I developed always aimed to drive social impact with the goal of tackling some of the challenges in our current society.

            When I'm not coding or pushing pixels, you can find me obsessing over two-dimensional characters, sketching, gaming, or photography.
            <br /> <br />
          </Typography>
          <Link onClick={() => setReadMore(!readMore)} underline="none" color="secondary" sx={{ fontWeight: 600, m: 0, p: 0, mt: 4 }}>
            {readMore ? 'Read more' : 'Show Less'}
          </Link>

          <Contact/>
        </Box>
      </Box>
    </main>
  )
}

export default About