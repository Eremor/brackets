module.exports = function check(str, bracketsConfig) {
    let i = 0;

    while(i < bracketsConfig.length) {
        let brk = bracketsConfig[i].join('')

        if(str.includes(brk)) {
            str = str.replace(brk, '')
            i = 0;
        } else {
            i++
        }
    }

 return str.length ? false : true
}
