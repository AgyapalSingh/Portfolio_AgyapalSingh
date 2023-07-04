import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
// import Services from './components/services/Services.jsx'
import Project from './components/project/Project.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Education from './components/education/Education.jsx'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Education />
            <Experience />
            {/* <Services /> */}
            <Project />
            <Contact />
            <Footer />
        </>
    )
}

export default App;