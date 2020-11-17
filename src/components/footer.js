import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="">
        <nav className="flex justify-between w-11/12 p-4 mx-auto text-sm md:p-8">
          <div className="flex">
            <p className="text-white mx-0 text-xs lg:text-lg lg:mx-2">
              Created by me{` `}
              <a
                className="font-bold no-underline text-white"
                href="https://twitter.com/UncleJAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/gfellah45/image/upload/v1605093936/kisspng-emoji-black-peace-symbols-v-sign-dark-skin-5af88fd20d7a52.0270984915262391860552_v1fkmt.png"
                  alt="thumb"
                  className="w-4 h-4 inline"
                />
              </a>
            </p>
            <p className="text-white text-xs lg:text-lg lg:mx-2">
              Designed by{` `}
              <a
                className="font-bold no-underline text-white text-xs lg:text-lg"
                href="https://twitter.com/timothyogundipe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tim
              </a>
            </p>
          </div>

          <p>
            <a
              className="font-bold text-white text-xs lg:text-lg  no-underline"
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
  );
};

export default footer;
