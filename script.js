/*Creating instance*/
var cryptofunction = new JSEncrypt();

var ciphertext;
var originaltext;

/*Generating public and private key*/
var pubickey = cryptofunction.getPublicKey();
var pvtkey = cryptofunction.getPrivateKey();

/*Setting public and private key*/
cryptofunction.setPublicKey(pubickey);
cryptofunction.setPrivateKey(pvtkey);

/*function to perform encryption*/
function performEncryption(event) {
  event.preventDefault();
  var tempval = document.getElementById("inputtext").value;
  ciphertext = cryptofunction.encrypt(tempval);
  document.getElementById("encrptedtext").innerHTML = ciphertext;
}

/*function to perform decryption*/
function performDecryption(event) {
  event.preventDefault();
  originaltext = cryptofunction.decrypt(ciphertext);
  document.getElementById("decryptedtext").innerHTML = originaltext;
}
