import React from 'react';

function ProjectItem({ title, desc, imgUrl, link }) {
    return (
        <div className="relative hover:animate-shaking-img">
            <a href={link} target="_blank">
                <img
                    src={imgUrl}
                    alt="project"
                    className='w-72 h-60 object-cover cursor-pointer'
                />
            </a>
            <h3 className="absolute top-0 left-0 right-0 px-1 py-1 text-lg text-white font-bold bg-gray-800/75">
                {title}
            </h3>
            <p className="absolute bottom-0 left-0 right-0 px-1 py-1 text-xs text-white bg-gray-800/75">
                {desc}
            </p>
        </div>
    )
}

export default ProjectItem;