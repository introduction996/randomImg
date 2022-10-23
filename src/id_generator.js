function generateLinkCode (len_letters, len_numbers, letters, numbers) {
    let code = ''
    let code_letters = ''
    let code_numbers = ''

    function index (arg) {
        let i = Math.floor(Math.random() * arg.length)
        if (i == undefined) {
            index(arg)
        }
        else {return i}
    }

    // for letters
    for (i=0 ; i<len_letters ; i++) {
        code_letters += letters[index(letters)]
    }

    // for numbers
    for (i=0 ; i<len_numbers ; i++) {
        code_numbers += numbers[index(numbers)]
    }

    code += (code_letters + code_numbers)

    return code
    };


// console.log(generateLinkCode (2, 4, letters, numbers))

module.exports = generateLinkCode;