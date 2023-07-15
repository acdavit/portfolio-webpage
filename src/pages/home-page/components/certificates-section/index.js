import CertificateCard from './components/certificate-card'
import './styles.css'

import certificates from 'data/certificates.json'

export default function CertificatesSection() {
    return (<section id='certificates-section' className='panel' data-color='purple'>
        <h1>i have the following certificates:</h1>

        <div id='certificates-container'>
            {certificates.map((
                (certificate, index) => <CertificateCard item={certificate} key={index} />
            ))}
        </div>

    </section>)
}