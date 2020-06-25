# 正则表达式
## api
- match
- replace
- exec

## match
- ?:() 不捕获

```
"abc".match(/a(b)c/)
"[a=value]".match(/\[([^=]+)=([^\]]+)\]/)
```
## replace
```
"abc".replace(/a(b)c/,function(str,$1){
    console.log(str,$1)
}
```
  String.prototype.match && 正则带小括号

    "abc".match(/a(b)c/)  // 推荐用法 会捕获括号中的内容
    "abc".match(/a(b)c/g) // 这种结果中。不带小括号中的内容

    怎么办,不想捕获括号中的内容？
    "abc".match(/a?:(b)c/)  // ?:() 结果中，就不存在括号中的内容了

  String.prototype.replace

    "abc".replace(/a(b)c/, function(str, $1){ return $1+$1})
    "abc".replace(/a(b)c/, '$1$1')  // 与上面写法得到结果相同

    怎么办，想要替换的字符就是$1?
    "abc".replace(/a(b)c/, '$$1$$1')  // 结果：$1$1