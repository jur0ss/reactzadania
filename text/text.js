const processText = (
    text,
    { uppercase = false, reverse = false, removeSpecialChars = false } = {}
  ) => 
    {
        if (removeSpecialChars==true) 
        {
            text = text.replace(/[^a-zA-Z0-9\s]/g, '')
        }
    }