
// 1. Write a js program to convert lowercase string to uppercase.
// var str= "hello world ";
// var res= str.toUpperCase();
// console.log("",res); 

// 2.Write a js program to convert uppercase string to lowercase.
// var str= "HELLO WORLD ";
// var res= str.toLowerCase();
// console.log("",res);

//3. Java program to toggle each character in a string

// class GFG
// {
 
// static void toggleChars(char str[])
// {
//     for (int i=0; i<str.length; i++)
//     {
//         if (str[i]>='A' && str[i]<='Z')
//             str[i] = (char) (str[i] + 'a' - 'A');
//         else if (str[i]>='a' && str[i]<='z')
//             str[i] = (char) (str[i] + 'A' - 'a');
//     }
// }

//4.Write a js program to find total number of alphabets, digits or special character in a string.

// public class CountAlpDigiSpl1 {
// 	private static Scanner sc;
// 	public static void main(String[] args) {
// 		String aldisp_str;
// 		int i, alph, digi, spl;
// 		alph = digi = spl = 0;
// 		char ch;
		
// 		sc= new Scanner(System.in);
// 		System.out.print("\nPlease Enter Alpha Numeric Special String =  ");
// 		aldisp_str = sc.nextLine();
		
// 		for(i = 0; i < aldisp_str.length(); i++)
// 		{
// 			ch = aldisp_str.charAt(i);
// 			if(ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' ) {
// 				alph++;
// 			}
// 			else if(ch >= '0' && ch <= '9') {
// 				digi++;
// 			}
// 			else {
// 				spl++;
// 			}
// 		}		
// 		System.out.println("\nNumber of Alphabet Characters  =  " + alph);
// 		System.out.println("Number of Digit Characters     =  " + digi);
// 		System.out.println("Number of Special Characters   =  " + spl);
// 	}
// }




// 5.Write a js program to count total number of vowels and consonants in a string.

// public class CountVowelConsonant {  
//     public static void main(String[] args) {  
          
//         //Counter variable to store the count of vowels and consonant  
//         int vCount = 0, cCount = 0;  
          
//         //Declare a string  
//         String str = "This is a really simple sentence";  
          
//         //Converting entire string to lower case to reduce the comparisons  
//         str = str.toLowerCase();  
          
//         for(int i = 0; i < str.length(); i++) {  
//             //Checks whether a character is a vowel  
//             if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {  
//                 //Increments the vowel counter  
//                 vCount++;  
//             }  
//             //Checks whether a character is a consonant  
//             else if(str.charAt(i) >= 'a' && str.charAt(i)<='z') {    
//                 //Increments the consonant counter  
//                 cCount++;  
//             }  
//         }  
//         System.out.println("Number of vowels: " + vCount);  
//         System.out.println("Number of consonants: " + cCount);  
//     }  
// }   

// 6.Write a js program to count total number of words in a string.
// function countWords(str) {
//     str = str.replace(/(^\s*)|(\s*$)/gi,"");
//     str = str.replace(/[ ]{2,}/gi," ");
//     str = str.replace(/\n /,"\n");
//     return str.split(' ').length;
//     }
//  console.log(countWords("   Tutorix is one of the best E-learning   platforms"));

// 7.Write a JavaScript program to list the properties of a JavaScript object
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };
//     Sample Output: name,sclass,rollno
// solution:-
// var student =  { 
//     name : "David Rayy", 
//     sclass : "VI", 
//     rollno : 12  };
//   console.log("",student.name);
//    console.log("",student.sclass);
//    console.log("",student.rollno);
        
//  8.Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// solution:-
// var student =  { 
//     name : "David Rayy", 
//     sclass : "VI", 
//     rollno : 12  };
//   console.log(student);
//   delete student.rollno;
//   console.log(student);

//9.Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Solution:-

// Object.objsize = function(Myobj) {
//     var osize = 0, key;
//     for (key in Myobj) {
//         if (Myobj.hasOwnProperty(key)) osize++;
//     }
//     return osize;
// };

// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };
// var objsize = Object.objsize(student);
// console.log('Size of the current object : '+objsize);

// 10.Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.  
// var library = [
// {     author: 'Bill Gates',
//       title: 'The Road Ahead',
//              readingStatus: true
//             },

//    {author: 'Steve Jobs',
//    title: 'Walter Isaacson',
//           readingStatus: true

//    },

//    {    author: 'Suzanne Collins',
//       title:  'Mockingjay: The Final Book of The Hunger Games',
//       readingStatus: false

//    }];
// Solution:-

// var library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }];

// for (var i = 0; i < library.length; i++) 
//    {
//     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//       console.log("Already read " + book);
//     } else
//     {
//      console.log("You still need to read " + book);
//     }
//    }

//11. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.  
// Volume of a cylinder : V = πr2h

// function Cylinder(cyl_height, cyl_diameter) {
//     this.cyl_height = cyl_height;
//     this.cyl_diameter = cyl_diameter;
//   }
  
//   Cylinder.prototype.Volume = function () {
//     var radius = this.cyl_diameter / 2;
//     return this.cyl_height * Math.PI * radius * radius;
//   };
  
//   var cyl = new Cylinder(7, 4);
//   // Volume of the cylinder with four decimal places.
//   console.log('volume =', cyl.Volume().toFixed(4));

// 12.Write a js program to print all odd number between 1 to 100.

// for(var i=1;i<=100;i++)
// if(i%2!=0)
// console.log("",i); 

// 13. Write a js program to find sum of all natural numbers between 1 to n
// const number = parseInt(prompt('Enter a positive integer: '));

// let sum = 0;
// for (let i = 1; i <= number; i++) {
//     sum += i;
// }

// console.log('The sum of natural numbers:', sum);

//14. Write a js program to find sum of all even numbers between 1 to n.
// var sum=0;
// const number = parseInt(prompt('Enter a number: '));
// for(var i=1;i<=number;i++)
// if(i%2==0)
// sum += i;
// console.log("",sum); 



// 15. Write a js program to find sum of all odd numbers between 1 to n.
// var sum=0;
// const number = parseInt(prompt('Enter a number: '));
// for(var i=1;i<=number;i++)
// if(i%2!=0)
// sum += i;
// console.log("",sum); 

// 16.Write a js program to print multiplication table of any number
// var tab ,c;
// tab=prompt("Enter number for table");
// for(c=1;c<=10;c++)
// console.log("",tab,"*",c,"=",tab*c);

// 17.Write a js program to count number of digits in a number.

// function digits_count(n) {
//     var count = 0;
//     if (n >= 1) ++count;
  
//     while (n / 10 >= 1) {
//       n /= 10;
//       ++count;
//     }
  
//     return count;
//   }
  
//   console.log(digits_count(12112));
  
//   console.log(digits_count(457));

// 18.  where r is the radius and h is the height of the cylinder.

// 19.Write a js program to find maximum between two numbers.
// var max;
// var a=prompt("Enter first number");
// var b=prompt("Enter second number");
// max=a;
// if (b>max) {
//     max=b;
//     console.log("The maximum number is",max);
// }

// 20.Write a js program to find maximum between three numbers.

// var max;
// var a=prompt("Enter first number");
// var b=prompt("Enter second number");
// var c=prompt("Enter third number");
// max=a;
// if (b>max) {
//     max=b;

// if (c>max) 
//     max=c;
//     console.log("The maximum number is",max);
// }

// 21.Write a js program to check whether a number is negative, positive or zero.

// var n=prompt("Enter a number");
// if (n>0) {
//     console.log("the number is postive");
// } else if(n<0)
//     console.log("The number is negtive");

// else{
// console.log("The number is zero");
// }
//22. Write a js program to check whether a number is divisible by 5 and 11 or not.
// var n=prompt("Enter a number");
// if (n%5==0) {
//     console.log("the number is divisible by 5 ");
// } else if(n%11==0)
//     console.log("The number is divisible by 11");

