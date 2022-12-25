export interface IState<T> {
    status: 'idle' | 'loading' | 'fail' | 'success';
    data: T | null
}
export interface IComment{
    commentId:string;
    time:number;
    authorId:string;
    message:string;
}

export interface IPost{
    authorId:string;
    description:string;
    id:string;
    imageURL:string;
    postTime:number;
    likes?:string[];
    comments?:IComment[];

}
export interface IStory{
    authorId:string;
    id:string;
    imgURL:string;
    storyTime:number;
}
export  interface IUser {
    name:string;
    lastName:string;
    id:string;
    email:string;
    follows?:string[];
    followers?:string[];
    avatarURL?:string;
    posts?:{
        id:IPost;
    };
    stories?:{
        id:IStory
    };

}

export interface ISearchResult{
    name:string;
    lastName:string;
    id:string;
    avatarURL:string | undefined;
}
export interface IPostRequestParams {
    start:number,
    limit:number,
}