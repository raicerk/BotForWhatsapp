import { create, Whatsapp } from 'sulla';

create().then(client => start(client));

function start(client: Whatsapp) {
  client.onMessage(message => {
    if (message.body === 'Hola') {
      client.sendText(message.from, 'Hola, soy un bot para whatsapp ! 👋');
    }
  });
}