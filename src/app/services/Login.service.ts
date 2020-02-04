

const newPost = {
    title: 'Prueba personal!',
    body: 'Esto es una prueba para ver como funciona el fetch!'
}
const metodoPost = {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}
fetch(`https://jsonplaceholder.typicode.com/posts`, metodoPost)
    .then(res => res.json())
    .then(posts => console.log(posts))
