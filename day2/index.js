// let title = prompt("Questions African Mothers would ask you then they want to beat you. Enter ok ");
// let name = prompt("You the child, what is that your name again ");
// let mq1 = prompt(`${name} you dont know how to great? slap`)
// let mas = prompt(`"${mq1}" dont worry i will teach you manners. Another Slap Slap `)
// let mq2 = prompt(`When i beat u dont cry abi. ....Rain of slaps..`)
// let mq3 = prompt(`${mq2} your are still crying you want me to add some`)
// let mq4 = prompt(`${name}, Now say sorry before I add more.`) 
// if (mq4.toLowerCase() == 'sorry'){
// 	prompt('Well done, dont do that again')
// } else{
// 	prompt('slap, slap')
// }

const mutable = (obj) => {
	return {
		...obj, // first make a copy of the whole state
		complete: !obj.complete // make changes in the copy not in teh original state 
	}

}

let task = {
	text: 'wash the dishes',
	complete: false
}

console.log("This is taks before ", task)

const update = mutable(task)

console.log(update)
console.log("This is taks after ", task)

// in task before complete was false, and in after complete is true which means the state has been muatates 
// task is false and task after is false , 

// this is the concept of IMMUTABLY UPDATING #thanU4Ex16