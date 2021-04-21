
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

//30. Write a js program to find maximum and minimum between two numbers using functions.

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
