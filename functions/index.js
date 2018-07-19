const functions = require('firebase-functions');
exports.webhook = functions.https.onRequest((request, response) => {
    switch (request.body.result.action) {
        case 'joe':
        response.send({
            speech:
                `Hi Nanna `
        });
        break;
        case 'bujji':
        response.send({
            speech:
                `apakshampak kirirkiri `
        });
        break;
        default:
            response.send({
            speech:
                `edo thappu jariginde `
            });
    }
    });
