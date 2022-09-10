import React from 'react'
import { useRouter } from 'next/router'

interface Props {
    projectTitle: string;
    projectDescription: string;
}

const Project = ({ projectTitle, projectDescription }: Props) => {

  const router = useRouter()
  return (
    <div className="relative">
    {/* Black Layer  */}
    {/* <div className="bg-black w-96 z-0 absolute translate-x-2 translate-y-2 h-32 "></div> */}

    <div className='border-x-2 border-y-2 mb-1 px-2 border-slate-900 w-max max-w-xs bg-white text-sm'>Machine learning</div>
    <div className="border-2 border-slate-900 w-96 z-10 relative top-0 bg-white">
      {/* <div className="border-b-2 border-slate-900">{imageUrl}</div> */}

      <div className="pl-2 py-2 bg-white">
        <h1 className="">{projectTitle}</h1>
        <p className="text-xs">{projectDescription}</p>

        <button className="px-2 py-0.5 mt-4 border-2 border-slate-900 bg-orange-300 text-sm hover:bg-orange-400 duration-200"
          onClick={()=> {
            router.push("/projectId")
          }}>
          View project
        </button>
      </div>
    </div>
  </div>

  )
}
export default Project