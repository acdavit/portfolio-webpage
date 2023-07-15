import './styles.css';
import ProjectCard from './components/project-card';
import projects from "data/projects.json";

export default function ProjectsSection(){
    
    return(
        <section id='projects-section' className='panel' data-color='blue'>
            <h1>these are my projects:</h1>
            {projects.map((project, index) => <ProjectCard project={project} key={index}/>)}
        </section>
    )
}