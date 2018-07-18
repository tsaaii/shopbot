const functions = require('firebase-functions');
exports.webhook = functions.https.onRequest((request, response) => {

    switch (request.result.action) {
        case 'joe':
        response.send({
            speech:
                `Hi Nanna `
        });
        console.log(request.result.body.action);
            break;
        default:
            response.send({
            speech:
                `some bad thing `
            });


    }
    });