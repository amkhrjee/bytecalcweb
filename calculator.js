// Code inspiration: Crafting Interpreters by Robert Nystrom (https://craftinginterpreters.com/)
var TokenType;
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
    TokenType[TokenType["END"] = 10] = "END";
    // Literals
    TokenType[TokenType["NUMBER"] = 11] = "NUMBER";
    // Keywords
    TokenType[TokenType["MOD"] = 12] = "MOD";
    TokenType[TokenType["LOG_TWO"] = 13] = "LOG_TWO";
})(TokenType || (TokenType = {}));
class Token {
    constructor(type, lexeme, literal) {
        this.toString = () => {
            return TokenType[this.type] + ": " + this.lexeme + " " + this.literal;
        };
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
    }
}
class Scanner {
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
        this.tokens.push(new Token(TokenType.END, "", null));
        /* Check for implicit multiplications
          Scenarios:
              1. <num>(
              2. )(
              3. )<num>
              4. <num>log
              5. )log
        */
        let currentIndex = 0;
        this.tokens.forEach((token) => {
            if (currentIndex > 0) {
                if (token.type == TokenType.LEFT_PAREN ||
                    token.type == TokenType.LOG_TWO) {
                    let previousIndex = currentIndex - 1;
                    if (this.tokens[previousIndex].type == TokenType.NUMBER ||
                        this.tokens[previousIndex].type == TokenType.RIGHT_PAREN) {
                        this.addCrossAt(currentIndex);
                    }
                }
                else if (token.type == TokenType.RIGHT_PAREN) {
                    let nextIndex = currentIndex + 1;
                    if (this.tokens[nextIndex].type == TokenType.NUMBER ||
                        this.tokens[nextIndex].type == TokenType.LEFT_PAREN) {
                        this.addCrossAt(currentIndex + 1);
                    }
                }
            }
            currentIndex += 1;
        });
        return this.tokens;
    }
    addCrossAt(indexToInsertAt) {
        this.tokens.splice(indexToInsertAt, 0, new Token(TokenType.CROSS, "", null));
        indexToInsertAt += 2;
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
class Expr {
}
class Binary extends Expr {
    constructor(left, operator, right) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
    accept(visitor) {
        return visitor.visitBinaryExpr(this);
    }
}
class Grouping extends Expr {
    constructor(expression) {
        super();
        this.expression = expression;
    }
    accept(visitor) {
        return visitor.visitGroupingExpr(this);
    }
}
class Literal extends Expr {
    constructor(value) {
        super();
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitLiteralExpr(this);
    }
}
class Unary extends Expr {
    constructor(operator, right) {
        super();
        this.operator = operator;
        this.right = right;
    }
    accept(visitor) {
        return visitor.visitUnaryExpr(this);
    }
}
class Parser {
    constructor(tokens) {
        this.tokens = [];
        this.current = 0;
        this.tokens = tokens;
    }
    parse() {
        console.log("Parsing");
        try {
            return this.expression();
        }
        catch (error) {
            throw error;
        }
    }
    expression() {
        return this.percentage();
    }
    percentage() {
        let expr = this.term();
        if (this.match(TokenType.PERCENT)) {
            let operator = this.previous();
            let right = this.term();
            expr = new Binary(expr, operator, right);
        }
        return expr;
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
        let expr = this.exponent();
        while (this.match(TokenType.SLASH, TokenType.CROSS, TokenType.MOD)) {
            let operator = this.previous();
            let right = this.exponent();
            expr = new Binary(expr, operator, right);
        }
        return expr;
    }
    exponent() {
        let expr = this.unary();
        while (this.match(TokenType.EXPONENT)) {
            let operator = this.previous();
            let right = this.exponent();
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
        if (this.match(TokenType.NUMBER)) {
            return new Literal(this.previous().literal);
        }
        if (this.match(TokenType.LEFT_PAREN)) {
            let expr = this.expression();
            this.consume(TokenType.RIGHT_PAREN, "Missing )");
            return new Grouping(expr);
        }
        throw Error("Format Error");
    }
    match(...types) {
        for (let type of types) {
            if (this.check(type)) {
                this.advance();
                return true;
            }
        }
        return false;
    }
    check(type) {
        if (this.isAtEnd())
            return false;
        return this.peek().type == type;
    }
    advance() {
        if (!this.isAtEnd())
            this.current += 1;
        return this.previous();
    }
    isAtEnd() {
        return this.tokens[this.current].type == TokenType.END;
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
class Interpreter {
    visitBinaryExpr(expr) {
        let left = this.evaluate(expr.left);
        let right = this.evaluate(expr.right);
        try {
            switch (expr.operator.type) {
                case TokenType.PLUS:
                    return left + right;
                case TokenType.MINUS:
                    return left - right;
                case TokenType.SLASH:
                    return left / right;
                case TokenType.CROSS:
                    return left * right;
                case TokenType.MOD:
                    return left % right;
                case TokenType.EXPONENT:
                    return Math.pow(left, right);
                case TokenType.PERCENT:
                    return (left / right) * 100;
                default:
                    return null;
            }
        }
        catch (error) {
            throw error;
        }
    }
    visitGroupingExpr(expr) {
        return this.evaluate(expr.expression);
    }
    visitLiteralExpr(expr) {
        return expr.value;
    }
    visitUnaryExpr(expr) {
        let right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case TokenType.MINUS:
                return -right;
            case TokenType.LOG_TWO:
                return Math.log2(right);
            default:
                return null;
        }
    }
    interpret(expr) {
        let value = this.evaluate(expr);
        return value;
    }
    evaluate(expr) {
        return expr.accept(this);
    }
}

export { Interpreter, Parser, Scanner, Token, TokenType };
//# sourceMappingURL=calculator.js.map
