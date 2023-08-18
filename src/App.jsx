import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Global from './components/styles/Global'
import Main from './components/Main'
import Curve from './components/Curve'
import Action from './components/Action'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

const theme = {
  backgroundColor: {
    header:  "#fff",
    body: " hsl(240, 75%, 98%)",
    callToAction: "hsl(238, 22%, 44%)",
    footer: "hsl(243, 87%, 12%)",
  },

  curve: {
    desktop: "../images/bg-curve-desktop.svg",
    mobile: "../images/bg-curve-mobile.svg",
  },

  tablet: "913px",
  mobile: "550px",
}

function App() {

  const [email, setEmail] = useState('')
  const [alert, setAlert] = useState(null)

  const handleEmailInput = (e) => {
    e.preventDefault()
    validateEmail(email)
    console.log(email)
    console.log(alert)
  }

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
        setAlert('Please enter a valid email address');
    } else {
        setAlert('');
    }
  };

  
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header handleEmailInput={handleEmailInput} setEmail={setEmail} email={email} alert={alert} />
      <Curve />
      <Main />
      <Action handleEmailInput={handleEmailInput} setEmail={setEmail} email={email} alert={alert} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
