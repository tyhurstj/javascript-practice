import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const classes = ['Robotics', 'Engineering', 'Drones']

app.innerHTML = `
    <header>
        <h1>Mr. Tyhurst</h1>
        <p>Robotics, Engineering and Drones</p>
    </header>
    
    <section id="about">
        <h2>About</h2>
        <p>I teach Robotics, Engineering and Drones.</p>
    </section>
    
    <section id="classes">
        <h2>Classes</h2>
        <ul>${classes.map((c) => `<li>${c}</li>`).join('')}</ul>
    </section>
    
    <section id="login">
        <h2>Login demo</h2>
        <form id="login-form">
            <input id="user" placeholder="Username">
            <input id="pw" type="password" placeholder="Password">
            <button>Login in</button>
        </form>
    </section>
    
    <section id="guestbook">
        <h2>Guestbook</h2>
        <input id="note" placeholder="Leave a note">
        <button id="post">Post</button>
        <ul id="notes"></ul>
    </section
`

function isStrong(password: string): boolean {
    return password.length >= 12
}

document.querySelector<HTMLFormElement>('#login-form')!
    .addEventListener('submit', (e) => {
        e.preventDefault()
        const pw = document.querySelector<HTMLInputElement>('#pw')!
        alert(isStrong(pw.value) ? 'Strong enough' : 'Too short')
    })