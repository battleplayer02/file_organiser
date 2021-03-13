// view
// tree
// flat
// organize
// help
let viewfnObj = require("./commands/view");
let helpfnObj = require("./commands/help");
const organise = require("./commands/organize");
let input = process.argv.slice(2);
let cmd = input[0]
switch (cmd) {
    case "view":
        //view as tree
        // view as flat 
        // recursion
        viewfnObj.viewfn(input[1], input[2])
        break;
    case "organize":
        organise(input[1])
        break;
    case "help":
        helpfnObj.helpfn();
        break;

    default:
        console.log("Wrong command . Type help to see the list of all the commands");
}