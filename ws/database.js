const mongoose = require('mongoose');
const URI = 'mongodb+srv://salao:ZUkhbau4HqnhfiTY@clusterdev.1tphl.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDev'; 

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URI)
    .then (() => console.log('DB is Up!'))
    .catch(() => console.log(err));