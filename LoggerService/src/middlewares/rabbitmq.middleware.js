import amqp from 'amqplib';
import 'dotenv/config';

export default async function consumeFromQueue(queueName, callback) {
    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await connection.createChannel();
        await channel.assertQueue(queueName, { durable: true });
        await channel.consume(
            queueName,
            async (msg) => {
                if (msg !== null) {
                    const messageContent = msg.content.toString();
                    await callback(messageContent);
                    channel.ack(msg);
                }
            },
            { noAck: false }
        );
    } catch (error) {
        console.error('Error consuming message from queue:', error);
    }
}