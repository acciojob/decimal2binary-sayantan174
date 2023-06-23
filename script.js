
function decimalToBinary(num){
    let binaryStr = ""

    while(num>0){

        let rem = num%2;

        // Method 1 - Appending the new binary character to the front of the string
        // binaryStr = rem.toString() + binaryStr

        // Method 2 - Append it to the end
        binaryStr = binaryStr + rem.toString()

        num = Math.floor(num/2)
    }
    // Method - 1
    // return binaryStr


    // Method 2- Reverse it
    return binaryStr.split("").reverse().join("")
}

module.exports = decimalToBinary;
