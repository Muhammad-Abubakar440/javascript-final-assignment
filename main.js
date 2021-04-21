
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
