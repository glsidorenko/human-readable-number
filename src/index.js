module.exports = function toReadable (number) {
    
    let zeroTo19 = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen'];
    
    let decimals = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let remainder = number % 10;

    if (number < 20) return zeroTo19[number];

    if (number < 100) return decimals[~~(number / 10)] + (remainder? ` ${zeroTo19[remainder]}` : '');

    if (number < 1000) return zeroTo19[~~(number / 100)] + " hundred" + (number % 100 == 0 ? '' : ` ${toReadable(number % 100)}`);


};
