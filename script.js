const textBox = document.querySelector('textarea')

document.getElementById('count').innerHTML = 0

const countWords = () => {
    let text = textBox.value

    const words = text.split(" ")
    console.log(text);


    document.getElementById('count').innerHTML = words.length
}

textBox.addEventListener('keydown', countWords)