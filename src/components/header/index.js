import './styles.css';

export default function Header(){
    return(<header className='glass'>
        <a href='#about-section' className='button'>
            about
        </a>
        <a href='#projects-section' className='button'>
            projects
        </a>
        <a href='#certificates-section' className='button'>
            certificates
        </a>
        <a href='#contacts-section' className='button'>
            contacts
        </a>
    </header>)
}