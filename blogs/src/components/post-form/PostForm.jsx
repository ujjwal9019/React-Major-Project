import React  from 'react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import{ Button , Input , Select  , RTE }  from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
function PostForm({post}) {
    const {register , handleSubmit , watch , setValue , control , getValues , } = useForm({
        defaultValues : {
            title : post?.title || '',
            slug :  post?.slug || '',
            content :  post?.content || '',
            status :  post?.status || 'active',

        }

    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)
    // do case hai agar post ki value hai ton update kroo nhi hai toh  new value pass kroo

const submit = async(data) =>{
    // agar data hai to vo post me jaega 
    if(post){
        // mtlb pehle se hai aab hum update krenge 
        //  data useForm hook se aata ye autometic form me jo image aaegi usse utha lege
        const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;


    //    update hogae aab hum delekrenge 
    if(file) { 
        // humne purani image delete krdi 
        appwriteService.deleteFile(post.featuredImage)

    }
    const dbPost = await appwriteService.updatePost(post.$id , {...data ,
         featuredImage: file ? file.$id : undefined ,
        })

if(dbPost){
    navigate(`/post/${dbPost.$id}`)
}

    }
// iss case me kuch nhi hai form ke andeer to new values jaengi datatabse me
    else {
const file = await  appwriteService.uploadFile(data.image[0])

if(file)
{
    const fileId = file.$id
    data.featuredImage = fileId
  const dbPost =  await appwriteService.createPost({
    ...data ,
     userId : userData.$id,
    
    })

    if(dbPost){
        navigate(`/post/${dbPost.$id}`)

    }

}    }

}

const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
}, []);

// usage of slug  in react very important interview question

React.useEffect(() => {
    const subscription = watch((value, { name }) => {
        if (name === "title") {
            // When the "title" field changes, it calls slugTransform on the new title value and sets the resulting slug as the value of the "slug" field using setValue.
            setValue("slug", slugTransform(value.title), { shouldValidate: true });
        }
    });

    // how to optimize use effect

    // The useEffect includes a cleanup function that unsubscribes from the subscription. This is important to prevent memory leaks when the component unmounts or when the dependencies change.
    return () => subscription.unsubscribe();
}, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm
