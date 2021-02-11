function binDec(num){
    var convert = document.getElementById("selectCon").value;
    
 if(convert == "decBin"){

  var index = 0;
  var temp = Math.floor(num);

  while(temp>0){
    temp = Math.floor(temp/2);
    index++;
  }
  if(num %1 != 0){
    num = Math.round(num*Math.pow(2,8));
  }
var p,arr = [];
var i = 0;
while(num>0){
    p = num%2;
    num = Math.floor(num/2);
    arr[i] = p;
    i++;
}

 var text = "", i;
for (i = arr.length -1 ; i >=0 ; i--) {
  if(i == arr.length - index-1){
    text += ".";
  }
  text +=  arr[i] ;
}
document.getElementById("result").innerHTML = text;
return 0;
}

if(convert == "decOct"){

  var index = 0;
  var temp = Math.floor(num);

  while(temp>0){
    temp = Math.floor(temp/8);
    index++;
  }
  if(num %1 != 0){
    num = Math.round(num*Math.pow(8,8));
  }
var p,arr = [];
var i = 0;
while(num>0){
    p = num%8;
    num = Math.floor(num/8);
    arr[i] = p;
    i++;
}

 var text = "", i;
for (i = arr.length -1 ; i >=0 ; i--) {
  if(i == arr.length - index-1){
    text += ".";
  }
  text +=  arr[i] ;
}
document.getElementById("result").innerHTML = text;
return 0;
}

if(convert == "decHex"){

var p,arr = [];


var index = 0;
  var temp = Math.floor(num);

  while(temp>0){
    temp = Math.floor(temp/16);
    index++;
  }
  if(num %1 != 0){
    num = Math.round(num*Math.pow(16,8));
  }
var p,arr = [];
var i = 0;
while(num>0){
    p = num%16;
    var arrHex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    num = Math.floor(num/16);
    arr[i] = arrHex[p];
    i++;
}

 var text = "", i;
for (i = arr.length -1 ; i >=0 ; i--) {
  if(i == arr.length - index-1){
    text += ".";
  }
  text +=  arr[i] ;
}
document.getElementById("result").innerHTML = text;
return 0;
}


if(convert == "binDec"){
  var numArr = num.split("");
  var index = num.indexOf(".");
  if(index>-1){
    numArr.splice(index,1);
  }else{
    index = numArr.length;
  }
  decNo = 0;
  for(var i=0;i<numArr.length;i++){
      if(numArr[i]>1){
        decNo = "Not binary No";
        break;
      }
      decNo += numArr[i]*Math.pow(2,index-1);
      index--;
  }
  document.getElementById("result").innerHTML = decNo;
 }



 if(convert == "octDec"){
  var numArr = num.split("");
  var index = num.indexOf(".");
  if(index>-1){
    numArr.splice(index,1);
  }else{
    index = numArr.length;
  }
  decNo = 0;
  for(var i=0;i<numArr.length;i++){
      if(numArr[i]<0 || numArr[i]>7){
        decNo = "Not octal No";
        break;
      }
      decNo += numArr[i]*Math.pow(8,index-1);
      index--;
  }
  document.getElementById("result").innerHTML = decNo;
 }


 if(convert == "hexDec"){

    var decNo = 0;
    var numArr = num.split("");
    var index = num.indexOf(".");
    if(index>-1){
    numArr.splice(index,1);
    }else{
    index = numArr.length;
    }

    hexArr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    
    for(var j = 0;j<numArr.length;j++){
       for(var k = 0;k<16;k++){
        if(numArr[j] == hexArr[k]){
                decNo += k*Math.pow(16,index-1);
                break;
      }
    }
    index--;
   }
  document.getElementById("result").innerHTML = decNo;
 }



 if(convert == "octBin"){
   
  var octBin = [[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]];
 
    var numArr = num.split("");
    var octal = "";

for (let i = 0; i < numArr.length; i++) {
  if(numArr[i]<0 || numArr[i]>7){
    octal = "Not octal No";
    break;
  }
  if(numArr[i] == "."){
    octal += ".";
    continue;
  }
  for (let j = 0; j < 3; j++) {
     octal += octBin[numArr[i]][j];
}
}
  document.getElementById("result").innerHTML = octal;
 }

 if(convert == "hexBin"){
   
   var hexBin = [[0,0,0,0],[0,0,0,1],[0,0,1,0],[0,0,1,1],[0,1,0,0],[0,1,0,1],[0,1,1,0],[0,1,1,1],[1,0,0,0],[1,0,0,1],[1,0,1,0],[1,0,1,1],[1,1,0,0],[1,1,0,1],[1,1,1,0],[1,1,1,1]];
    
    var numArr = num.split("");
    hexArr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    var binary = "";
    for(var j = 0;j<numArr.length;j++){
      if(numArr[j] == "."){
        binary += ".";
        continue;
      }
      var ckhex = "notHex";
    for(var k = 0;k<16;k++){
        if(numArr[j] == hexArr[k]){
          ckhex = "hexa";
            for(var i = 0;i<4;i++){
                binary += hexBin[k][i];
               }
               break;
        }
    }
    if(ckhex == "notHex"){
      binary = "Not Hex No";
    }
   }
       
   document.getElementById("result").innerHTML = binary;
 
  }
 
 }
