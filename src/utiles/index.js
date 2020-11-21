// import client from './config';

const client = require ('./config');

 if (client){
    console.log("DB connected successfully");
 }
else{
    console.log("DB not connected ");
}
