import { Client } from '@elastic/elasticsearch';
import { readFile } from 'fs/promises';

async function init() {
    const client = new Client({
        // l'url de votre serveur elastic
        node: 'https://localhost:9200',
        auth: {
            username: 'elastic',
            password: '2ctzzZXOYSn=+2PkJUET'
        },
        tls: {
            ca: await readFile("http_ca.crt")
        }
    });

    const isRunning = await client.ping();

    console.log(isRunning);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
init();
