const message = document.getElementById("message")


const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]

const mostFrequentWord=(str)=>{
    var maxF = 1;
    var count = 0;
    var word;
    for (var i=0; i<str.length; i++)
    {
            for (var j=i; j<str.length; j++)
            {
                    if (str[i] == str[j])
                     count++;
                    if (maxF<count)
                    {
                      maxF=count; 
                      word = str[i];
                    }
            }
            count=0;
    }
    return word;
 }

const msg = () => {
    if (message.value == "") {
        alert("Please, Enter your message")
    }
    else {
        let messageWords = [];
        let theMostFrequentWord;
        let numberOfWordsInTheMessage = 0;

        messageWords = message.value.toLowerCase().split(" ");//Replace all letters to the lowercase, then split it;
        numberOfWordsInTheMessage = messageWords.length;//number of words in the message
        theMostFrequentWord = mostFrequentWord(messageWords);// find the most frequent word

        console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
        console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`)

        let randomNumber = Math.floor(Math.random() * randomPhrasesAndPictures.length);//Random numbers between 1 and the length of the randomPhrasesAndPictures
        document.getElementById("phrase").innerHTML = randomPhrasesAndPictures[randomNumber].phrase;
        document.getElementById("picture").innerHTML = '<img style="width: 400px; height: 280px;" alt="Random photo" src="' + randomPhrasesAndPictures[randomNumber].imageURL + '" />';
    }
}
document.querySelector("button").addEventListener("click", msg);