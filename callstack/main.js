const callStack = []

const a = () => {}
const b = () => {}
const c = () => {}
const d = () => {}

callStack.push(a)
callStack.push(b)
callStack.push(c)

console.log(callStack)

console.log("-----------------------")
// Konsep LIFO Last In First Out
while(callStack.length){
    console.log("Panggil")
    console.log(callStack.pop())
}