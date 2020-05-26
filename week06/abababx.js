function match(rule, target) {
  if (target.length < rule.length) {
    return false
  }
  //     var rule = 'ababx'

  //     var target = 'ababxcc'

  var ruleArr = rule.split('')

  var targetArr = target.split('')

  var startfun = []

  function findChange(change) {
    for (let i = ruleArr.length; i > 0; i--) {
      if (ruleArr[i] === change) {
        return i
      }
    }
  }

  for (let i = 0; i < ruleArr.length - 1; i++) {
    if (i === 0) {
      startfun.push(`
                function start(c) {
                    if(c === ${`'${ruleArr[i]}'`}) {
                        return found0
                    } else {
                        return start
                    }
                }

            `)
    }
    startfun.push(`
        function found${i}(c) { // 返回下一个状态
            if(c === ${`'${ruleArr[i + 1]}'`}) {
                return ${i + 1 === ruleArr.length - 1 ? `end` : `found${i + 1}`}
            } ${
              i + 1 === ruleArr.length - 1 && targetArr.length > ruleArr.length
                ? `else if(c === ${`'${targetArr[ruleArr.length - 1]}'`}) {
                console.log('${targetArr[ruleArr.length - 1]}','${
                    targetArr[ruleArr.length - 1]
                  }','${-1}')
                console.log('${targetArr[ruleArr.length]}','${
                    targetArr[ruleArr.length]
                  }','${0}')
                // let change = findChange('${targetArr[ruleArr.length]}')
                // console.log(change)
                return found${
                  (function (change) {
                    console.log(change, 'inner')
                    for (let i = ruleArr.length; i > 0; i--) {
                      // console.log(i, 'inner', ruleArr[i], change)
                      if (ruleArr[i] === change) {
                        // console.log(i, 'inner')
                        return i
                      }
                    }
                  })(
                    `${
                      targetArr.length > ruleArr.length
                        ? targetArr[ruleArr.length]
                        : targetArr[ruleArr.length - 1]
                    }`
                  ) - 1
                }
            }`
                : ''
            } else {
                return start(c)
            }
        }
        `)
  }

  // console.log(startfun)

  var statement = `
    function match(string) {
        let state = start;
        for(let c of string) {
            state = state(c)
        }
        return state === end
    }
    ${startfun.join('')}
    function end(c) {
        return end
    }
    `

  // console.log(statement) // 语句

  eval(statement)
  return match(target)
}

module.exports = match
//                  rule   tatget
// console.log(match('aaa', 'aa'))
// console.log(match('ababx', 'abasbxxx'))
// console.log(match('abcdef', 'abcdef'))
// console.log(match('aaa', 'abasbxxx'))
// console.log(match('abcde', 'abcade'))

// console.log(match('abcabx', 'abcaabcabx'))
// console.log(match('abac', 'ababac'))
//                            abab ac

// console.log(match('abcdef', 'aabc'))
// console.log(match('abcdef', 'abcdef'))
// console.log(match('abcabx', 'abcabcabx'))
// console.log(match('abcabx', 'abcaabcabx'))
// console.log(match('abcabce', 'abcabcabce'))

//                            abcabca bce

// console.log(match('abac', 'abaabac'))
