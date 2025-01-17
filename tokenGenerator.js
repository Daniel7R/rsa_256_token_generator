const fs = require("fs");
const jwt = require("jsonwebtoken");
// Certificates path
let privatekeyPath, publickeyPath;

const os = require("os");

if(os.type()=== 'Linux'){
   privatekeyPath = process.env.LINUX_PRIVATE_KEY_PATH;
   publickeyPath = process.env.LINUX_PUBLIC_KEY_PATH;
}else{
   privatekeyPath= process.env.WINDOWS_PRIVATE_KEY_PATH;
   publickeyPath= process.env.WINDOWS_PUBLIC_KEY_PATH;
}
// Load keys
let privatekey, publicKey;
try{
  privateKey = fs.readFileSync(privatekeyPath, "utf8");
  publicKey = fs.readFileSync(publickeyPath, "utf8");
} catch(err){
   console.error(`Error reading the keys: ${err.message}`);
   process.exit(1);
}
//Get vars from node process
const args = process.argv.slice(2);
//paralel lists
const ambientes = ["dev", "qa", "sb"];
const app_id = args

var iat =new Date() / 1000;
var exp = iat + 80000;

for (let i = 0; i < ambientes.length; i++) {
   // Payload data
   var jwtPayload = {
     iss: "PRODUCTORCONSUMIDOR",
     sum: app_id[i],
     aud: "APIGateway_LAN",
     exp: exp,
     iat: iat,
   };
   const signOptions = {
     algorithm: "RS256"
    };
   // Generate the token
   const token = jwt.sign(jwtPayload, privateKey, signOptions);
   try { 
     const decoded = jwt.verify(token, publicKey, signOptions); 
     console.log("JWT "+ambientes[i] +": \n", token);
   } catch (err) {
     console.error("Invalid token for " + ambientes[i] + ": " + err.message +"check certificates");
   }
}
