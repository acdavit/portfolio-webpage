import './styles.css';

export default function CertificateCard({item: {name, url, fontawesomeClassNames}}){
    return (<div className="certificate-card glass-card" onClick={()=>window.location.href = url}>
        <i className={fontawesomeClassNames}></i>
        <span>{name}</span>
    </div>)
}