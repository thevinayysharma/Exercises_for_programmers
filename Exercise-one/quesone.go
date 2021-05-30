// Q1] Create a program that prompts for your name and prints a greeting using your name?

package main

import "fmt" 

func main() {

	fmt.Println("enter your name: ")
	
	var first string
	fmt.Scanln(&first)
	
	fmt.Println("Enter your second name: ")
	
	var second string
	fmt.Scanln(&second)
	
	fmt.Print("Hi" + first + " " + second + " welcome to Go prog language")
}	
	//Rune literals are just 32-bit integer values (however they're untyped constants, so their type can change). They represent unicode codepoints. For example, the rune literal 'a' is actually the number 97.
    //declaring variable in Go => var var_name data_type