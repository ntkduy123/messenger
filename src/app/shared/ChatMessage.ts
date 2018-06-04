export class ChatMessage {
    id: string;
    userId: string;
    text: string;
    avatar: string;

    constructor(id: string, userId: string, text: string, avatar: string) {
        this.id = id;
        this.userId = userId;
        this.text = text;
        this.avatar = avatar;
    }
}