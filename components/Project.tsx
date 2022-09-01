import React from 'react'

interface Props {
    imageUrl: string;
    projectTitle: string;
    projectDescription: string;
}

const Project = ({ projectTitle, projectDescription, imageUrl }: Props) => 
    <div className="relative">
    {/* Black Layer */}
    <div className="bg-black w-96 z-0 relative -right-2 top-2 h-32"></div>

    <div className="border-2 border-slate-900 w-96 z-10 absolute top-0 bg-white">
      <div className="border-b-2 border-slate-900">{imageUrl}</div>

      <div className="pl-2 py-2">
        <h1 className="">{projectTitle}</h1>
        <p className="text-xs">{projectDescription}</p>

        <button className="px-2 py-0.5 mt-4 border-2 border-slate-900 bg-orange-300 text-sm hover:bg-orange-400 duration-200">
          View project
        </button>
      </div>
    </div>
  </div>

export default Project