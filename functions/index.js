const functions = require('firebase-functions');
exports.webhook = functions.https.onRequest((request, response) => {
    switch (request.body.result.action) {
        case 'joe':
        response.send({
            speech:
                `Hi Nanna `
        });
        break;
        default:
            response.send({
            speech:
                `some bad thing `
            });
    }
    });
