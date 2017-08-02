(function(global){

  //creating a new Object & initializes its variables.
  //User uses this by doing: "var d = dylan('kek', 'wot', 'es');" for example.
  var sortMe = function(array){
    return new sortMe.init(array);
  }

  //These variables can be used by by all functions, but cant be altered.
  var merge = function(left, right){
      var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
      while(l < lLen && r < rLen){
        if(left[l] < right[r]){
          result.push(left[l++]);
        }
        else{
       result.push(right[r++]);
        }
      }
      //remaining part needs to be addred to the result
      return result.concat(left.slice(l)).concat(right.slice(r));
  };

  var sortMerge = function(arr){
    var len = arr.length;
    if (len <2) {
      return arr;
    }
      var mid = Math.floor(len/2),
      left = arr.slice(0,mid),
      right =arr.slice(mid);
      //send left and right to the mergeSort to broke it down into pieces
      //then merge those
      return merge(sortMerge(left),sortMerge(right));
    };

    var sortNumber = function(a,b) {
      return a - b;
    };



  //All methods the user can access!
  //Theese methods have acces to all the variables in the IIFE
  sortMe.prototype = {

    validate: function() {
      //Checks if array exists
      if (!this.array) {
        throw 'No array passed';
        }
      //Checks if array only has numbers
      for (var i = 0; i < this.array.length; i++) {
        if (array[i].isNumeric == false) {
          throw "array does not contain numbers";
        }
      }
      return this;
    },

    sortSort: function() {
      var arr = this.array;
      arr.sort(sortNumber);
      return arr;
    },

    bubbleSort: function() {
      var arr = this.array;
      var len = arr.length;
      //shrink the reviewable spots in the array, because after the first iteration
      //the last digit is always the largest.
      for (var i = len-1; i>=0; i--) {
        //do this for this for every reviewable spot in the array (i);
        for (var j = 1; j<=i; j++) {
          //if the first of the 2 adjacent values is bigger than the second
          if (arr[j-1]>arr[j]) {
            //switch array position of 2 adjacent values.
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            }
          }
        }
      //return the sorted Array
      return arr;
    },

    selectionSort: function(){
      var arr = this.array;
      var minIdx, temp,
      len = arr.length;
      for(var i = 0; i < len; i++){
        minIdx = i;
        for(var  j = i+1; j<len; j++){
          if(arr[j]<arr[minIdx]){
          minIdx = j;
          }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
      }
      return arr;
    },

    //This function uses the sortmerge and merge method declared above.
    mergeSort: function(){
      var arr = this.array;
      return sortMerge(arr);
      }

  };

  //Initializing the Object
  //"this" or "self" refers to the new Object that is created at "var sortMe".
  //It refers to the sortMe Object.
  sortMe.init = function(array) {
    var self = this;
    self.array = array || [];
  }

  //Lets you access all Methods of sortMe on the sortMe.init.prototype
  sortMe.init.prototype = sortMe.prototype;

  //Acces all sorting Methods with sortMe or sMe
  global.sortMe = global.sMe = sortMe;

}(window));
