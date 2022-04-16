# Javascript Basic Commands

- console.log('Hello World!'); -> Log the message between single (or double) quotes in console
- var variableName = value; -> Declaring a variable
  In Javascript you don't need to declare the type of a variable. In this case the type will be automatically defined as 'undefined'
- //line comment
- /\*multi-line/block
  comment\*/
- alert() -> Creates a pop-up window with the message contained between the parenthesis
- prompt() -> Asks for an input from the user that can be stored in a variable
- typeof -> returns the type of the variable/data described on it

## Primitive Javascript Data Types

### number

Floating point numbers, for decimal and integers

### string

Sequence of characters, used for text

### boolean

Logical data type that can only be true or false

### undefined

Data Type of a variable that does not have a value yet

### null

Also means 'non-existent'

## Type coercion

Is the process of converting value from one type to another (such as string to number, object to boolean, and so on).

## Variable mutation

When you mutate a variable you are modifying the original value.

## Boolean Logic (NOT, AND & OR)

&& -> AND
|| -> OR
! -> NOT

## if and else statements

if (condition1) {
// block of code to be executed if condition1 is true
} else if (condition2) {
// block of code to be executed if the condition1 is false and condition2 is true
} else {
// block of code to be executed if the condition1 is false and condition2 is false
}

## The Ternary Operator and Switch Statements

condition ? block of code to be executed if condition is true : block of code to be executed if the condition1 is false;

switch(expression) {
case x:
// code block
break;
case y:
// code block
break;
default:
// code block
}

**_This is how it works:_**

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.

## Truthy and Falsy values and equality operators

Falsy values: undefined, null, 0, '', NaN
Truthy values: NOT falsy values

## The Equality Operator

== -> This operator does the type coercion.
=== -> This is a strict operator and it needs to be compared with variables of the same type.

!= -> Different operator that does type coercion
!== -> Diffenrent strict operator

## Loops and Iteration

for (statement 1; statement 2; statement 3) {
// code block to be executed
}

**_Statement 1 is executed (one time) before the execution of the code block._**
**_Statement 2 defines the condition for executing the code block._**
**_Statement 3 is executed (every time) after the code block has been executed._**

while (condition) {
// code block to be executed
}

do {
// code block to be executed
}
while (condition);

### Break and Continue

The break statement "jumps out" of a loop.
The continue statement "jumps over" one iteration in the loop.

## Functions

function myFunction(p1, p2) {
return p1 \* p2; // The function returns the product of p1 and p2
}

## Objects

var person = {
firstName: 'John',
surName: 'Smith',
birthYear: 1983
};

### Methods

var person = {
firstName: "John",
lastName : "Doe",
id : 5566,
fullName : function() {
return this.firstName + " " + this.lastName;
}
};

In a function definition, this refers to the "owner" of the function.
In the example above, this is the person object that "owns" the fullName function.
In other words, this.firstName means the firstName property of this object.

**_Acessing Object Methods_**
objectName.methodName()
