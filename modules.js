const os = require('os')
// console.log(os)
// const user=os.userInfo();
// console.log(user)
// console.log(`the system uptime is ${os.uptime()} seconds`)

// const curros={
//     name:os.type(),
//     release:os.release(),

// }

//readFile writeFile synchronOusly
// const {readFileSync,writeFileSync}=require('fs')

// const first=readFileSync('./aisehi/1.txt','utf8')
// const second=readFileSync('./aisehi/2.txt','utf8')

// console.log(first+second)

// writeFileSync('./aisehi/res.txt',`the written file are here: ${first}  ${second} `)

//writefile readfile asynchronousily

const { readFile, writeFile } = require('fs')

readFile('./aisehi/1.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('an error ocuured')
        return
    }
    const first = result;

    readFile('./aisehi/2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log('error ')
            return;
        }

        const second = result

        writeFile('./aisehi/res_async.txt', `here is the async result: ${first}  ${second}`, (err, result) => {
            if (err) {
                console.log('something went wrong')
                return;
            }
            console.log(result)
        })
    })


})