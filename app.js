const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const notes= require('./notes.js');
const yargs = require('yargs')

yargs.version('1.1.0')

//use of chalk module and how to import other node module

// const msg = getNotes()

// console.log(msg)
// // fs.writeFileSync("note.txt",'Practice started');
// // fs.appendFileSync("note.txt"," using append module");
// //console.log(chalk.green('Success!'))
// // console.log(chalk.magenta(validator.isEmail("adarsh@example.com")))
// console.log(chalk.magenta.bgCyan.bold(validator.isEmail("adarsh@example.com")))

// // taking input from cmd line

// // const commands = process.argv
// const commands = process.argv[2]
// console.log(commands)
// if(commands==="add"){
//     console.log("Adding notes...")
// }else if(commands==="remove"){
//     console.log("Removing notes...")
// }

//using yargs 

yargs.command({
    command: 'add',
    describe :'adding note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption:true,
            type: 'string'
        }

    },
    handler: function(argv){
        // console.log("Adding notes...",argv)
        // console.log("Title: " + argv.title)
        // console.log("Body : " + argv.body)   
        notes.addNote(argv.title,argv.body)

    }
})


yargs.command({
    command: 'remove',
    describe :'removing note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }

    },
    handler: function(argv){
        // console.log("Adding notes...",argv)
        // console.log("Title: " + argv.title)
        // console.log("Body : " + argv.body)   
        notes.removeNote(argv.title)

    }
})


yargs.command({
    command: 'list',
    describe:'List your notes',
    handler:function(){
        notes.listNote()
    }
})

yargs.command({
    command: 'read',
    describe:'reading notes',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }

    },
    handler:function(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()