const displayJoke = document.querySelector('#display-joke');
const getJoke = document.querySelector('#get-joke');

function getRandomJoke(){
    const ajax = new XMLHttpRequest;
    // const url = 'https://api.chucknorris.io/jokes/random'

    ajax.open('GET','https://api.chucknorris.io/jokes/random');

    ajax.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            displayJoke.innerHTML = `${data.value}`
        } else {
            this.onerror = onerror();
        }
    }
    ajax.send();
}

getJoke.addEventListener('click', function(){
    getRandomJoke();
})

function onerror(){
     displayJoke.textContent = 'There was an error!';  
}

