const mongoose = require('mongoose');
const URI = 'mongodb+srv://salao:ZUkhbau4HqnhfiTY@clusterdev.1tphl.mongodb.net/barber-control?retryWrites=true&w=majority&appName=ClusterDev';

// Conexión a MongoDB
mongoose
  .connect(URI)
  .then(() => console.log('DB is Up!'))
  .catch((err) => console.error('DB connection error:', err));