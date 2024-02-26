const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL)
    ,
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID)
     ,   
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_URL_DATABASE_ID)
      ,  
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_URL_COLLECTION_ID)
    ,
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_URL_BUCKET_ID),
}

export default conf