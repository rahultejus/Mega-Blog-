import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account=new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
              console.log("Creating account with:", { email, password, name });
             const userAccount=await this.account.create(ID.unique(),email,password,name);
             console.log("Account created:", userAccount);
             if (userAccount) {
               // call another method
               await this.login({email,password})
            //    return await this.getCurrentUser()
            const currentUser = await this.getCurrentUser();
            console.log("Fetched current user after signup:", currentUser);
            return currentUser;
               

             } else {
                // return userAccount
                console.error("Account creation failed.");
               return null;
             }
        } catch (error) {
            console.error("Error during account creation:", error);
            throw error;
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)

        } catch (error) {
            console.log("error is:",error)
            throw error;
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error)
            // throw error
            return null
        }
        return null
    }

    async logout(){
        try {
            await this.account.deleteSessions()
            return true;
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error)
        }
    }
}

const authService=new AuthService();

export default authService