import './styles.css';

export default function ProjectCard({ project }) {
    return (
        <div className='project-card glass-card'>
            <i className={`${project.fontawesomeClassNames} project-icon`} />

            <div className='project-description'>
                <span className="project-name">{project.name}</span>
                <div className='inline'>
                    <div className='project-built-with'>
                        {project.stack.map((stack, index) => (
                            <span key={index} className={`${stack} stack`}></span>
                        ))}
                    </div>
                    
                    <div className='project-buttons'>
                        <a href={project.liveUrl} className='button'>
                            <span className='fa-solid fa-globe'></span>
                        </a>
                        <a href={`https://github.com/acdavit/${project.githubSlug}`} className='button'>
                            <span className='fa-solid fa-code'></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}