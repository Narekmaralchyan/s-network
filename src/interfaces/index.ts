export interface IState<T> {
    status: 'idle' | 'loading' | 'fail' | 'success';
    data: T | null
}

export interface IStories<T> {
    status: 'idle' | 'loading' | 'fail' | 'success';
    data: T | null
}
export interface IStory {
    storyURL: string;
    storyTime?: number;
    storyShowTime: number;
    storyAutherURL?: string;
    storyId?: string;
    storyAuthorName?: string;
    name?: string;
    authorId: string
}

export interface IUser {
    name: string;
    lastName: string;
    email: string;
    id: string;
    followers: string[];
    follows: string[];
    stories: IStory[];
    avatarURL: string;
}

export interface IReactStory {
    url: string
}