// Roomba challenge for Tray.io
// Readme located at: 
// https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5
// Carm DeMaio 5/22/2020
// Using Node.js 12, might not work in v10 or v14
// Tested on Widows 10 and OSX 15


//import node.js system packages
const fs = require('fs');
const path = require('path');

//Read input from input.txt in same folder as application.
const data = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 
	{encoding:'utf8', flag:'r'});
   

//will split input regardless if on Windows/Linux/Mac.
const inputLine = data.split(/[\r\n]+/); 

let [roomX, roomY] = inputLine[0].split(" ");

//Assuring that roomX and roomY are not parsed as strings.
roomX = Number(roomX);
roomY = Number(roomY);


let [roombaX, roombaY] = inputLine[1].split(" ");

//Assuring that roombaX and roombaY are not parsed as strings.
roombaX = Number(roombaX);
roombaY = Number(roombaY);

const dirtLocation = {};
let drivingInstructions = "";

//Build an array of dirt locations. 
//Using less then operator in loop as to not count Roomba directions
//in final array position.
for(let i = 2;i<inputLine.length;i++)
	{
		//Will always return true if first character is a number. isNaN "Is not a number", case sensitive function!!
		if (!isNaN(inputLine[i].charAt(0))) {
			//Creating a sparse matrix for lighter memory use. 
			const [dirtX, dirtY] = inputLine[i].split(" ");
			dirtLocation[`${dirtX},${dirtY}`] = true;
		} else {drivingInstructions += inputLine[i];}
	}

let dirtCounter	= 0;

//Check to see if Roomba starts on a pile of dirt before moving. 
 if(dirtLocation[`${roombaX},${roombaY}`])
  	{
  		dirtLocation[`${roombaX},${roombaY}`] = false; //removes picked up dirt pile
  		dirtCounter = dirtCounter + 1;
  	}

//Go through each charater for driving instructions and move the roomba if able.
//Also collision detection for walls. Roomba stays in place if it can't move. 
for (let i = 0;i < drivingInstructions.length;i++)
	{
		
		switch(drivingInstructions[i]) {
  			case 'N':
    			if(roomY > roombaY + 1)
    				{
    					roombaY = roombaY + 1;
    				}
    			break;
  			case 'S':
  			    if(roombaY > 0)
    				{
    					roombaY = roombaY - 1;
    				}
    			break;
    		 case 'E':
    			if(roomX > roombaX + 1)
    				{
    					roombaX = roombaX + 1;
    				}
    			break;
    		case 'W':
    			if(roombaX > 0)
    				{
    					roombaX = roombaX - 1;
    				}
    			break;
  			default: console.log("Input invalid, please only use N S E or W for directions. Thank you.");
		};

		//Collision detection for dirt and Roobma
  		if(dirtLocation[`${roombaX},${roombaY}`])
  			{
  				dirtLocation[`${roombaX},${roombaY}`] = false; //removes picked up dirt pile
  				dirtCounter = dirtCounter + 1;
  			}

	}

console.log("Roomba's final location: " + roombaX, roombaY);
console.log("Number of dirt piles picked up: " + dirtCounter);

