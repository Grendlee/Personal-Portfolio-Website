import React from "react";
import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";


const Projects = () => {
  return (
    <div className="border-t border-neutral-800 pb-24 my-14">
      <h1 className="my-20 text-center text-4xl">Projects</h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className=" mb-8 flex flex-wrap sm:flex-nowrap sm:justify-center">
            {/* Project Image */}
            {/* <div className="w-full sm:w-[250px] flex justify-center sm:justify-start">
              <img
                src={project.image}
                alt={project.title}
                className="w-[250px] h-[250px] rounded object-cover"
              />
            </div> */}

<div className="border-t w-full sm:flex-1 max-w-xl lg:w-3/4 px-4 py-2">
  {/* Project Title + GitHub Icon */}
  <div className="flex items-center space-x-2">
    <h6 className="text-2xl">{project.title}</h6>
    
    {/* Clickable GitHub Icon */}
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:brightness-150 transition duration-300"
      >
        <div className="text-3xl ">
            <FaGithub />
        </div>
   
      </a>
    )}
  </div>

  <p className="mb-4 text-neutral-500">{project.description}</p>
              {/* Technologies Used */}
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-blue-100 px-2 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
