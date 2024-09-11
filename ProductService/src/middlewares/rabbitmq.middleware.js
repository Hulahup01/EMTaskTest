import amqp from 'amqplib';
import 'dotenv/config';

export default async function sendToQueue(queueName, action, data) {
    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await connection.createChannel();

        await channel.assertQueue(queueName, {
            durable: true,
        });
        const message = JSON.stringify({action: action, data: data});
        channel.sendToQueue(queueName, Buffer.from(message), {
            persistent: true,
        });
        setTimeout(() => {
            channel.close();
            connection.close();
        }, 500);
    } catch (error) {
        console.error('Error sending message from queue:', error);
    }
}
