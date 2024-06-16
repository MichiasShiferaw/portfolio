import { motion, useTransform, useScroll } from "framer-motion";
import React, { useState, useRef } from "react";
import ProjectModals from "./ProjectModals";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};



const ProjectGallery = ({projects}) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="">
      <section ref={targetRef} className="relative h-[300vh] ">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden swiper-slide-custom ${project.className} hover:brightness-50`}
                onClick={() => handleOpen(project)}
              >
                <div className="flex flex-col justify-start">
                  <div className="absolute p-7">
                    <h2 className="text-4xl font-semibold text-start mb-2">
                      {project.name}
                    </h2>

                    <motion.ul
                      className="projectcontainer text-gray-300 text-base text-start ml-4"
                      variants={container}
                      initial="hidden"
                      animate="visible"
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.li
                          key={techIndex}
                          className={` inline-block py-1 px-3 w-auto h-auto justify-center items-center ${project.techClassName} rounded-xl px-4`}
                          variants={item}
                        >
                          {tech}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
                <img src={project.image} className="mt-20" alt="Slide 2" />
              </div>
            ))}
          </motion.div>
        </div>
        {selectedProject && (
          <ProjectModals
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            modalTitle={selectedProject.name}
            handleClose={handleClose}
          >
            <div className="space-y-4">
              <p>{selectedProject.description}</p>
              <motion.ul
                className="projectcontainer text-gray-800 text-base text-start ml-4"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {selectedProject.technologies.map((tech, techIndex) => (
                  <motion.li
                    key={techIndex}
                    className={`item ${selectedProject.techClassName} rounded-xl px-4`}
                    variants={item}
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </ProjectModals>
        )}
      </section>
      {/* <ProjectModals /> */}
    </div>
  );
};


export default ProjectGallery;

