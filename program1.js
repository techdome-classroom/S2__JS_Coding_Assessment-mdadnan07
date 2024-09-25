 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const bracketPairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (bracketPairs[char]) {
            stack.push(char);
        } else {
            let lastOpen = stack.pop();
            if (bracketPairs[lastOpen] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

module.exports = { isValid };


