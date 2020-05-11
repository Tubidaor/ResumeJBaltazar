import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ProfessionalExp from './Sections/ProfessionalExp';
import SkillsSection from './Sections/SoftwareSkills';
import IntroSection from './Sections/Introduction'
import Education from './Sections/Education';
import CertMiscSection from './Sections/CertMisc';
import { certMisc } from './JobData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      width: document.documentElement.clientWidth
    }
  }

  getDocWidth = () => {

    const docWidth = document.documentElement.clientWidth

    this.setState({
      width: docWidth
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.getDocWidth)
  }

  render() {

    const { cert, languages, hobbies } = certMisc

    function displaySideBySide() {

    let w = document.documentElement.clientWidth;

    if( w > 600) {
      return (
        <div className="app">
          <Header/>
          <div className="breakpointHead"/>
          <main>
            <div className="rightHalf">
              <div className='introSkillsContainer'>
                <IntroSection/>
                <div className="breakpoint"/>
                <SkillsSection/>
              </div>
              <div className="breakpoint"/>
              <Education/>
              <div className="breakpoint"/>
              <CertMiscSection title="Certifications" cert={cert}/>
              <div className="breakpointAddLang1"/>
              <CertMiscSection title="Additional Languages" cert={languages}/>
              <div className="breakpoint"/>
              <CertMiscSection title="Hobbies" cert={hobbies}/>
            </div>
            <div className="borderDiv">
              <div>
              </div>
            </div>
            <div className="leftHalf">
              <ProfessionalExp/>
            </div>
          </main>
          <footer className="footer">
            <div className="breakpoint"/>
            <p>
              This résumé was made using React {' '}
              <div className="footerDiv">
                <FontAwesomeIcon icon={faReact}/>
              </div>
            </p>
          </footer>
        </div>
      )
    } else {
      return (
        <div className="app">
          <Header/>
          <div className="breakpoint"/>
          <main>
            <div className='introSkillsContainer'>
              <IntroSection/>
              <div className="breakpoint"/>
              <SkillsSection/>
            </div>
            <div className="breakpoint"/>
            <ProfessionalExp/>
            <div className="breakpoint"/>
            <Education/>
            <div className="breakpoint"/>
            <CertMiscSection title="Certifications" cert={cert}/>
            <div className="breakpoint"/>
            <CertMiscSection title="Additional Languages" cert={languages}/>
            <div className="breakpoint"/>
            <CertMiscSection title="Hobbies" cert={hobbies}/>
          </main>
          <footer className="footer">
            <div className="breakpoint"/>
            <p>
              This résumé was made using React {' '}
              <div className="footerDiv">
                <FontAwesomeIcon icon={faReact}/>
              </div>
            </p>
          </footer>
        </div>
      )
    }
  }

    return (
      displaySideBySide()
    );
  }
}