// else{
// console.log("The number is not divisible by 5 and 11");
// }

// 23.Write a js program to check whether a number is even or odd.

// var n=prompt("Enter an number");
// if (n%2==0) {
//     console.log(n,"is even");
// } else {
//     console.log(n,"is odd");
// }
// 24. Write a js program to check whether a year is leap year or not.

// var y=prompt("Enter a year");
// if (y%4==0) {
//     console.log(y,"is a leap year");
// } else {
//     console.log(y,"is not a leap year");
// }

//25. Write a js program to check whether a character is alphabet or not.

// var ch=prompt("Enter any charater")
// if (ch>='A'&&ch<='Z') {
//     console.log("The character",ch,"is a Capital letter.");
// } else if (ch>='a'&&ch<='z') {
//     console.log("The character",ch,"is a Small cass letter.");
// } else {
//     console.log("The character",ch,"is not alphabet."); 
// } 

// 26.Write a js program to input any alphabet and check whether it is vowel or consonant.

// var ch=prompt("Enter any character:")
// if (ch=='A'||ch=='a'||ch=='E'||ch=='e'||ch=='I'||ch=='i'||ch=='O'||ch=='o'||ch=='U'||ch=='u') {
//     console.log("You enter a Vowel ",ch);
// } else {
//     console.log("You enter a consonent");
// }
// 27.Write a js program to input any character and check whether it is alphabet, digit or special

// var ch=prompt("Enter any charater")
// if (ch>='A'&&ch<='Z') {
//     console.log("The character",ch,"is a Capital letter.");
// } else if (ch>='a'&&ch<='z') {
//     console.log("The character",ch,"is a Small cass letter.");
// } else if (ch>='0'&&ch<='9'){
//     console.log("The character",ch,"is a digit."); 
// } else {
//     console.log("The character",ch,"is a Symbol."); 
// } 

//28. Write a js program to find cube of any number using function.
// function cube(n){
//     var res;
//     res=n*n*n;
//     return res;
// }
// var get_num;
// get_num=prompt("Enter a number to find")
// console.log(cube(get_num));

//29. Write a js program to find diameter 2r, circumference 2pir and area pir*2 of circle using functions.

// function diameter(){
// var PI=3.14;
//     var radius=prompt("Enter radius for diameter of circle")
//     var diameter=2*radius;
//     return diameter;

// }

// console.log("Diameter of circle",diameter());

// function circumference(){
//     var PI=3.14;
//     var radius=prompt("Enter radius for diameter of circle")
//     var circumference=2*PI*radius;
//     return circumference;
// }
// console.log("Circumference of circle",circumference());

// function area(){
//     var PI=3.14;
//     var radius=prompt("Enter radius for diameter of circle")

//     var area=PI*radius*radius;
//     return area;

// }
// console.log("Area of circle",area());

//30. Write a js p
// 31.Write a js program to check whether a number is even or odd using functions
// function to_find_ev_od(n){
  
// if (n%2==0) {
//     console.log(n,"is even");
// } else {
//     console.log(n,"is odd");
// }
// }
// var n=prompt("Enter an number");
// to_find_ev_od(n)

// 32.Write a js program to check whether a number is prime, Armstrong or perfect number using functions.
// ?????????????????not solve.......

// function cb(num){

// var choice=prompt("Enter 1 for prime , 2 for Armstrong , 3 for perfect number");
// var c=parseInt(choice)
// switch(c){
//     case 1:
//     var c,p=1;
//     for(c=2;c<=num/2;c++)
//     if(num%c==0)
//     {
//         p=0;
//         break;
//     }
//     if(p==1)
//     console.log(num,"is a prim number");
// break;
// case 2:
//     var origNum, rem,res=0;
//     origNum=num;
//     while(origNum!=0){
//         rem=origNum%10;
//         res+=rem*rem*rem;
//         origNum/=10;
//     }
//     if(res==num)
//     console.log(num,"is Armstrongn number");
//     break;
//     case 3:
//         var sum=0;
//         for(var i=1;i<num;i++)
//         {
//             if(num%i==0)
//             sum=sum+i;

