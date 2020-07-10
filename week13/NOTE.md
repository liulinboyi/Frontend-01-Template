# proxy 一般是做库使用

```
 // 使obj变为响应式数据
    function reactive(obj) {
      if (reactivities.has(obj)) {
        return reactivities.get(obj)
      }
      let proxy = new Proxy(obj, {
        get(obj, prop) {
          usedReactivities.push([obj, prop])
          if (typeof obj[prop] === 'object') return reactive(obj[prop])
          return obj[prop]
        },
        set(obj, prop, val) {
          obj[prop] = val
          // console.log(handlers)
          if (handlers.get(obj)) {
            if (handlers.get(obj).get(prop)) {
              for (let handler of handlers.get(obj).get(prop)) {
                handler()
              }
            }
          }
          return obj[prop]
        },
      })

      reactivities.set(obj, proxy)
      reactivities.set(proxy, proxy)

      return proxy
    }
    在get只给你收集依赖，在set中执行依赖
```
