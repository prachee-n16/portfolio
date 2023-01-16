import React from 'react'
import Resume from './Resume.pdf'

import { AppBar, Toolbar, Typography, Link, IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box } from '@mui/system';
import { ColorModeContext } from '../App';

const Navbar = () => {
  const theme = useTheme();

  const colorMode = React.useContext(ColorModeContext);
  const pages = ['About', 'Experience', 'Projects', 'Resume']
  return (
    <nav>
      <AppBar position={"fixed"}>
        <Toolbar>
          <Link
            color='primary'
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
              page !== 'Resume' ?
                <Link underline="none" href={`#${page}`} key={`id-${page}`}>
                  <Typography component="span">{page}</Typography>
                </Link>
                :
                <Link underline="none" href={Resume} target = "_blank" key={`id-${page}`}>
                  <Typography component="span">{page}</Typography>
                </Link>
            )}
          </div>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

export default Navbar