//         }
//         if(sum==num)
//         console.log(num,"is a perfect number");
//         break;
// default:
//     console.log("plz enter valid number");
// }
// }
// var b=prompt("Enter a number:");
// var c=parseInt(b)
// cb(c)

// 33.Write a js program to find maximum between two numbers using conditional operator.
// var max;
// var a=prompt("Enter first number");
// var b=prompt("Enter second number");
// max=a>b?(a>c?a:c)
//     console.log("The maximum number is",max);

// 34.Write a js program to find maximum between three numbers using conditional operator.
// var max;
// var a=prompt("Enter first number");
// var b=prompt("Enter second number");
// var c=prompt("Enter third number");
// max=a>b?(a>c?a:c):(b>c?b:c)
//     console.log("The maximum number is",max);
// 35. Write a js program to check whether a number is even or odd using conditional operator.

// var n ;
// n=prompt("Enter a number");
// (n%2==0?console.log("Even"):console.log("Odd"));

//36. Write a js program to check whether year is leap year or not using conditional operator.

// var y=prompt("Enter a year");
// (y%4==0? console.log(y,"is a leap year"):console.log(y,"is not a leap year")) 

// 37.Write a js program to check whether character is an alphabet or not using conditional operator.

// var ch=prompt("Enter any charater");
// (ch>='A'&&ch<='Z')||(ch>='a'&&ch<='z')? 
//     console.log("The character",ch,"is a alphabet."):
//    console.log("The character",ch,"is a not alphabet.");

//38. Write a js program to print day of week name using switch case.

// var n=prompt("Enter number of a weekday");
// var c=parseInt(n)
// switch (c) {
//   case 1:
//     console.log("Friday");
//      break;
//      case 2:
//     console.log("Saturday");
//      break;
//      case 3:
//     console.log("Sunday");
//      break;
//      case 4:
//     console.log("Monday");
//      break;
//      case 5:
//     console.log("Tuesday");
//      break;
//      case 6:
//     console.log("Wednesday");
//      break;
//      case 7:
//     console.log("Thursday");
//      break;
//     default:
//         console.log("Invalid Input");
        
// }

//39. Write a js program print total number of days in a month using switch case.
// var m=prompt("Enter The Month");
// var c=parseInt(m)
// switch(c){
// case 1:
//     console.log("31 days");
//     break;
//     case 1:
//     console.log("31 days");
//     break;
//     case 2:
//     console.log("28 or 29 days");
//     break;
//     case 3:
//     console.log("31 days");
//     break;
//     case 4:
//     console.log("30 days");
//     break;
//     case 5:
//     console.log("31 days");
//     break;
//     case 6:
//     console.log("30 days");
//     break;
//     case 7:
//     console.log("31 days");
//     break;
//     case 8:
//     console.log("31 days");
//     break;
//     case 9:
//     console.log("30 days");
//     break;
//     case 10:
//     console.log("31 days");
//     break;
//     case 11:
//     console.log("30 days");
//     break;
//     case 12:
//     console.log("31 days");
//     break;
// default:
//     console.log("Invalid Input");
    
// } 

//40. Write a js program to check whether an alphabet is vowel or consonant using switch case

// var ch=prompt("Enter any character:")
// switch(ch){
//     case 'A':
//     console.log("You Enter Vowel:");
//     break;
//     case 'a':
//     console.log("You Enter Vowel:");
//     break;
//     case 'E':
//     console.log("You Enter Vowel:");
//     break;
//     case 'e':
//     console.log("You Enter Vowel:");
//     break;
//     case 'I':
//     console.log("You Enter Vowel:");
//     break;
//     case 'i':
//     console.log("You Enter Vowel:");
//     break;
//     case 'O':
//     console.log("You Enter Vowel:");
//     break;
//     case 'o':
//     console.log("You Enter Vowel:");
//     break;
//     case 'U':
//     console.log("You Enter Vowel:");
//     break;case 'u':
//     console.log("You Enter Vowel:");
//     break;
//     default:
//         console.log("You Enter consinent");
// }

