package main

import (
	"fmt"
	"os"
	"strconv"
)

func generateArray() []int {
	return []int{1, 3, 4, 64, 323, 12, 34, 11, 4, 5, 6, 7, 8, 9, 123, -1, 20}
}

func main() {
	n, _ := strconv.Atoi(os.Args[1])
	arr := generateArray()

	result := FindWithMap(n, arr)
	fmt.Println(result)
}

// FindWithMap is O(n)
func FindWithMap(n int, arr []int) string {
	desirebles := make(map[int]int)

	if n == 0 {
		return fmt.Sprintf("n * 0 = 0")
	}

	for _, value := range arr {

		pair, remainder := n/value, n%value

		if remainder != 0 {
			continue
		}

		if v, ok := desirebles[value]; ok {
			return fmt.Sprintf("%v * %v = %v", value, v, n)
		}

		desirebles[pair] = value

	}

	return ""
}
