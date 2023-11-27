const nav = document.querySelector('.nav')

const handleNav = () => {
    nav.classList.toggle('shrink', window.scrollY > 600)
}

window.addEventListener('scroll', handleNav)