export interface Subscriber {
    onMessage(msg: string, data: string);
}