function palindrome(str) {
  var myEdit = str.toLowerCase().replace(/[^0-9a-z]/gi, "");  //dont really need the i in gi, but left it alone
  var myEditRev = myEdit.split("").reverse().join("");
 
  if (myEdit == myEditRev)
    return true;
  
  else
    return false;
}

palindrome("eye");
