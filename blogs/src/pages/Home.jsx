import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>

                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-xl text-center">
   
    <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
     FEATURES
    </h2>
   
  </div>
  <div class="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
    <div>
      <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
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
          class="h-9 w-9 text-gray-700"
        >
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      </div>
      <h3 class="mt-8 text-lg font-semibold text-black">Dynamic Blogs</h3>
      <p class="mt-4 text-sm text-gray-600">
        
A dynamic blog website dynamically retrieves and displays blog content from the backend, ensuring real-time updates. This enhances user experience, providing fresh and relevant articles consistently.
      </p>
    </div>
    <div>
      <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
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
          class="h-9 w-9 text-gray-700"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      </div>
      <h3 class="mt-8 text-lg font-semibold text-black">
        Fast &amp; Easy to Load
      </h3>
      <p class="mt-4 text-sm text-gray-600">
       
A single-page application powered by React and Appwrite, our dynamic blog website efficiently retrieves and displays backend blog data, offering seamless, interactive user experiences with cutting-edge technologies.
      </p>
    </div>
    <div>
      <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
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
          class="h-9 w-9 text-gray-700"
        >
          <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </div>
      <h3 class="mt-8 text-lg font-semibold text-black">
      KEY FEATURES
      </h3>
      <p class="mt-4 text-sm text-gray-600">
      
Empower users with our dynamic blog website's features. Easily write, read, edit, and delete personal blogs through an intuitive interface, fostering an engaging and personalized blogging experience
      </p>
    </div>
    <div>
      <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
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
          class="h-9 w-9 text-gray-700"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      </div>
      <h3 class="mt-8 text-lg font-semibold text-black">FUNCTIONALITY</h3>
      <p class="mt-4 text-sm text-gray-600">
     
Our project encompasses robust features such as authentication, dynamically generated URLs through clean slugs, and a real-time editor. Experience seamless functionality, secure access, and efficient content management with clean and reliable code.
      </p>
    </div>
  </div>
</div>



            </Container>
        </div>
    )
}

export default Home