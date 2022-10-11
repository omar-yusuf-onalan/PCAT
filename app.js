const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    const photo = {
        photoId: 1,
        name: 'Photo Name',
        description: 'Photo Description',
    };
    res.send(photo);
});

app.listen(port, () => {
    console.log(`Server initialized in port ${port}...`);
});
