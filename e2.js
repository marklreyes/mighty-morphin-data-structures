'use strict';

// Considering the previous array, let's turn this into a hybrid data structure.
const arrayOfRangers = [
	{
		name: 'Zack',
		power: 'Mastedon',
		isMorphed: false
	},
	{
		name: 'Kimberly',
		power: 'Pterydactyl',
		isMorphed: false
	},
	{
		name: 'Billy',
		power: 'Triceratops',
		isMorphed: false
	},
	{
		name: 'Trini',
		power: 'Sabertooth',
		isMorphed: false
	},
	{
		name: 'Jason',
		power: 'Tyrannosaurus',
		isMorphed: false
	}
];

function itsMorphinTime(teen, team) {
	let ranger;
	for (var i = 0; i < team.length; i++) {
		if (team[i].name === teen.name && team[i].power === teen.power) {
			ranger = {
				name: teen.name,
				power: teen.power,
				isMorphed: true
			};
			break;
		} else {
			console.log('Nice try, ' + teen.name);
			ranger = false;
		}
	}
	return ranger;
}

// Bulk and Skull
const bulk = {
	name: 'Bulk',
	power: 'Mastedon',
	isMorphed: false
};

const skull = {
	name: 'Skull',
	power: 'Mastedon',
	isMorphed: false
};

// Zack
const zack = {
	name: 'Zack',
	power: 'Mastedon',
	isMorphed: false
};

console.log('Bulk tries to morph = ', itsMorphinTime(bulk, arrayOfRangers));
console.log('Skull tries to morph = ', itsMorphinTime(skull, arrayOfRangers));
console.log('Zack tries to morph = ', itsMorphinTime(zack, arrayOfRangers));
