import React, { useEffect, useState } from 'react';
import {MoonLoader } from 'react-spinners'
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

const Notes = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(
          collection(db, 'projects'),
          orderBy('id', 'desc'),
          limit(4)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          docId: doc.id,
          ...doc.data()
        }));
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false); 
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center sm:ml-[2px] md:ml-[2rem] mr-[2rem] p-2 h-screen w-full border-r-[1px] border-r-[#303030] md:w-[408px]">
        <MoonLoader   color="#e3e3e3" />
      </div>
    );
  }

  return (
    <div className='sm:ml-[2px] md:ml-[2rem] mr-[2rem] p-2 h-screen w-full border-r-[1px] border-r-[#303030] md:w-[408px]'>
      {/* 📌 Pin Section */}
      <div className='mb-8'>
        <h6 className='mb-3 text-xl text-white'>📌 Pin</h6>
        <Link
          to="/about"
          className='bg-[#262626] p-4 rounded-xl h-[94px] w-full block overflow-hidden'>
          <h2 className='text-lg md:text-xl text-white mb-0.5'>👋 About Me;</h2>
          <p className='text-sm md:text-[14px] text-[#989898]'>
            Hi, I’m Anuj Belsare, an Electronics and Computer...
          </p>
        </Link>
      </div>

      {/* 💡 Recent Projects */}
      <h6 className='mb-3 text-xl text-white'>💡 Recent Projects</h6>
      <div className='bg-[#262626] rounded-xl'>
        {projects.map((project, index) => (
          <div key={project.docId} className='relative mb-2'>
            <Link
              to={`/projects/${project.docId}`}
              className='block py-3 px-4 rounded-xl h-[94px] w-full overflow-hidden'>
              <h2 className='text-lg md:text-xl text-white truncate mb-0.5'>{project.projectName}</h2>
              <p className='text-sm md:text-[14px] text-[#989898] truncate'>
                {project.description}
              </p>
            </Link>

            {index < projects.length - 1 && (
              <div className="absolute bottom-0 left-[10%] w-[80%] h-[1px] bg-[#303030] rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      {/* About this portfolio idea */}
      <div className='mb-8 mt-8'>
        <h6 className='mb-3 text-xl text-white'>🤔 Concept & Creation</h6>
        <Link
          to="/about-idea"
          className='bg-[#262626] p-4 rounded-xl h-[94px] w-full block overflow-hidden'>
          <h2 className='text-lg md:text-xl text-white mb-0.5'>🖊️ About this web idea;</h2>
          <p className='text-sm md:text-[14px] text-[#989898]'>
          The design of this portfolio is inspired by...
          </p>
        </Link>
      </div>

    </div>
  );
};

export default Notes;
