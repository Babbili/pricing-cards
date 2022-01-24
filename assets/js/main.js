const themeToggle = document.getElementById('theme-toggle')
const moon = document.getElementById('moon')
const sun = document.getElementById('sun')
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains('dark') ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains('dark') ? 'sun' : 'moon'

if(selectedTheme) {
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove']('dark')
    moon.classList[selectedIcon == 'sun' ? 'add' : 'remove']('hide')
    sun.classList[selectedIcon == 'sun' ? 'remove' : 'add']('hide')
}

themeToggle.addEventListener('click', () => {
    moon.classList.toggle('hide')
    sun.classList.toggle('hide')
    document.body.classList.toggle('dark')
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})