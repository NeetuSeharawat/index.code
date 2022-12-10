    var obj = {

	   		 num:2,

		   }

		  var addToThis = function(a){

	     	 return this.num + a;

	   	  }
 	 	  console.log(addToThis.call(obj,3))

    var obj = {

		    num:2,

		   }

		var addToThis = function(a,b,c){

	      return this.num + a +b +c;

	 	  }

		   arr=[2,4,6];

		  console.log(addToThis.apply(obj,arr))
		var obj = {

		    num:2,

	    }

	   var addToThis = function(a,b,c){

	      return this.num + a +b +c;

	   }

	   var bound = addToThis.bind(obj)

	   console.log(bound(1,2,3))

	  const student = {

	        age:20,

		    displayAge: function () {

		            console.log(this.age)

		    }

	   }

 	   let display = student.displayAge.bind(student)

	   display()

		function multiply(a,b){

		    return a * b

		}

		 var multiplyByTwo =  multiply.bind(this,2);

		 console.log(multiplyByTwo(3));