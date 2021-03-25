export function debounce(time) {
    return {
        execute(func) {
            if (this.timer !== undefined) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(func, time)
        }
    }
}

