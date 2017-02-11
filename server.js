const express = require('express'),
    fs = require('fs'),
    request = require('request'),
    path = require('path'),
    app = express();

const config = JSON.parse(fs.readFileSync('config.json'));

app.use(express.static(__dirname + '/public'));

app.all('/api/*', (req, res) => {

    const url = req.url;

    const redirectedReq = request(config.apiEndpoint + url, (err) => {

        if (err) {

            console.log(err);
            res.status(500).send(err);
        }
    });

    req.pipe(redirectedReq).pipe(res);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, config.indexHtmlPath, 'index.html'));
});


app.listen(config.port, () => {

    console.log('Web server listening on port %d', config.port);
});