import './styles.css';

export default function AboutSection() {
    return (<section id='about-section' className='panel' data-color='teal'>
        <h1>hi, my name is david abakelia-chartia</h1>
        <h2>and i am a self taught web developer</h2>

        <p className='icons'>
            <span className="fa-brands fa-html5" />
            <span className="fa-brands fa-css3-alt" />
            <span className="fa-brands fa-square-js" />
            <span className='fa-brands fa-react' />
            <span className="fa-brands fa-node-js" />
            <span className="fa-brands fa-git" />
            <span className="fa-brands fa-linux" />
        </p>

        <p>
            I have always been fascinated by the intersection of design and technology, and web development has allowed me to explore this passion in a meaningful way. Over the years, I have gained experience with HTML, CSS, JavaScript, React and have built a portfolio of projects that I am proud of.
        </p>

        <p>
            I have learned a lot from my journey as a self-taught developer, and I believe that the key to success is to be a lifelong learner. As websites continue to evolve, it is important to stay on top of developments and learn new code languages or libraries over the years. Being adaptable, creative, and enjoying the learning process are all skills that make a front-end developer a true asset.
            I am excited to continue growing as a developer and to see where this journey takes me.
        </p>
    </section>)
}