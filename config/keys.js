
//keys.js  figure out which keys to use

if(process.env.NODE_ENV ==='production'){

    module.exports = require('./prod');
}else{
    module.exports = require('./dev');

}

