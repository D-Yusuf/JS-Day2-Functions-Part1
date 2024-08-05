const readline = require('node:readline');
let year = 2024
function taskSeperator(taskNumber){
    console.log("--------------------------")
    console.log(`Task ${taskNumber}:`)
}

// task 1
taskSeperator(1)
function printName(name){
    console.log(`Hello, ${name}`);
};
printName("Yusuf");
// task 2
taskSeperator(2)
function printAge(birthYear){
    console.log(`Your age is ${year - birthYear}`)
}
printAge(2006)
// task 3
taskSeperator(3)
function printAgeAndName(name, birthYear){
    const age = year - birthYear
    console.log(`Hello ${name} you are ${age} years old`)
}
printAgeAndName("Yusuf", 2006)

// task 5
taskSeperator(5)
function printMax(num1, num2){
    if(Math.max(num1, num2) == num1){
        console.log(`${num1} is greater than ${num2}`)

    }
    else if(Math.max(num1, num2) == num2){
        console.log(`${num2} is greater than ${num1}`)

    }else{
        console.log("Both numbers are equal")
    }
}
printMax(10, 90)
// task 4
taskSeperator(4)
function getLanguageGreeting(){
    const languageGreetings = {
        en: "Hello",
        es: "Hola",
        fr: "Bonjour",
        tr: "Merhaba",
        ar: "مرحبا",
    }
    let greeting = ""
    const question = "What language do you speak? (Ex: en, tr): ";
    const languageQuestion = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    while (!greeting){
        languageQuestion.question(question, (lang)=>{
            if(!languageGreetings[lang]){
                console.error("Input a valid language. Ex: en, tr, ar")
                return 0
                languageQuestion.close()
            }else{
                greet = languageGreetings[lang]
                languageQuestion.close()
            }
        })

    }
}
function printHello(name){
        let greeting = getLanguageGreeting()
        console.log(`${greeting} ${name}`)
    
        // let greet =  languageGreetings[language] || console.error("Input a valid language. Ex: en, tr, ar"); 
     
    

}
printHello("Yusuf")