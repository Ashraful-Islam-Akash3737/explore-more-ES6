const products = [
    {id: 1, name: "lenevo", price: 65000},
    {id: 2, name: "dell", price: 45000},
    {id: 3, name: "hp", price: 40000},
    {id: 4, name: "mac", price: 165000},
    {id: 5, name: "asos", price: 55000},
]

// class has some properties, (method or attribute)
class Product{
    country = "Bangladesh";
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`Talking about ${talk}`);
    }
}
const lenevo = new Product("Ami");
console.log(lenevo);
lenevo.speak("Akash");

// making a class about teacher
class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
}
const mizan = new Teacher('Mizanur Rahman Sir', 'Data Structure and Algorithem');
const rupchand = new Teacher('Rupchand Sir', 'Bangla 2nd Paper');
console.log(mizan);
console.log(rupchand);