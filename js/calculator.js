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
    TokenType[TokenType["EXPONENT"] = 9] = "EXPONENT";
    // Literals
    TokenType[TokenType["NUMBER"] = 10] = "NUMBER";
    // Keywords
    TokenType[TokenType["MOD"] = 11] = "MOD";
    TokenType[TokenType["LOG_TWO"] = 12] = "LOG_TWO";
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
            case "^":
                this.addToken(TokenType.EXPONENT, null);
                break;
            case "l":
                this.current += 3;
                this.addToken(TokenType.LOG_TWO, null);
                break;
            case "m":
                this.current += 2;
                this.addToken(TokenType.MOD, null);
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
class Expr {
}
class Binary extends Expr {
    constructor(left, operator, right) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
}
class Grouping extends Expr {
    constructor(expression) {
        super();
        this.expression = expression;
    }
}
class Literal extends Expr {
    constructor(value) {
        super();
        this.value = value;
    }
}
class Unary extends Expr {
    constructor(operator, right) {
        super();
        this.operator = operator;
        this.right = right;
    }
}
export class Parser {
    constructor(tokens) {
        this.tokens = [];
        this.current = 0;
        this.tokens = tokens;
    }
    parse() {
        try {
            return this.expression();
        }
        catch (_a) {
            return null;
        }
    }
    expression() {
        return this.term();
    }
    term() {
        let expr = this.factor();
        while (this.match(TokenType.PLUS, TokenType.MINUS)) {
            let operator = this.previous();
            let right = this.factor();
            expr = new Binary(expr, operator, right);
        }
        return expr;
    }
    factor() {
        let expr = this.unary();
        while (this.match(TokenType.SLASH, TokenType.CROSS, TokenType.MOD, TokenType.PERCENT)) {
            let operator = this.previous();
            let right = this.unary();
            expr = new Binary(expr, operator, right);
        }
        return expr;
    }
    unary() {
        if (this.match(TokenType.MINUS, TokenType.LOG_TWO)) {
            let operator = this.previous();
            let expr = this.unary();
            return new Unary(operator, expr);
        }
        else
            return this.primary();
    }
    primary() {
        if (this.match(TokenType.NUMBER))
            return new Literal(this.previous().literal);
        else if (this.match(TokenType.LEFT_PAREN)) {
            let expr = this.expression();
            this.consume(TokenType.RIGHT_PAREN, "Expected ')'");
            return new Grouping(expr);
        }
        throw Error("Some Error");
    }
    match(...types) {
        types.forEach(type => {
            if (this.check(type)) {
                this.advance();
                return true;
            }
        });
        return false;
    }
    check(type) {
        if (this.isAtEnd())
            return false;
        return this.peek().type == type;
    }
    advance() {
        if (!this.isAtEnd())
            this.current++;
        return this.previous();
    }
    isAtEnd() {
        return this.current == (this.tokens.length - 1);
    }
    peek() {
        return this.tokens[this.current];
    }
    previous() {
        return this.tokens[this.current - 1];
    }
    consume(type, message) {
        if (this.check(type))
            return this.advance();
        throw Error(message);
    }
}
