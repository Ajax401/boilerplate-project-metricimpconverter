/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    let fullStop = /\.\.|\d\s\d|\d+\.\d+\.\d+/.test(input);
    if(fullStop) return result = 'Invalid Number'
    input = input.replace(/\s+/g,'');
    //console.log(input)
    let regx = input.search(/\d|\d+gal|gal|\d+l|l|\d+mi|mi|\d+km|km|\d+kg|kg|\dlbs|lbs/gi);
    //console.log(regx)
    
    if(regx == 0){
    const unitIndex = input.search(/[a-zA-Z]/) 
    let value = input.substring(0, unitIndex)
    if(value.length == 0) value = '1'
    if(value.split(/\//).length > 2) return result = 'Invalid Number';
    result = eval(value);
    }
    else{
    result = 'Invalid Number';
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    let value = input.search(/[a-zA-Z]/gi);
    let regx = input.substring(value)
    //console.log(value)
    if(!/^gal$|^km$|^lbs$|^l$|^mi$|^kg$/gi.test(regx)){
       result = 'Invalid Unit';
    }else
      {  
      result = regx.toLowerCase();
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case 'gal':
      result = 'l';
      break;
      case 'l':
      result  = 'gal';
      break;
      case 'mi':
      result  = 'km';
      break;
      case 'km':
      result  = 'mi';
      break;
      case 'lbs':
      result  = 'kg';
      break;
      case 'kg':
      result  = 'lbs';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result ;
    switch(unit){
      case 'gal':
      result = 'gallons';
      break;
      case 'l':
      result  = 'liters';
      break;
      case 'mi':
      result  = 'miles';
      break;
      case 'km':
      result  = 'kilometers';
      break;
      case 'lbs':
      result  = 'pounds';
      break;
      case 'kg':
      result  = 'kilograms';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit){
      case 'gal':
      result = initNum * galToL;
      break;
      case 'l':
      result  = initNum/galToL;
      break;
      case 'mi':
      result  = initNum * miToKm;
      break;
      case 'km':
      result  = initNum/miToKm;
      break;
      case 'lbs':
      result  = initNum * lbsToKg;
      break;
      case 'kg':
      result  = initNum/lbsToKg;
    }
    let fullStop = /\.\.|\d\s\d/.test(result);
    if(fullStop) return result = 'Invalid Number'
    console.log(result)
    return Math.floor(result * 100000)/100000;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    let curentVal = this.spellOutUnit(initUnit);
    let returnVal = this.spellOutUnit(returnUnit);
    result = initNum + ' '+ curentVal + ' ' + 'converts' + ' ' + 'to' + ' ' + returnNum + ' '+ returnVal
    return result;
  };
  
}

module.exports = ConvertHandler;
