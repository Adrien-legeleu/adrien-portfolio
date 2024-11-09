import React from "react";
import DrawerDemo from "./DrawerModal";
import { projectsData } from "@/data/projects-data";

export default function Project() {
  return (
    <div className="space-y-16 pb-20 max-w-[1400px] mx-auto">
      <h2 className="text-4xl font-bold md:text-left text-center">
        Mes Projets
      </h2>
      <ul className="grid xl:grid-cols-3 md:grid-cols-2  items-center justify-center w-full gap-20">
        {projectsData.map((project, idx) => {
          return (
            <li
              key={`project numéro ${idx}`}
              className="w-full items-center justify-center flex "
            >
              <DrawerDemo project={project} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
