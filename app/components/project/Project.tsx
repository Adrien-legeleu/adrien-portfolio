import React from "react";
import DrawerDemo from "./DrawerModal";
import { projectsData } from "@/data/projects-data";

export default function Project() {
  return (
    <div className="space-y-16 pb-20">
      <h2 className="text-4xl font-bold">Mes Projets</h2>
      <ul className="grid grid-cols-3 items-center justify-center w-full gap-20">
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
