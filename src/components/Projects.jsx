import React from 'react';
import project from '../data/project';
import ProjectItem from './ProjectItem';

function Projects() {
    return (
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-left">
            <div className="flex-none flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {project.map(p => (
                    <ProjectItem
                        imgUrl={p.imgUrl}
                        title={p.title}
                        desc={p.desc}
                        link={p.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;