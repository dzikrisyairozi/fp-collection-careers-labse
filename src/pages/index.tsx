import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import  db  from '../lib/firebaseConfig';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

type FormValues = {
  teamName: string;
  frontendRepoLink: string;
  backendRepoLink: string;
  deploymentLink: string;
  apiDocumentation: string;
};

export default function Home() {
  const router = useRouter();
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const docRef = await addDoc(collection(db, 'FP Collections'), data);
      // console.log('Document written with ID: ', docRef.id);
      toast.success('Makasih yaa dah ngumpulin')
      setFormSuccess(true);
      router.push({
        pathname: '/success-page',
        query: data,
      });
    } catch (e:any) {
      toast.error('Error adding document: ', e)
      // console.error('Error adding document: ', e);
    }
  };
  return (
    <>
      <Head>
        <title>FP Collection</title>
        <meta name="description" content="FP Collection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <div className='flex  flex-col min-h-screen justify-center items-center'>
          <div className='flex glassmorphism rounded-xl p-10 shadow-lg transition duration-500 hover:shadow-2xl mt-5'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center w-full gap-2'>
              <p className='text-gray-800 font-bold text-2xl'>
                Form Pengumpulan FP Oprec RPL 2023
              </p>
              <div className='flex flex-col mt-2'>
                <label className='text-gray-700 font-semibold' htmlFor="teamName">Nama Kelompok</label>
                <input className='w-[256px] sm:w-[512px] p-2  bg-white rounded' placeholder='Nama Kelompok' {...register('teamName', { required: true })} />
                {errors.teamName && <span className='text-red-500 text-xs'>Diisi ya adik adik...</span>}
              </div>
              <div className='flex flex-col'>
                <label className='text-gray-700 font-semibold' htmlFor="frontendRepoLink">Frontend Repo Link</label>
                <input className='w-[256px] sm:w-[512px] p-2  bg-white rounded' placeholder='https://github.com/xxx/xxx' {...register('frontendRepoLink', { required: true })} />
                {errors.frontendRepoLink && <span className='text-red-500 text-xs'>Diisi ya adik adik...</span>}
              </div>
              <div className='flex flex-col'>
                <label className='text-gray-700 font-semibold' htmlFor="backendRepoLink">Backend Repo Link</label>
                <input className='w-[256px] sm:w-[512px] p-2  bg-white rounded' placeholder='https://github.com/xxx/xxx' {...register('backendRepoLink', { required: true })} />
                {errors.backendRepoLink && <span className='text-red-500 text-xs'>Diisi ya adik adik...</span>}
              </div>
              <div className='flex flex-col'>
                <label className='text-gray-700 font-semibold' htmlFor="deploymentLink">Deployment Link</label>
                <input className='w-[256px] sm:w-[512px] p-2  bg-white rounded' placeholder='https://example.com' {...register('deploymentLink', { required: true })} />
                {errors.deploymentLink && <span className='text-red-500 text-xs'>Diisi ya adik adik...</span>}
              </div>
              <div className='flex flex-col'>
                <label className='text-gray-700 font-semibold' htmlFor="apiDocumentation">API Documentation</label>
                <input className='w-[256px] sm:w-[512px] p-2  bg-white rounded' placeholder='https://documenter.getpostman.com/view/xxx/xxx' {...register('apiDocumentation', { required: true })} />
                {errors.apiDocumentation && <span className='text-red-500 text-xs'>Diisi ya adik adik...</span>}
              </div>
              <button className='bg-cyan-700 p-2 rounded-full px-5 mt-6 text-white font-semibold shadow-lg active:scale-95' type="submit">Dikumpulakeun</button>
              {/* {formSuccess && <p>Form submitted successfully!</p>} */}
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
