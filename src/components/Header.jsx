import React from 'react';

function Header() {
    return (
        <div className='relative'>
            <img
                src="src\assets\wolf1.jpg"
                alt="name"
                className="inline-block rounded-md h-8 w-8 flex-none text-gray-400 group-data-[focus]:text-white"
                aria-hidden="true"
            />
            <span className="ml-3 flex-auto font-bold text-3xl align-middle truncate">
                <a href="/">Matti Salimi</a>
            </span>
            <p className="font-serif mt-1">
            <a target="_blank" rel="noreferrer" className="text-gray-600 underline" href="mailto:hello@slashmatti.com">Email</a>
            &nbsp;·&nbsp;
            <a target="_blank" rel="noreferrer" className="text-gray-600 underline" href="https://github.com/slashmatti">Github</a>
            &nbsp;·&nbsp; 
            <a target="_blank" rel="noreferrer" className="text-gray-600 underline" href="https://www.linkedin.com/in/slashmatti">LinkedIn</a>
            &nbsp;·&nbsp;
            <a target="_blank" rel="noreferrer" className="text-gray-600 underline" href="https://x.com/slashmatti">Twitter</a>
            </p>
        </div>
    )
}

export default Header;