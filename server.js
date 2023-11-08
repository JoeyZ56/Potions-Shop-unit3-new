require('dotenv').config();

require('./config/database');

const app = require('./app-server');

const PORT = process.env.PORT || 'https://potions-shop-unit3-new.vercel.app';

app.listen(PORT, () => {
	console.log(`I am listening on ${PORT}. We in the Building`);
});
