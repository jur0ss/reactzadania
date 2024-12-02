const processText = (
    text,
    { uppercase = false, reverse = false, removeSpecialChars = false } = {}
  ) => 
    {
        if (removeSpecialChars==true) 
        {
            text = text.replace(/[^a-zA-Z0-9\s]/g, '') //zamiana wszystkich znaków specjalnych
        }

        if (uppercase==true) 
        {
            text = text.toUpperCase()
        }

        if (reverse) 
        {
            text = [...text].reverse().join('') //reverse() działa tylko na tablicach dlatego używamy spreada
        }

        return text
        
    }
const test = processText("woda po parówkach", {uppercase:true, reverse:true, removeSpecialChars:false})
console.log(test)