const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    ar = expr.split(/(.{10})/g)
    let result = ''
    for (let i = 0; i < ar.length; i++) {
        if (ar[i].length == 0) { continue }
        if (ar[i] == '**********') {
            sb = ' ';
            result = result + sb;
            continue
        }
        let mor = ''
        for (let n = 0; n < ar[i].length; n += 2) {
            let word = ar[i]
            let simb = word[n] + word[n + 1]
            if (simb == 10) { mor = mor + '.' }
            if (simb == 11) { mor = mor + '-' }
            if (simb == 00) { mor = mor + '' }
        }
        sb = MORSE_TABLE[mor]
        result = result + sb
    }
    return result
}

module.exports = {
    decode
}