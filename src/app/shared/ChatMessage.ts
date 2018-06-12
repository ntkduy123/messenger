export class ChatMessage {
    id: string;
    content: string;
    avatar: string;
    type: string;
    sender: string;

    constructor(id: string, content: string, avatar: string, type: string, sender: string) {
        this.id = id;
        this.content = content;
        this.type = type;
        this.avatar = avatar;
        this.sender = sender;
    }
}
