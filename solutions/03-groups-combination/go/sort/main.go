package main

import (
	"fmt"
	"sort"
	"strings"
)

var list = [][]string{
	{"a", "b", "c"},
	{"a", "a", "a"},
	{"b", "a", "c"},
	{"d", "e", "a"},
	{"c", "b", "a"},
}

func main() {

	mList := make(map[string][][]string)

	fmt.Println("Strings:", list)

	for _, line := range list {

		sLine := make([]string, len(line))

		copy(sLine, line)
		sort.Strings(sLine)

		hash := strings.Join(sLine, " ") // its avoid colision if it have a character between the keys
		mList[hash] = append(mList[hash], line)
	}

	fmt.Println("Strings:", mList)
}
