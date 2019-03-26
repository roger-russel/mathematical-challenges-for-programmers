package main

import (
	"fmt"
	"math"
)

var numberList = []int8{1, 12, 10, 18, 20, 14, 13, 8, 7, 16, 18, 6, 2, 3, 15, 18, 9, 4, 5, 11, 17, 10, 13}
var duplicated int8

func main() {
	Run()
}

//Run algorithm
func Run() {
	for _, n := range numberList {

		nAbs := int8(math.Abs(float64(n)))

		if numberList[nAbs-1] < 0 {
			duplicated = nAbs
			break
		} else {
			numberList[nAbs-1] *= -1
		}
	}
	fmt.Println(duplicated)
}
