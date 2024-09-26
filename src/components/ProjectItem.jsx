import React from 'react';

function ProjectItem({ title, desc, imgUrl, link }) {
    return (
        <div>
            <a href={link} target="_blank">
                <img
                    src={imgUrl}
                    alt="project"
                    className='w-full h-36 md:h-48 object-cover cursor-pointer'
                />
            </a>
            <div className='w-full p-4'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ProjectItem;