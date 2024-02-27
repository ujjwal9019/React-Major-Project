import conf from "../conf/conf";
 
import { Client, Databases, ID , Storage , Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
   
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost(title , slug , content , featuredImage , status , userId){
        try {
         return await this.databases.createDocument(conf.appwriteDatabaseId , conf.appwriteCollectionId , slug , {title , slug , content , featuredImage , status })

        } catch (error) {
            console.log("Appwrite serve :: CreatePost :: error" , error );
        }
    }

    async updatePost( slug , {title , content , featuredImage , status , userId}){
        try {
         return await this.databases.updateDocument(conf.appwriteDatabaseId , conf.appwriteCollectionId , slug , {title , content , featuredImage , status })

        } catch (error) {
            console.log("Appwrite serve :: UpdatePost :: error" , error );
        }
    }

    async deletePost( slug ){
        try {
         await this.databases.deleteDocument(conf.appwriteDatabaseId , conf.appwriteCollectionId , slug )
         return true

        } 
       
        catch (error) {
            console.log("Appwrite serve :: DeletePost :: error" , error );
            return false
        }
    }

//  if we have to get single post   
    async getPost( slug ){
        try {
       return   await this.databases.getDocument(conf.appwriteDatabaseId , conf.appwriteCollectionId , slug )
         

        } 
       
        catch (error) {
            console.log("Appwrite serve :: getPost :: error" , error );
        
        }
    }

    // quries hum square bracket me denge or get posts sarre doc leke aajaega datase se
    async getPosts(quries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId , conf.appwriteCollectionId , quries , )
            
        } catch (error) {
            console.log("Appwrite serve :: getPosts :: error" , error );
        return false
        }
    }

// file upload services

async uploadFile (file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file 

        )

        
    } catch (error) {
        console.log("Appwrite serve :: fileUpload:: error" , error );
   return false
    }
}

// to delet a file
async deleteFile (fileId){
    try {
        return await this.bucket.deleteFileFile(
            conf.appwriteBucketId,
       
            fileId 

        )
        return true 

        
    } catch (error) {
        console.log("Appwrite serve :: DeleteFile:: error" , error );
   return false
    }
}


getFilepreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId , fileId)
}



}

const service = new Service()  

export default Service