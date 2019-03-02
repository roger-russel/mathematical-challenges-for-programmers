package main

import (
	"fmt"
)

var list = [][]string{
	{"a", "b", "c"},
	{"a", "a", "a"},
	{"b", "a", "c"},
	{"d", "e", "a"},
	{"c", "b", "a"},
}

var primes = map[string]int32{
	"a": 2,
	"b": 3,
	"c": 5,
	"d": 7,
	"e": 11,
	"f": 13,
	"g": 17,
	"h": 19,
	"i": 23,
	"j": 29,
	"k": 31,
	"l": 37,
	"m": 41,
	"n": 43,
	"o": 47,
	"p": 53,
	"q": 59,
	"r": 61,
	"s": 67,
	"t": 71,
	"u": 73,
	"v": 79,
	"w": 83,
	"x": 89,
	"y": 97,
	"z": 101,
}

func main() {

	mList := make(map[int32][][]string)

	fmt.Println("Strings:", list)

	for _, line := range list {

		var hash int32
		hash = 1

		for _, key := range line {
			hash = hash * primes[key]
		}

		mList[hash] = append(mList[hash], line)
	}

	fmt.Println("Strings:", mList)
}