//41. Write a js program to find maximum between two numbers using switch case.
// ...................not working


// var a=prompt("Enter the 1st number");
// var b=prompt("Enter the 2nd number");
// var c=parseInt(a);
// var d=parseInt(b);
// switch(c>d){
//     case 1:
//         console.log("Maximum number is",c);
//         break;
//         case 0:
//             console.log("Maximum number is",d);  
//             break;
//             default:
//                 console.log("Invalid input");
// }

// 42.Write a js program to check whether a number is even or odd using switch case.

// var a=prompt("Enter the number");
// var c=parseInt(a);
// switch(c%2){
//     case 0:
//         console.log("even");
//         break;
//         case 1:
//             console.log("odd");  
// }

// 43. Write a js program to check whether a number is positive, negative or zero using switch case
// .........................not working.....
// var a=prompt("Enter the number");
// // var c=parseInt(a);
// switch(a>0){
//     case 1:
//         console.log("postive");
//         break;
//         case 0:
//        switch(a<0){
//     case 1:
//         console.log("negtive");
//         break;
//         case 0:
//             console.log("zero");  
//             break;
// }
// break; 
// }

//44. Write a js program to find roots of a quadratic equation using switch case.


// let root1, root2;

// take input from the user
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// calculate discriminant
// let discriminant = b * b - 4 * a * c;

// condition for real and different roots
// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // condition for real and equal roots
// else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);

    // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// if roots are not real
// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
//     console.log(
//     `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//   );
// }


//45.  Write a js program to create Simple Calculator using switch case.

// let result;

// take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }

// 46.Write a js program to count total number of negative elements in an array.


    // var arr=[100]; //Declaring size of an array as 100
    // var i, num, count=0;

    // //Reads size and elements of array
    //  num = prompt('Enter the size of arry: ');

    // for(i=0; i<num; i++)
    // {
        
    // arr[i]=prompt("Enter elements in array : ");
    // }

    // //Counts total number of negative elements
    // for(i=0; i<num; i++)
    // {
    //     if(arr[i]<0)
    //     {
    //         count++; //couting negative elements
    //     }
    // }
    // console.log("Total number of negative elements = ", count);

    // 47.Write a js program to copy all elements from an array to another array.
//     var first =  [1, 2, 3];
// var second = [4, 5];
 
// Array.prototype.push.apply(first, second);
// console.log(first);

// 48. Write a js program to insert an element in an array


// function insertElement() {
//     let array = [1, 2, 3, 4, 5];

//     // index to add to
//     let index = 3;

//     // element that you want to add
//     let element = 8;
  
//     array.splice(index, 0, element);
//     console.log(array);
// }

// insertElement();


// 49. Write a js program to delete an element from an array at specified position.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    
//     for( var i = 0; i < arr.length; i++){ 
    
//         if ( arr[i] === 5) { 
    
//             arr.splice(i, 1); 
//             console.log(arr);
//         }
    
//     }

// 50.Write a js program to count frequency of each element in an array.

// const arr = [2,5,7,8,5,3,5,7,8,5,3,4,2,4,2,1,6,8,6];
// const getFrequency = (array) => {
//    const map = {};
//    array.forEach(item => {
//       if(map[item]){
//          map[item]++;
//       }else{
//          map[item] = 1;
//       }
//    });
//    return map;
// };
// console.log(getFrequency(arr));
// rogram to find maximum and minimum between two numbers using functions.

// function max(a,b){
//     var max;
//        max=a;
//     if (b>max) {
//         max=b;
//     return max;
//     }
// }
// var a=prompt("Enter first number");
// var b=prompt("Enter second number");
// console.log("maximum number is:",max(a,b));
