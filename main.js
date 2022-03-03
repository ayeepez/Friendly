const friends = []

function addFriend (name, lastname, nickname, occupation, email) {
    const newFriend = {
        name:name,
        lastname:lastname,
        nickname:nickname,
        occupation:occupation,
        email:email
    }
    friends.push(newFriend)
}


console.log(friends)
const resultOfAddingFriend = addFriend("amy")
console.log(resultOfAddingFriend)
console.log(friends)

function sum(number, otherNumber) {
    return number + otherNumber
}

const resultOfSum = sum(2, 3)

console.log(resultOfSum)