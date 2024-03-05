import React from 'react'
import { useState , useEffect } from 'react'
import { Container , PostCard } from '../components'
import appwriteService from '../appwrite/config'
function AllPosts() {
    const [posts , setPost] = useState([])
    useEffect( () => {} , [])
    appwriteService.getPosts([]).then((post) => {
        if(posts){
            setPost(posts.documents)
        }
    })
    return (
        // aab hum post ko loop laga ke get krlenge
        <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
    )
}

export default AllPosts
