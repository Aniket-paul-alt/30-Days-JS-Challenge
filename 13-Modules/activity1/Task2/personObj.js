let person = {
    name: "Aniket",
    age: 22,
    intro: function(){
        return `Hi my name is ${this.name} and i am ${this.age} years old`
    }
}

module.exports = person