const path=require('path')

// console.log(path.sep)
const filepath=path.join('/aisehi/','/kaisehi/','kya.txt')

console.log(filepath)
const base=path.basename(filepath) //it provides the base directory or file name i.e. which is innermost filename
console.log(base)

//getting absolute path
const absolute=path.resolve(__dirname,'aisehi','kaisehi','kya.txt')
console.log(absolute) //it will get the absolute path