export enum TokenType {
    // ONE-CHARACTER
    LEFT_PAREN, RIGHT_PAREN, DOT, MINUS, PLUS, SLASH, CROSS, PERCENT, EQUAL,

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