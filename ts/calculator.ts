export enum TokenType {
    // ONE-CHARACTER
    LEFT_PAREN, RIGHT_PAREN, DOT, MINUS, PLUS, SLASH, CROSS, PERCENT, EQUAL,
    EXPONENT,

    // Literals
    NUMBER,

    // Keywords
    MOD, LOG_TWO
}

export class Token {
    type: TokenType
    lexeme: string
    literal: any

    constructor(type: TokenType, lexeme: string, literal: any) {
        this.type = type
        this.lexeme = lexeme
        this.literal = literal
    }

    toString = () => {
        return this.type + " " + this.lexeme + " " + this.literal
    }
}

export class Scanner {
    source: string
    tokens: Token[]
    start: number
    current: number

    static keywords: Record<string, TokenType> = {
        "mod": TokenType.MOD,
        "log₂": TokenType.LOG_TWO
    }

    constructor(src: string) {
        this.source = src
        this.start = 0
        this.current = 0
        this.tokens = []
    }


    scanTokens(): Token[] {
        while (this.current < this.source.length) {
            this.start = this.current
            this.scanToken()
        }

        return this.tokens
    }

    private scanToken(): void {
        let singleChar: string = this.advanceChar()
        switch (singleChar) {
            case "(":
                this.addToken(TokenType.LEFT_PAREN, null)
                break
            case ")":
                this.addToken(TokenType.RIGHT_PAREN, null)
                break
            case ".":
                this.addToken(TokenType.DOT, null)
                break
            case "-":
                this.addToken(TokenType.MINUS, null)
                break
            case "+":
                this.addToken(TokenType.PLUS, null)
                break
            case "×":
                this.addToken(TokenType.CROSS, null)
                break
            case "%":
                this.addToken(TokenType.PERCENT, null)
                break
            case "/":
                this.addToken(TokenType.SLASH, null)
                break
            case "=":
                this.addToken(TokenType.EQUAL, null)
                break
            case "^":
                this.addToken(TokenType.EXPONENT, null)
                break
            case "l":
                this.current += 3
                this.addToken(TokenType.LOG_TWO, null)
                break
            case "m":
                this.current += 2
                this.addToken(TokenType.MOD, null)
                break
            default:
                while (this.isDigit(this.peek()))
                    this.advanceChar()
                // Look for fractional part
                if (this.peek() == "." && this.isDigit(this.peekNext())) {
                    this.advanceChar()
                    while (this.isDigit(this.peek()))
                        this.advanceChar()
                }
                this.addToken(TokenType.NUMBER, parseFloat(this.source.substring(this.start, this.current)))
        }
    }

    private advanceChar(): string {
        return this.source.charAt(this.current++)
    }

    private addToken(type: TokenType, literal: any) {
        let text: string = this.source.substring(this.start, this.current)
        this.tokens.push(new Token(type, text, literal))
    }

    private peek(): string {
        if (this.current < this.source.length)
            return this.source.charAt(this.current)
        else
            return null
    }

    private isDigit(char: string): boolean {
        return !isNaN(parseInt(char))
    }

    private peekNext(): string {
        if (this.current + 1 < this.source.length)
            return this.source.charAt(this.current + 1)
        else
            return null
    }
}

abstract class Expr { }

class Binary extends Expr {
    left: Expr
    operator: Token
    right: Expr

    constructor(left: Expr, operator: Token, right: Expr) {
        super()
        this.left = left
        this.operator = operator
        this.right = right
    }
}

class Grouping extends Expr {
    expression: Expr

    constructor(expression: Expr) {
        super()
        this.expression = expression
    }
}

class Literal extends Expr {
    value: any

    constructor(value: any) {
        super()
        this.value = value
    }
}

class Unary extends Expr {
    operator: Token
    right: Expr

    constructor(operator: Token, right: Expr) {
        super()
        this.operator = operator
        this.right = right
    }
}

export class Parser {
    private tokens: Token[] = []
    private current: number = 0

    constructor(tokens: Token[]) {
        this.tokens = tokens
    }

    parse(): Expr {
        try {
            return this.expression()
        } catch {
            return null
        }
    }

    private expression(): Expr {
        return this.exponent()
    }

    private exponent(): Expr {
        let expr = this.percentage()

        while (this.match(TokenType.EXPONENT)) {
            let operator = this.previous()
            let right = this.exponent()
            expr = new Binary(expr, operator, right)
        }

        return expr
    }

    private percentage(): Expr {
        let expr = this.term()

        if (this.match(TokenType.PERCENT)) {
            let operator = this.previous()
            let right = this.term()
            expr = new Binary(expr, operator, right)
        }

        return expr
    }

    private term(): Expr {
        let expr = this.factor()

        while (this.match(TokenType.PLUS, TokenType.MINUS)) {
            let operator = this.previous()
            let right = this.factor()
            expr = new Binary(expr, operator, right)
        }

        return expr
    }

    private factor(): Expr {
        let expr = this.unary()

        while (this.match(TokenType.SLASH, TokenType.CROSS, TokenType.MOD, TokenType.PERCENT)) {
            let operator = this.previous()
            let right = this.unary()
            expr = new Binary(expr, operator, right)
        }

        return expr
    }

    private unary(): Expr {
        if (this.match(TokenType.MINUS, TokenType.LOG_TWO)) {
            let operator = this.previous()
            let expr = this.unary()
            return new Unary(operator, expr)
        }
        else
            return this.primary()
    }

    private primary(): Expr {
        if (this.match(TokenType.NUMBER))
            return new Literal(this.previous().literal)
        else if (this.match(TokenType.LEFT_PAREN)) {
            let expr = this.expression()
            this.consume(TokenType.RIGHT_PAREN, "Expected ')'")
            return new Grouping(expr)
        }

        throw Error("Some Error")
    }

    private match(...types: TokenType[]): boolean {
        types.forEach(type => {
            if (this.check(type)) {
                this.advance();
                return true
            }
        })
        return false
    }

    private check(type: TokenType): boolean {
        if (this.isAtEnd())
            return false
        return this.peek().type == type
    }

    private advance(): Token {
        if (!this.isAtEnd())
            this.current++
        return this.previous()
    }

    private isAtEnd(): boolean {
        return this.current == (this.tokens.length - 1)
    }

    private peek(): Token {
        return this.tokens[this.current];
    }

    private previous(): Token {
        return this.tokens[this.current - 1]
    }

    private consume(type: TokenType, message: string): Token {
        if (this.check(type))
            return this.advance();
        throw Error(message);
    }
}