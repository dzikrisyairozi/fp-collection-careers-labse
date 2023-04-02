import React from 'react';
import { GiSharpSmile } from 'react-icons/gi';
import { BiArrowBack } from 'react-icons/bi';
import { RiUserSmileFill } from 'react-icons/ri';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SuccessPage = () => {
  const router = useRouter();
  const { teamName, frontendRepoLink, backendRepoLink, deploymentLink, apiDocumentation } = router.query;

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-6 sm:px-6 lg:px-8">
          <div className="glassmorphism marker:bg-white p-5 rounded-xl shadow-lg transition duration-500 hover:shadow-xl">
            <div className="flex justify-between text-white">
              <Link href="/">
                <BiArrowBack />
              </Link>
              <RiUserSmileFill />
            </div>
            <div className="flex flex-col mt-5 text-white">
              <p>Selamat menikmati sisa waktu sebelum demo yaa...</p>
            </div>
            <div className="text-white">
              <p>
                Goodluck kelompok <span className="font-bold">{teamName}</span>
              </p>
              <div className="flex justify-center items-center mt-4">
                <GiSharpSmile className="text-6xl" />
              </div>
            </div>
            <div className="flex flex-col mt-5 text-white">
              {/* <p className='font-semibold'>
                Team Name: <br/> 
                <span className="font-[400]">
                  {teamName}
                </span>
              </p> */}
              <p className="font-semibold text-gray-300">
                Frontend Repo Link: <br />
                <span className="font-[400] text-white">{frontendRepoLink}</span>
              </p>
              <p className="font-semibold text-gray-300">
                Backend Repo Link: <br />
                <span className="font-[400] text-white">{backendRepoLink}</span>
              </p>
              <p className="font-semibold text-gray-300">
                Deployment Link: <br />
                <span className="font-[400] text-white">{deploymentLink}</span>
              </p>
              <p className="font-semibold text-gray-300">
                API Documentation: <br />
                <span className="font-[400] text-white">{apiDocumentation}</span>
              </p>
            </div>
            <p className="text-xs text-gray-100">
              *Pastikan link yang kamu kumpulin udah bener dan dapat diakses secara public
            </p>
            <div className="mt-5 ">
              <p className="font-semibold text-red-200">Data Tidak Sesuai? </p>
              <button className="bg-cyan-700 p-2 rounded-full px-5 text-white font-semibold shadow-lg active:scale-95 mt-1">
                <Link href="/">Submit Ulang</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
