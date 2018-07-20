const functions = require('firebase-functions');
var admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

var firestore = admin.firestore();


exports.webhook = functions.https.onRequest((request, response) => {
    switch (request.body.result.action) {

        case 'joe':{

            firestore.collection('zehrs_db').add(request.body.fulfillment.speech)
                .then((querySnapshot)=> {
                    response.send({
                        speech: 
                        '${request.body.fulfillment.speech} is added to the db'
              });
             return[response]
            })
            .catch((e => {
              console.log('Error getting products', e);
              response.send({
                speech:'${allNames}'
            });
            
            }))  
            break;
        }
    }
});
