import React from 'react';

function ProjectItem({ title, desc, imgUrl, link }) {
    return (
        <div className="relative hover:animate-shaking-img">
            <a href={link} target="_blank">
                <img
                    src={imgUrl}
                    alt="project"
                    className='w-full h-36 md:h-48 object-cover cursor-pointer'
                />
            </a>
            <div className='absolute top-0 left-0 right-0 px-4 py-5 bg-gray-800 opacity-70'>
            </div>
            <h3 className="absolute top-0 left-0 right-0 px-4 py-2 text-xl text-white font-bold">{title}</h3>
            <div className='absolute bottom-0 left-0 right-0 px-4 py-5 bg-gray-800 opacity-70'>
            </div>
            <p className="absolute bottom-0 left-0 right-0 px-4 py-2 text-sm text-white">{desc}</p>
        </div>
    )
}

export default ProjectItem;