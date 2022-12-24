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