const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

// Conexión a Redis usando la variable de entorno o el host por defecto
const redisHost = process.env.REDIS_HOST || 'redis';
const client = redis.createClient({
    url: `redis://${redisHost}:6379`
});

client.on('error', (err) => console.error('Redis Client Error', err));

async function start() {
    await client.connect();

    // Permitir peticiones desde el Frontend (CORS)
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    });

    app.get('/api/pulse', async (req, res) => {
        const visits = await client.incr('visits');
        res.json({ 
            status: "online", 
            visits: visits, 
            timestamp: new Date() 
        });
    });

    app.listen(port, () => {
        console.log(`Backend escuchando en http://localhost:${port}`);
    });
}

start();