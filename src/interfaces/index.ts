export interface IState<T> {
    status: 'idle' | 'loading' | 'fail' | 'success';
    data: T | null
}