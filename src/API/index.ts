import {db} from 'firebase_configs/firebaseConfig';
import {ref, get, set } from 'firebase/database';
import { v4 as uuid } from 'uuid';
import { IPost , IPostRequestParams , ISearchResult , IUser } from '../interfaces';


class UserAPI {
    userId: string;

    constructor(userId: string) {
        this.userId = userId;

    }

    async getName() {
        const name = await get(ref(db, `${this.userId}/name`));
        return name.val();
    }

    async getLastName() {
        const lastName = await get(ref(db, `${this.userId}/lastName`));
        return lastName.val();
    }

    async getEmail() {
        const email = await get(ref(db, `${this.userId}/email`));
        return email.val();
    }

    async getAvatar() {
        const avatarUrl = await get(ref(db, `${this.userId}/avatar`));
        return avatarUrl.val();
    }

    async getFollowers() {
        const followers = await get(ref(db, `${this.userId}/followers`));
        return followers.val();
    }

    async getFollows() {
        const follows = await get(ref(db, `${this.userId}/follows`));
        return follows.val() as string[];
    }

    async getAllPrimitiveData() {
        const name:string = await this.getName();
        const lastName:string = await this.getLastName();
        const email:string = await this.getEmail();
        const avatarUrl:string = await this.getAvatar();
        const followers = await this.getFollowers();
        const follows = await this.getFollows();
        return {
            name,
            lastName,
            email,
            avatarUrl,
            followers,
            follows
        };
    }
    async getPosts() {
        const posts = await get(ref(db, `${this.userId}/posts`));
        if(posts.val()){
            const data = Object.values(posts.val()) as IPost[];

            return data.sort((a,b)=>b.postTime-a.postTime);
        }
        return posts.val();
    }
    async getPost(postId: string) {
        const post = await get(ref(db, `${this.userId}/posts/${postId}`));
        return post.val();
    }
    async getPostComments(postId: string) {
        const comments = await get(ref(db, `${this.userId}/posts/${postId}/comments`));
        return comments.val();
    }
    async getPostLikes(postId: string) {
        const likes = await get(ref(db, `${this.userId}/posts/${postId}/likes`));
        return likes.val();
    }
    async getStories() {
        const stories = await get(ref(db, `${this.userId}/stories`));
        return stories.val();
    }
    async getStory(storyId: string) {
        const story = await get(ref(db, `${this.userId}/stories/${storyId}`));
        return story.val();
    }
    async followUser(id: string) {

        const follows = await this.getFollows();
        const followers = await get(ref(db, `${id}/followers`));

        if (followers.val() === null) {
            await set(ref(db, id + '/followers'), [this.userId]);
        } else if (!followers.val().includes(this.userId)) {
            await set(ref(db, id + '/followers'), [...followers.val(), this.userId]);
        } else {
            await set(ref(db, id + '/followers'), followers.val().filter((follower: string) => follower !== this.userId));
        }

        if(follows === null) {
            await set(ref(db, this.userId+'/follows'), [id]);
        }
        else if(!follows.includes(id)) {
            await set(ref(db, this.userId+'/follows'), [...follows, id]);
        }
        else{
            await set(ref(db, this.userId+'/follows'), follows.filter((follow: string) => follow !== id));
        }

    }

    async isFollowed(id: string) {
        const follows = await this.getFollows();
        return follows.includes(id);
    }
    async addPost(image:string,description:string){
        const id = uuid();
        await set(ref(db, this.userId+`/posts/${id}`),{
            id:id,
            authorId:this.userId,
            postTime:Date.now(),
            imageURL:image,
            description:description,
        } );
    }

    async searchUsers(name:string) {
        const users = await get(ref(db, '/'));
        const data = Object.values(users.val()) as IUser[];

         const filteredData = data.map(user=>{
             return {
                 name:user.name,
                 lastName:user.lastName,
                 id:user.id,
                 avatarURL:user.avatarURL,
             } as ISearchResult;
         });
        return filteredData.filter(user=>(user.name +' '+ user.lastName).toUpperCase().includes(name.toUpperCase()) );
    }

    async likePost(authorId:string,postId:string){
        const likes = await get(ref(db, `${authorId}/posts/${postId}/likes`));
        const array = (likes.val()  || []) as string[];

             if(array.includes(this.userId)){
                 await set(ref(db, `${authorId}/posts/${postId}/likes`),[...array.filter(id=>id!==this.userId)]);
             }
             else {
                await set(ref(db, `${authorId}/posts/${postId}/likes`),[...array,this.userId]);
             }


    }

    async getFollowPosts(params:IPostRequestParams){
        const data= [] as IPost[];
        const follows = await this.getFollows();
        if(follows?.length){
            for(const user of follows){
                const tempAPI = new UserAPI(user);
                const tempPOSTS = await  tempAPI.getPosts();
               if (tempPOSTS){
                   data.push(...tempPOSTS);
               }
            }
            return {
                total:data.length || -1,
                posts:data.sort((a,b)=>b.postTime-a.postTime).filter((item,index)=>index>=params.start && index<params.start+params.limit),
            };
        }
        else return {
            total:-1,
            posts:[],
        };

    }


}
export {UserAPI};



