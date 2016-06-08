var multichain = require("multichain-node")({
    port: 6792,
    host: 'localhost',
    user: 'usr',
    pass: 'pss'
})

multichain.getInfo((err, info) => {
    if(err){
        throw err;
    }
    console.log(info);
})
