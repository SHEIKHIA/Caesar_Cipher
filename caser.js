let alphabet="abcdefghijklmnopqrstuvwxyz".split()
//created alphabet array
let inpt;
//variable for inpute;

function CaesarCipher( inpt){
  inpt=inpt.toLowerCase();

let crfto_str=[]
//create new empty crfto list to make crypto 

  inpt = inpt.split()

  //turn inpute into an array

  for(let i = 0; i<inpt.length; i ++){

    //loop through user input


    
    for (let j=0; j<alphabet.length; j++){

          if (inpt[i]== ' ')
//if the user use space 
     { 
       crfto_str.push(inp[i])
      continue
      }
      else if (inpt[i]==alphabet[j] && (alphabet[j].length +3) > 25 )
      // if inpu z == z and alphabet +3 is geter than 25 then 
      {
        crfto_str.push(alphabet[Number(((j+3)%26)-3)])
        // subtract 3
      }


      else(inpt[i]==alphabet[j])
      {
        crfto_str.push(alphabet[j+3])
        }
     

      
    }


  }
  return crfto_str
  }

 console.log( CaesarCipher( 'inpt'))

