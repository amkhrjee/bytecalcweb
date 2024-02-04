export var TokenType;
(function (TokenType) {
    // ONE-CHARACTER
    TokenType[TokenType["LEFT_PAREN"] = 0] = "LEFT_PAREN";
    TokenType[TokenType["RIGHT_PAREN"] = 1] = "RIGHT_PAREN";
    TokenType[TokenType["DOT"] = 2] = "DOT";
    TokenType[TokenType["MINUS"] = 3] = "MINUS";
    TokenType[TokenType["PLUS"] = 4] = "PLUS";
    TokenType[TokenType["SLASH"] = 5] = "SLASH";
    TokenType[TokenType["CROSS"] = 6] = "CROSS";
    TokenType[TokenType["PERCENT"] = 7] = "PERCENT";
    TokenType[TokenType["EQUAL"] = 8] = "EQUAL";
    // Literals
    TokenType[TokenType["NUMBER"] = 9] = "NUMBER";
    // Keywords
    TokenType[TokenType["MOD"] = 10] = "MOD";
    TokenType[TokenType["LOG_TWO"] = 11] = "LOG_TWO";
})(TokenType || (TokenType = {}));
export class Token {
    constructor(type, lexeme, literal) {
        this.toString = () => {
            return this.type + " " + this.lexeme + " " + this.literal;
        };
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
    }
}
export class Scanner {
    constructor(src) {
        this.source = src;
        this.start = 0;
        this.current = 0;
        this.tokens = [];
    }
    scanTokens() {
        while (this.current < this.source.length) {
            this.start = this.current;
            this.scanToken();
        }
        return this.tokens;
    }
    scanToken() {
        let singleChar = this.advanceChar();
        switch (singleChar) {
            case "(":
                this.addToken(TokenType.LEFT_PAREN, null);
                break;
            case ")":
                this.addToken(TokenType.RIGHT_PAREN, null);
                break;
            case ".":
                this.addToken(TokenType.DOT, null);
                break;
            case "-":
                this.addToken(TokenType.MINUS, null);
                break;
            case "+":
                this.addToken(TokenType.PLUS, null);
                break;
            case "×":
                this.addToken(TokenType.CROSS, null);
                break;
            case "%":
                this.addToken(TokenType.PERCENT, null);
                break;
            case "/":
                this.addToken(TokenType.SLASH, null);
                break;
            case "=":
                this.addToken(TokenType.EQUAL, null);
                break;
            default:
                while (this.isDigit(this.peek()))
                    this.advanceChar();
                // Look for fractional part
                if (this.peek() == "." && this.isDigit(this.peekNext())) {
                    this.advanceChar();
                    while (this.isDigit(this.peek()))
                        this.advanceChar();
                }
                this.addToken(TokenType.NUMBER, parseFloat(this.source.substring(this.start, this.current)));
        }
    }
    advanceChar() {
        return this.source.charAt(this.current++);
    }
    addToken(type, literal) {
        let text = this.source.substring(this.start, this.current);
        this.tokens.push(new Token(type, text, literal));
    }
    peek() {
        if (this.current < this.source.length)
            return this.source.charAt(this.current);
        else
            return null;
    }
    isDigit(char) {
        return !isNaN(parseInt(char));
    }
    peekNext() {
        if (this.current + 1 < this.source.length)
            return this.source.charAt(this.current + 1);
        else
            return null;
    }
}
Scanner.keywords = {
    "mod": TokenType.MOD,
    "log₂": TokenType.LOG_TWO
};
