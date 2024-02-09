// Code inspiration: Crafting Interpreters by Robert Nystrom (https://craftinginterpreters.com/)

export enum TokenType {
  // ONE-CHARACTER
  LEFT_PAREN,
  RIGHT_PAREN,
  DOT,
  MINUS,
  PLUS,
  SLASH,
  CROSS,
  PERCENT,
  EQUAL,
  EXPONENT,
  END,

  // Literals
  NUMBER,

  // Keywords
  MOD,
  LOG_TWO,
}

export class Token {
  type: TokenType;
  lexeme: string;
  literal: any;

  constructor(type: TokenType, lexeme: string, literal: any) {
    this.type = type;
    this.lexeme = lexeme;
    this.literal = literal;
  }

  toString = () => {
    return TokenType[this.type] + ": " + this.lexeme + " " + this.literal;
  };
}

export class Scanner {
  source: string;
  tokens: Token[];
  start: number;
  current: number;

  constructor(src: string) {
    this.source = src;
    this.start = 0;
    this.current = 0;
    this.tokens = [];
  }

  scanTokens(): Token[] {
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
        if (
          token.type == TokenType.LEFT_PAREN ||
          token.type == TokenType.LOG_TWO
        ) {
          let previousIndex = currentIndex - 1;
          if (
            this.tokens[previousIndex].type == TokenType.NUMBER ||
            this.tokens[previousIndex].type == TokenType.RIGHT_PAREN
          ) {
            this.addCrossAt(currentIndex);
          }
        } else if (token.type == TokenType.RIGHT_PAREN) {
          let nextIndex = currentIndex + 1;
          if (
            this.tokens[nextIndex].type == TokenType.NUMBER ||
            this.tokens[nextIndex].type == TokenType.LEFT_PAREN
          ) {
            this.addCrossAt(currentIndex + 1);
          }
        }
      }
      currentIndex += 1;
    });
    return this.tokens;
  }

  private addCrossAt(indexToInsertAt: number): void {
    this.tokens.splice(
      indexToInsertAt,
      0,
      new Token(TokenType.CROSS, "", null)
    );
    indexToInsertAt += 2;
  }

  private scanToken(): void {
    let singleChar: string = this.advanceChar();
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
        while (this.isDigit(this.peek())) this.advanceChar();
        // Look for fractional part
        if (this.peek() == "." && this.isDigit(this.peekNext())) {
          this.advanceChar();
          while (this.isDigit(this.peek())) this.advanceChar();
        }
        this.addToken(
          TokenType.NUMBER,
          parseFloat(this.source.substring(this.start, this.current))
        );
    }
  }

  private advanceChar(): string {
    return this.source.charAt(this.current++);
  }

  private addToken(type: TokenType, literal: any) {
    let text: string = this.source.substring(this.start, this.current);
    this.tokens.push(new Token(type, text, literal));
  }

  private peek(): string {
    if (this.current < this.source.length)
      return this.source.charAt(this.current);
    else return null;
  }

  private isDigit(char: string): boolean {
    return !isNaN(parseInt(char));
  }

  private peekNext(): string {
    if (this.current + 1 < this.source.length)
      return this.source.charAt(this.current + 1);
    else return null;
  }
}

interface Visitor<T> {
  visitBinaryExpr(expr: Binary): T;

  visitGroupingExpr(expr: Grouping): T;

  visitLiteralExpr(expr: Literal): T;

  visitUnaryExpr(expr: Unary): T;
}

abstract class Expr {
  abstract accept<T>(visitor: Visitor<T>): T;
}

class Binary extends Expr {
  left: Expr;
  operator: Token;
  right: Expr;

  constructor(left: Expr, operator: Token, right: Expr) {
    super();
    this.left = left;
    this.operator = operator;
    this.right = right;
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitBinaryExpr(this);
  }
}

class Grouping extends Expr {
  expression: Expr;

  constructor(expression: Expr) {
    super();
    this.expression = expression;
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitGroupingExpr(this);
  }
}

class Literal extends Expr {
  value: number;

  constructor(value: number) {
    super();
    this.value = value;
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitLiteralExpr(this);
  }
}

class Unary extends Expr {
  operator: Token;
  right: Expr;

  constructor(operator: Token, right: Expr) {
    super();
    this.operator = operator;
    this.right = right;
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitUnaryExpr(this);
  }
}

export class Parser {
  private tokens: Token[] = [];
  private current: number = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  parse(): Expr {
    console.log("Parsing");
    try {
      return this.expression();
    } catch (error) {
      throw error;
    }
  }

  private expression(): Expr {
    return this.percentage();
  }

  private percentage(): Expr {
    let expr = this.term();

    if (this.match(TokenType.PERCENT)) {
      let operator = this.previous();
      let right = this.term();
      expr = new Binary(expr, operator, right);
    }

    return expr;
  }

  private term(): Expr {
    let expr = this.factor();

    while (this.match(TokenType.PLUS, TokenType.MINUS)) {
      let operator = this.previous();
      let right = this.factor();
      expr = new Binary(expr, operator, right);
    }

    return expr;
  }

  private factor(): Expr {
    let expr = this.exponent();

    while (this.match(TokenType.SLASH, TokenType.CROSS, TokenType.MOD)) {
      let operator = this.previous();
      let right = this.exponent();
      expr = new Binary(expr, operator, right);
    }

    return expr;
  }

  private exponent(): Expr {
    let expr = this.unary();

    while (this.match(TokenType.EXPONENT)) {
      let operator = this.previous();
      let right = this.exponent();
      expr = new Binary(expr, operator, right);
    }

    return expr;
  }

  private unary(): Expr {
    if (this.match(TokenType.MINUS, TokenType.LOG_TWO)) {
      let operator = this.previous();
      let expr = this.unary();
      return new Unary(operator, expr);
    } else return this.primary();
  }

  private primary(): Expr {
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

  private match(...types: TokenType[]): boolean {
    for (let type of types) {
      if (this.check(type)) {
        this.advance();
        return true;
      }
    }

    return false;
  }

  private check(type: TokenType): boolean {
    if (this.isAtEnd()) return false;
    return this.peek().type == type;
  }

  private advance(): Token {
    if (!this.isAtEnd()) this.current += 1;
    return this.previous();
  }

  private isAtEnd(): boolean {
    return this.tokens[this.current].type == TokenType.END;
  }

  private peek(): Token {
    return this.tokens[this.current];
  }

  private previous(): Token {
    return this.tokens[this.current - 1];
  }

  private consume(type: TokenType, message: string): Token {
    if (this.check(type)) return this.advance();
    throw Error(message);
  }
}

export class Interpreter implements Visitor<any> {
  visitBinaryExpr(expr: Binary) {
    let left = this.evaluate(expr.left) as number;
    let right = this.evaluate(expr.right) as number;
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
          return left ** right;
        case TokenType.PERCENT:
          return (left / right) * 100;
        default:
          return null;
      }
    } catch (error) {
      throw error;
    }
  }
  visitGroupingExpr(expr: Grouping) {
    return this.evaluate(expr.expression);
  }
  visitLiteralExpr(expr: Literal) {
    return expr.value;
  }
  visitUnaryExpr(expr: Unary) {
    let right = this.evaluate(expr.right) as number;

    switch (expr.operator.type) {
      case TokenType.MINUS:
        return -right;
      case TokenType.LOG_TWO:
        return Math.log2(right);
      default:
        return null;
    }
  }

  interpret(expr: Expr): number {
    let value = this.evaluate(expr) as number;
    return value;
  }

  private evaluate(expr: Expr) {
    return expr.accept(this);
  }
}
