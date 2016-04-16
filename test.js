/**
 * Created by Fraser on 16/04/2016.
 */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;

//url to connect to database
var url = 'mongodb://fdonnelly:drone101@ds030829.mlab.com:30829/drone';

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Connecting \n');
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        response.write('Connection Made \n');
        if (err) {
            response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
        } else {
            //HURRAY!! We are connected. :)
            response.write('Test connection established!' + "\n");

            // do some work here with the database.

            //Close connection
            db.close();
        }
        response.end('Finished, Connection closed \n');
    });

}).listen(port);