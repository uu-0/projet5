function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Les deux arguments doivent être des nombres');
    }
    let sum = a + b;
    return sum;
}   

export default add;
