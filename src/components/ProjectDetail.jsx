import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {MoonLoader } from 'react-spinners'
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';


const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, 'projects', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProject(docSnap.data());
        } else {
          console.error('No such project!');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching project:', err);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

    if (loading) {
      return (
        <div className="w-full h-screen flex items-center justify-center">
          <MoonLoader   color="#e3e3e3"/>
        </div>
      );
    }

    if (!project) {
      return <div className='flex justify-between items-center h-screen'>
        <h1 className='text-red-500 text-xl sm:text-2xl md:text-3xl mb-6'>Project Not Found!</h1>
        <a 
          className='block md:hidden bg-yellow-500 hover:bg-yellow-400 transition px-4 py-1.5 mb-6 text-black font-medium rounded-full' 
          href="/"
        >
          Home
        </a>     
      </div>
    }

  return (
    <div className="p-4 w-full">
      <div className='flex justify-between items-center'>
        <h1 className='text-white text-xl sm:text-2xl md:text-3xl mb-6'>{project.projectName }</h1>
        <a 
          className='block md:hidden bg-yellow-500 hover:bg-yellow-400 transition px-4 py-1.5 mb-6 text-black font-medium rounded-full' 
          href="/"
        >
          Home
        </a>     
      </div>
      
      <p className="text-[#c6c6c6] text-sm sm:text-base md:text-[17px] text-balance mb-8">{project.description}</p>


{/* Tech stack section */}
      <div className="skills mb-2">
        <h6 className='mt-6 text-lg font-medium text-[#ffff]'>⚙️ Tech Stack:</h6>
        <div className="skills_para">
          <p className='text-[#c6c6c6] text-sm sm:text-base'>-Backend: {project.backTech }</p>
          <p className='text-[#c6c6c6] text-sm sm:text-base'>-Frontend: {project.frontTech}</p>
          <p className='text-[#c6c6c6] text-sm sm:text-base'>-Database: {project.database}</p>
        </div>
      </div>

{/* feature section */}
      <div className="edu mb-8">
        <h6 className='mt-8 text-lg font-medium text-[#ffff] mb-2'>🚀 Features:</h6>
        <div className="skills_para ">
          {project.features.split('\n').map((feature, idx) => (
            <p key={idx} className='text-[#c6c6c6] text-sm sm:text-base'>{feature.trim()}</p>
          ))}
        </div>
      </div>

{/* image of project */}
    
      <div className="w-[97%] h-auto grid grid-cols-1 gap-6 mt-6">
        {project.Image?.map((imgUrl, index) => (
          <img
          key={index}
          src={imgUrl}
          alt={`Project screenshot ${index + 1}`}
          className="rounded-[8px] border border-[#303030] shadow-md"
        />
        ))}
      </div>
    

{/* github link */}
      <div className='mt-6 mb-6'>
        <p className="mt-6 text-sm sm:text-base text-white">
          🔗<span className="font-medium">GitHub link:</span>{'  '}
            <a
              href={project.gitHubLink}
              className="text-[#3c86f5] text-sm underline italic break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.gitHubLink}
            </a>
        </p>     
      </div>

    </div>
  );
};

export default ProjectDetail;
