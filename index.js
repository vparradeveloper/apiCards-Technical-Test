const express = require('express');
const app = express();

app.use(express.json());

const cards = [
    { id: 1, name: 'Asus ROG Strix GeForce RTX 3090', image: 'https://m.media-amazon.com/images/I/91XyrUFYKfL._AC_SL1500_.jpg', manufacturer: 'Asus', model: 'RTX 3090', assembler: 'GeForce', price: '2200€' },
    { id: 2, name: 'AMD Radeon RX 6900 XT', image: 'https://www.profesionalreview.com/wp-content/uploads/2020/12/AMD-Radeon-RX-6900-XT-Review40.jpg', manufacturer: 'AMD', model: 'RX 6900 XT', assembler: 'Radeon', price: '2099€' },
    { id: 3, name: 'Voodoo 3DFX Banshee', image: 'https://www.profesionalreview.com/wp-content/uploads/2019/10/VoodooBanshee-1024x752.jpg', manufacturer: 'Voodoo', model: 'CT6750', assembler: 'Diamond', price: '3600 ptas' }
];

app.get('/', (req, res) => {
    res.send('Graphics Cards Api');
});

app.get('/api/cards', (req, res) => {
    res.send(cards);
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Listening on port ${port}...`));