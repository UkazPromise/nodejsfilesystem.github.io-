const fs = require('fs')

//Write to a file

//fs.writeFile('posts.json', JSON.stringify(["Zuri Nodejs class is cool"]), (err) => {
//    if(err) throw err
//})


//Read from a file

//fs.readFile('posts.json', 'utf8', (err, content) => {
//    if(err) throw err
//    console.log(content)
//})


//Append to an existing file

//fs.appendFile('posts.json', JSON.stringify(["Zuri Nodejs class is cool"]), (err) => {
//    if (err) throw err
//})


fs.readFile('posts.json', 'utf8', (err, content) => {
    if(err) throw err

    let data = JSON.parse(content)

    data.push("Zuri Nodejs class is cool")
    
    fs.writeFile('posts.json', JSON.stringify(data), (err) => {
        if (err) throw err
    })
})



















