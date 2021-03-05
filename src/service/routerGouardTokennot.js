export default function (to, from, next) {
    const token = localStorage.getItem('token')
    if (token) {
        next('/home')
    }
    else{
        next()
    }
}