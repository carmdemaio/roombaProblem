# roombaProblem
A program that navigates a imaginary robotic hoover (much like a Roomba) through an equally imaginary room 

## Directions

Insall Node 12, and then run roomba.js in Node on the command line on your computer. For example input: 
```
node ./roomba.js
```

Roomba.js will automatically consume the input.txt file located in the same directory, and will execute the input based on the criteria given in the challenge's readme file:

* the first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)
* the second line holds the hoover position
* subsequent lines contain the zero or more positions of patches of dirt (one per line)
* the next line then always contains the driving instructions (at least one)

Example:

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```
