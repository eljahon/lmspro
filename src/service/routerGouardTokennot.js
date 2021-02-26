export default function (to, from, next) {
    const token = localStorage.getItem('token')
    if (token) {
        next('/ToobarNavbar')
    }
    else{
        next()
    }
}