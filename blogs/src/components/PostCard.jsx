import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage , content}) {
   
  return (
    <Link to={`/post/${$id}`}>



<div class="w-[300px] rounded-md border">
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='h-[200px] w-full rounded-t-md object-cover' />

           
<div class="p-4">
    <h1 class="inline-flex items-center text-lg font-semibold">
    {title} &nbsp;
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </h1>

    <p class="mt-3 text-sm text-gray-600">
    <div dangerouslySetInnerHTML={{ __html: content }} />
    </p>

   
    <button
    id='blogs-button'
      type="button"
      class="mt-4 w-full rounded-sm  px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Read
    </button>



    </div>





        </div>




    </Link>
  )
}


export default PostCard