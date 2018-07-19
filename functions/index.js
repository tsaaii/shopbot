const functions = require('firebase-functions');
exports.webhook = functions.https.onRequest((request, response) => {
    switch (request.body.result.action) {

        case 'db':{
            var apples = db.collection('apple');
            var allNames = apples.get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        console.log(doc.id, '=>', doc.data());
              });
             
            })
            .catch(err => {
              console.log('Error getting products', err);
            });
            response.send({
                speech:{$allNames}
            });   
        }
        break;
    }
    });
