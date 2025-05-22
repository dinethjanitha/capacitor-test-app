import React from 'react'
import LiveStream from './LiveStream';
import NavBarMain from '@/app/Components/NavBarMain';

interface Props{
    params : Promise<{
        id : string
    }>
}

const page = async ({params} : Props) => {
    const id = (await params).id;
  return (
    <div>
        <NavBarMain/>
        <LiveStream id={id}/>
    </div>
  )
}

export default page