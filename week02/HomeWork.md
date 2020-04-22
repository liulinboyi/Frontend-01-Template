# 正则表达式 匹配所有 Number 直接量
```
正则表达式: /^((0b(0|(1[01]*)))|(0o(0|([1-7][0-7]*)))|(0x(0|([1-9a-fA-F][0-9a-fA-F]*)))|(0|([1-9][0-9]*))\.?([0-9]*(([eE][\+-]?)?(0|([1-9][0-9]*)))?))$/

let a = /^((0b(0|(1[01]*)))|(0o(0|([1-7][0-7]*)))|(0x(0|([1-9a-fA-F][0-9a-fA-F]*)))|(0|([1-9][0-9]*))\.?([0-9]*(([eE][\+-]?)?(0|([1-9][0-9]*)))?))$/
a.test(1234567890)

```
# UTF-8 Encoding 的函数
```
function encodeUtf8(str) {
  str = typeof str === 'number' ? String(str) : str
  var bytes = []
  for (ch of str) {
    let code = ch.codePointAt(0)
    if (code >= 65536 && code <= 1114111) {// 位运算， 补齐8位
      bytes.push((code >> 18) | 0xf0)
      bytes.push(((code >> 12) & 0x3f) | 0x80)
      bytes.push(((code >> 6) & 0x3f) | 0x80)
      bytes.push((code & 0x3f) | 0x80)
    } else if (code >= 2048 && code <= 65535) {
      bytes.push((code >> 12) | 0xe0)
      bytes.push(((code >> 6) & 0x3f) | 0x80)
      bytes.push((code & 0x3f) | 0x80)
    } else if (code >= 128 && code <= 2047) {
      bytes.push((code >> 6) | 0xc0)
      bytes.push((code & 0x3f) | 0x80)
    } else {
      bytes.push(code)
    }
  }
  return bytes
}
```

# 正则表达式，匹配所有的字符串直接量，单引号和双引号

```
/^'+|"+|[\u4E00-\u9FFF]+$/
```