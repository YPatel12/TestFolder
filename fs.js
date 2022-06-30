 const fs=require('fs')
 const path=require('path')



/*let b=a.readFileSync('tx.txt')

console.log(b.toString())*/

// a.writeFileSync('fs2','First project')

// let c=a.readFileSync(fs2.toString())



 let u=process.argv.slice(2)

 let command=u[0]
 let p=u[1]




// let a=process.argv[2]
// let b=process.argv[3]

switch(command)
{
    case "Help":
        console.log(`List of all Commands
                            1)Tree command
                            2)Organize
                            3)Help`)
        break;
    case "Organize":
        console.log("Organize will ve executed")
        organizeFn(p)
        break;
    case "Tree":
        console.log("Tree will ve executed")
        break;
    default:
    console.log("Enter a valid option")
        
    
}

    



function organizeFn(pt)
{
    let destPath;
    
    if(path == undefined)
    {
        console.log("Enter valid path")
        return;
    }
    else{

        let doesExists=fs.existsSync(pt)
        if(doesExists = true)
        {
          destPath=path.join(pt,'organizedFiles') 
        }
        
        if(fs.existsSync(destPath)==false)
        {
            fs.mkdir(destPath)
        }
        else{
            console.log("Folder Exists Already")
        }
        
        
    }

    organizeHelper(pt,destPath)
}


function organizeHelper(src,des)
{

        let childName=fs.readdirSync(src)
        console.log(childName)

        for(let i=0;i<childName.length;i++)
        {
            let type=childName[i]
            let childAdress= path.join(src,type)
            let isFile=fs.lstatSync(childAdress).isFile()

            console.log(childAdress + " " +  isFile)
        }

        
}


