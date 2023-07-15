import './styles.css'

import ProjectsSection from './components/projects-section';
import CertificatesSection from './components/certificates-section';
import AboutSection from './components/about-section';
import ContactsSection from './components/contacts-section';


export default function HomePage() {


    return (<div id='home-page'>
        <AboutSection/>
        <ProjectsSection/>
        <CertificatesSection/>
        <ContactsSection/>
    </div >)
}