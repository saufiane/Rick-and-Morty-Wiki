
import styles from '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion';





  

function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
    <motion.div key={router.router} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
      pageExit: {
        backgroundColor: 'white',
        filter: `invert()`,
        opacity: 0
      }
      
    }}>
      <Component {...pageProps} />
    </motion.div>
    </AnimatePresence>
  )
}

export default App;