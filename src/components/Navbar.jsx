import React from 'react'

import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Navbar = () => {
  const pages = ['About', 'Experience', 'Projects', 'Resume']
  return (
    <nav>
      <AppBar position={"static"}>
        <Toolbar>
          <Link 
            color="#000000" 
            href="#" 
            fontWeight={700} 
            fontSize={20}
            underline="none"
          >
            Prachee Nanda
          </Link>
          {/* ANCHOR TAGS TO DIFFERENT PARTS OF PORTFOLIO */}
          <div>
            {pages.map((page) =>
              <Link underline="none" href={`#${page}`} key={`id-${page}`}>
                <Typography component="span">{page}</Typography>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

export default Navbar