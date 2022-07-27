function calc(a, b, c, d, e, f) {
    let delta = a * e - d * b;
    let deltaX = c * e - f * b;
    let deltaY = a * f - d * c;
    let x = deltaX / delta;
    let y = deltaY / delta;
    return `${x} и ${y}`
}

console.log(calc(3, -4, 7, 6, 5, 1))
