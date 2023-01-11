import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback, ErrorHandler } from './utils/ErrorFallback'
import { theme } from './utils/theme'

import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Header from './sections/Header'
import Footer from './sections/Footer'

import { ThemeProvider, CssBaseline, Divider } from '@mui/material'

/**
 * TODO
 * Add babel plugin to help with tree shaking
 */

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={ErrorHandler}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="Portfolio">
          <Navbar />
          <Hero />
          <Header />
          <About />
          <Divider textAlign='center' variant="middle" sx={{mx: 10, mt: 6}}/>
          <Skills />
          <Divider textAlign='center' variant="middle" sx={{mx: 10, mt: 6}}/>
          <Projects />
          <Divider textAlign='center' variant="middle" sx={{mx: 10, mt: 6}}/>
          <Experience />
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
