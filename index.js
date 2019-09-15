/*
    1. Select all the buttons using class selector
    2. Then we detect which article has been clicked
    3. Finally we update the content right there on the same page
 */

const firstArticleContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices nibh sed velit consequat, vitae posuere augue euismod. Nulla facilisi. Donec quam tellus, suscipit sed est sed, vestibulum condimentum neque. Nulla eu est eu ipsum interdum faucibus. Aenean quis enim sit amet nulla molestie dapibus. Vivamus ex felis, varius non semper quis, lobortis in magna. Mauris a lorem eu est faucibus euismod vitae ac nunc. Donec commodo condimentum sapien ac vehicula. Nulla dignissim condimentum nisi at dignissim. Vivamus eu elit volutpat, venenatis nulla at, faucibus nibh. Praesent semper est et neque pulvinar, vitae venenatis est aliquam. Fusce malesuada ullamcorper neque et sodales.</p><p>Proin pellentesque mattis mauris, non pulvinar nulla viverra sed. Sed nec mi nec metus suscipit hendrerit. Proin viverra lorem eu accumsan facilisis. Etiam et purus id lectus imperdiet porttitor non non justo. Mauris malesuada tellus at lorem pharetra porta. Donec a nunc iaculis, efficitur justo eu, luctus ligula. Aliquam erat volutpat.</p><p>Praesent porta mi a maximus volutpat. Pellentesque fringilla interdum auctor. Vivamus eget mattis nunc. Integer nec nisi nec arcu lacinia finibus. Vestibulum viverra nibh purus. Duis aliquam efficitur ante eu iaculis. Curabitur ornare elit quis leo suscipit bibendum. Praesent pretium risus eu lorem tincidunt egestas.</p>`

const secondArticleContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices nibh sed velit consequat, vitae posuere augue euismod. Nulla facilisi. Donec quam tellus, suscipit sed est sed, vestibulum condimentum neque. Nulla eu est eu ipsum interdum faucibus. Aenean quis enim sit amet nulla molestie dapibus. Vivamus ex felis, varius non semper quis, lobortis in magna. Mauris a lorem eu est faucibus euismod vitae ac nunc. Donec commodo condimentum sapien ac vehicula. Nulla dignissim condimentum nisi at dignissim. Vivamus eu elit volutpat, venenatis nulla at, faucibus nibh. Praesent semper est et neque pulvinar, vitae venenatis est aliquam. Fusce malesuada ullamcorper neque et sodales.</p><p>Proin pellentesque mattis mauris, non pulvinar nulla viverra sed. Sed nec mi nec metus suscipit hendrerit. Proin viverra lorem eu accumsan facilisis. Etiam et purus id lectus imperdiet porttitor non non justo. Mauris malesuada tellus at lorem pharetra porta. Donec a nunc iaculis, efficitur justo eu, luctus ligula. Aliquam erat volutpat.</p><p>Praesent porta mi a maximus volutpat. Pellentesque fringilla interdum auctor. Vivamus eget mattis nunc. Integer nec nisi nec arcu lacinia finibus. Vestibulum viverra nibh purus. Duis aliquam efficitur ante eu iaculis. Curabitur ornare elit quis leo suscipit bibendum. Praesent pretium risus eu lorem tincidunt egestas.</p>`

const thirdArticleContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices nibh sed velit consequat, vitae posuere augue euismod. Nulla facilisi. Donec quam tellus, suscipit sed est sed, vestibulum condimentum neque. Nulla eu est eu ipsum interdum faucibus. Aenean quis enim sit amet nulla molestie dapibus. Vivamus ex felis, varius non semper quis, lobortis in magna. Mauris a lorem eu est faucibus euismod vitae ac nunc. Donec commodo condimentum sapien ac vehicula. Nulla dignissim condimentum nisi at dignissim. Vivamus eu elit volutpat, venenatis nulla at, faucibus nibh. Praesent semper est et neque pulvinar, vitae venenatis est aliquam. Fusce malesuada ullamcorper neque et sodales.</p><p>Proin pellentesque mattis mauris, non pulvinar nulla viverra sed. Sed nec mi nec metus suscipit hendrerit. Proin viverra lorem eu accumsan facilisis. Etiam et purus id lectus imperdiet porttitor non non justo. Mauris malesuada tellus at lorem pharetra porta. Donec a nunc iaculis, efficitur justo eu, luctus ligula. Aliquam erat volutpat.</p><p>Praesent porta mi a maximus volutpat. Pellentesque fringilla interdum auctor. Vivamus eget mattis nunc. Integer nec nisi nec arcu lacinia finibus. Vestibulum viverra nibh purus. Duis aliquam efficitur ante eu iaculis. Curabitur ornare elit quis leo suscipit bibendum. Praesent pretium risus eu lorem tincidunt egestas.</p>`

let previousContent = []

/**
 * To populate the previousContent variable with all the summaries
 */
function getPreviousContent () {
    const myParagraphs = document.querySelectorAll('.summary')
    for(let i = 0; i < myParagraphs.length; i++) {
        previousContent.push(myParagraphs[i].innerText)
    }
}

/**
 * To setup the "read full article" events so that the summaries get replaced by
 * the entire article content.
 */
function createEvents () {
    // Select all the read article buttons
    const myArticleButtons = document.querySelectorAll('.read-full-article')
    // Loop throught all of them
    for(let i = 0; i < myArticleButtons.length; i++) {
        // Select each element and add a 'click' event listener
        myArticleButtons[i].addEventListener('click', () => {
            if(i == 0) {
                document.getElementById('first-article-content').innerHTML = firstArticleContent
                if(myArticleButtons[i].innerHTML == 'Go back') {
                    document.getElementById('first-article-content').innerHTML = previousContent[i]
                    myArticleButtons[i].innerHTML = 'Read the full article'
                } else {
                    myArticleButtons[i].innerHTML = 'Go back'
                }
            } else if(i == 1) {
                document.querySelector('#second-article-content').innerHTML = secondArticleContent
                if(myArticleButtons[i].innerHTML == 'Go back') {
                    document.getElementById('second-article-content').innerHTML = previousContent[i]
                    myArticleButtons[i].innerHTML = 'Read the full article'
                } else {
                    myArticleButtons[i].innerHTML = 'Go back'
                }
            } else {
                document.querySelector('#third-article-content').innerHTML = thirdArticleContent
                if(myArticleButtons[i].innerHTML == 'Go back') {
                    document.getElementById('third-article-content').innerHTML = previousContent[i]
                    myArticleButtons[i].innerHTML = 'Read the full article'
                } else {
                    myArticleButtons[i].innerHTML = 'Go back'
                }
            }
        })
    }
}

function setupForm() {
    document.querySelector('.contact-form').addEventListener('submit', e => {
        e.preventDefault()
        const emailAddress = document.querySelector('#email-address').value
        const textareaContent = document.querySelector('#textarea').value
        console.log(emailAddress, textareaContent)
    })
}

getPreviousContent()
createEvents()
setupForm()
