import React from 'react'

const footer = () => {
    return (
        <div>
              <footer className="">
        <nav className="flex justify-between w-11/12 p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline text-white"
              href="https://twitter.com/UncleJAA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jerry Aaron
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white  no-underline"
              href="https://github.com/gfellah45/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
        </div>
    )
}

export default footer
