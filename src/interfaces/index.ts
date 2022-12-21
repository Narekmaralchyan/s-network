export interface IState<T> {
    status: 'idle' | 'loading' | 'fail';
    data: T | null
}