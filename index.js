require('dotenv').config();

const server = require('./routes/api/server.js');

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`\n** api on port ${PORT} **\n`));
