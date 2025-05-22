'use client';


// If using Next.js App Router, use `useParams`
import { useParams } from 'next/navigation';
// If using Next.js Pages Router, use `useRouter`
// import { useRouter } from 'next/router';

 // Adjust path if needed
import NavBarMain from '@/app/Components/NavBarMain'; // Adjust path if needed
import LiveStream from './LiveStream';


const Page = () => {

  const params = useParams<{ id: string }>();
  const id = params.id;


  if (!id) {
    return (
      <div>
        <NavBarMain />
        <p className="text-center mt-8 text-xl text-gray-600">Loading stream ID...</p>
      </div>
    );
  }

  return (
    <div>
      <NavBarMain />
      <LiveStream id={id} />
    </div>
  );
};

export default Page;