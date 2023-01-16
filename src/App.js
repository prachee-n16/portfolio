import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback, ErrorHandler } from './utils/ErrorFallback'

import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Header from './sections/Header'
import Footer from './sections/Footer'

import { ThemeProvider, CssBaseline, Divider } from '@mui/material'
import { Box } from '@mui/system'
import { createTheme } from "@mui/material";

/**
 * TODO
 * Add babel plugin to help with tree shaking
 */

function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
              primary: {
                main: '#454545'
              }
            }
            : {
              primary: {
                main: '#ffffff'
              }
            }
          )
        },
        typography: {
          fontFamily: [
            '"Public Sans"',
            'sans-serif',
          ].join(',')
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                ...(mode === 'light'
                  ? {
                    backgroundColor: 'white'
                  }
                  : {
                    backgroundColor: 'black'
                  }
                )
              }
            }
          },
          MuiLink: {
            styleOverrides: {
              root: {
                fontWeight: '600',
                marginLeft: 19,
                position: 'relative',
              }
            }
          }
        }
      }),
    [mode],
  );


  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={ErrorHandler}
    >
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="Portfolio">
            <Navbar />
            <Box id="About" />
            <Hero />
            <Header />
            <About />
            <Divider textAlign='center' variant="middle" sx={{ mx: 10, mt: 6 }} />
            <Skills />
            <Box id="Projects" />
            <Divider textAlign='center' variant="middle" sx={{ mx: 10, mt: 6 }} />
            <Projects />
            <Divider textAlign='center' variant="middle" sx={{ mx: 10, mt: 6 }} />
            <Box id="Experience" />
            <Experience />
            <Footer />
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ErrorBoundary>
  );
}

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default App;
