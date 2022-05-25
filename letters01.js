let letterArray = [
    {
        letter: 'A'
    },
    {
        letter: 'B'
    },
    {
        letter: 'C'
    },
    {
        letter: 'D'
    },
    {
        letter: 'E'
    }
]

let c = 0

nextLetter = () => {
    if (c < letterArray.length) {
        document.getElementById("header").innerText = letterArray[c].letter
        c++
    } else {
        document.getElementById("header").innerText = "No Letters For YOU!!!"
    }
}

nextLetter() 