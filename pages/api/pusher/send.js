import { pusher } from "../../../lib/pusher";

export default async function handler(req, res) {

    const { user = null, message = '', timestamp = +new Date } = req.body;
    const sentimentScore = sentiment.analyze(message).score;
    const chat = { user, message, timestamp, sentiment:sentimentScore };

    chatHistory.messages.push(chat);
    pusher.trigger('chat-room', 'new-message', { chat })


}