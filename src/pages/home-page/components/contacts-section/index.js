import './styles.css';

export default function ContactsSection() {
    return (<section id='contacts-section' className='panel' data-color='orange'>
        <h1>let's work together:
            <span className='icons'>
                <a className='button' href='https://www.facebook.com/acdavit'>
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a className='button' href='https://www.linkedin.com/in/%E1%83%93%E1%83%90%E1%83%95%E1%83%98%E1%83%97-%E1%83%90%E1%83%91%E1%83%90%E1%83%99%E1%83%94%E1%83%9A%E1%83%98%E1%83%90-%E1%83%A9%E1%83%90%E1%83%A0%E1%83%A2%E1%83%98%E1%83%90-16a85524a/'>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a className='button' href='https://github.com/acdavit'>
                    <i class="fa-brands fa-github"></i>
                </a>
                <a className='button' href='tel:+995511160891'>
                    <i class="fa-solid fa-phone"></i>
                </a>
                <a className='button' href='mailto:acdavid.personal@protonmail.com'>
                    <i class="fa-solid fa-envelope"></i>
                </a>
            </span>
        </h1>
    </section>)
}