/**
 * Created by Fraser on 16/04/2016.
 */

var mongodb = require('mongodb');

var http = require('http');

var port = process.env.PORT || 1337;

var url = '  mongodb://fdonnelly:drone101@ds030829.mlab.com:30829/drone';

var MongoClient = mongodb.MongoClient;

http.createServer(function (request, responce) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            responce.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
            db.close();
        }else{
            responce.write('Connection established to' + url + "\n");
            //database work goes here

            db.close()
        }
        responce.end('Finished, connection closed\n');
    })
}).listen(port);