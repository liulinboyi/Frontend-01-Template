# 总计

```
<Number> = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

<DecimalNumber> = "0" | (("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") <Number>* )


/*
<Expression> = <DecimalNumber> "+" <DecimalNumber>

<Expression> = <Expression> "+" <DecimalNumber>
*/
// 定义加法
<Expression> = <DecimalNumber> | <Expression> "+" <DecimalNumber>




// 四则运算

// BNF

<AdditiveExpression> = <DecimalNumber> | <Expression> "+" <DecimalNumber>

// 乘法
<MultiplicativeExpression> = <DecimalNumber> | <MultiplicativeExpression> "*" <DecimalNumber>


1 + 2 * 3
```

# 图灵完备性

命令式————图灵机

 - goto
 - if 和 while
声明式————lambda

 - 递归