package main

import "fmt"

var numberList = []int8{1, 12, 10, 19, 20, 14, 13, 8, 7, 16, 18, 6, 2, 3, 15, 18, 9, 4, 5, 11, 17, 10, 13}
var duplicated int8

func main() {
	Run()
}

//Run algorithm
func Run() {

	numberIndexed := map[int8]bool{}

	for _, n := range numberList {
		if _, isset := numberIndexed[n]; isset {
			duplicated = n
			break
		} else {
			numberIndexed[n] = true
		}
	}

	fmt.Println(duplicated)

}
