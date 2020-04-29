### Bound Function Exotic Objects
  - properties
    - [[BoundTargetFunction]]: The wrapped function object.
    - [[BoundThis]]: The value that is always passed as the this value when calling the wrapped function.
    - [[BoundArguments]]: A list of values whose elements are used as the first arguments to any call to the wrapped function.
  - methods:
    - [[Call]] ( thisArgument, argumentsList )
    - [[Construct]] ( argumentsList, newTarget )
    - BoundFunctionCreate ( targetFunction, boundThis, boundArgs )

### Array Exotic Objects
  - methods
    - [[DefineOwnProperty]] ( P, Desc )
    - ArrayCreate ( length [ , proto ] )
    - ArraySpeciesCreate ( originalArray, length )
    - ArraySetLength ( A, Desc )

### String Exotic Objects
  - methods
    - [[GetOwnProperty]] ( P )
    - [[DefineOwnProperty]] ( P, Desc )
    - [[OwnPropertyKeys]] ( )
    - StringCreate ( value, prototype )
    - StringGetOwnProperty ( S, P )

### Arguments Exotic Objects
  - methods
    - [[GetOwnProperty]] ( P )
    - [[DefineOwnProperty]] ( P, Desc )
    - [[Get]] ( P, Receiver )
    - [[Set]] ( P, V, Receiver )
    - [[Delete]] ( P )
    - CreateUnmappedArgumentsObject ( argumentsList )
    - CreateMappedArgumentsObject ( func, formals, argumentsList, env )
    - MakeArgGetter ( name, env )
    - MakeArgSetter ( name, env )

### Integer-Indexed Exotic Objects
  - methods
    - [[GetOwnProperty]] ( P )
    - [[HasProperty]] ( P )
    - [[DefineOwnProperty]] ( P, Desc )
    - [[Get]] ( P, Receiver )
    - [[Set]] ( P, V, Receiver )
    - [[OwnPropertyKeys]] ( )
    - IntegerIndexedObjectCreate ( prototype, internalSlotsList )
    - IntegerIndexedElementGet ( O, index )
    - IntegerIndexedElementSet ( O, index, value )

### Module Namespace Exotic Objects
  - properties
    - [[Module]]: The Module Record whose exports this namespace exposes
    - [[Exports]]: A List containing the String values of the exported names exposed as own properties of this object.
    - [[Prototype]]: This slot always contains the value null.
  - methods
    - [[SetPrototypeOf]] ( V )
    - [[IsExtensible]] ( )
    - [[PreventExtensions]] ( )
    - [[GetOwnProperty]] ( P )
    - [[DefineOwnProperty]] ( P, Desc )
    - [[HasProperty]] ( P )
    - [[Get]] ( P, Receiver )
    - [[Set]] ( P, V, Receiver )
    - [[Delete]] ( P )
    - [[OwnPropertyKeys]] ( )
    - ModuleNamespaceCreate ( module, exports )

### Immutable Prototype Exotic Objects
  - methods
    - [[SetPrototypeOf]] ( V )
    - SetImmutablePrototype ( O, V )
    
### The Global Object
- Value Properties
  - Infinity
  - NaN
  - undefined
- Function Properties
  - eval ( x )
  - isFinite ( number )
  - isNaN ( number )
  - parseFloat ( string )
  - parseInt ( string, radix )
  - decodeURI ( encodedURI )
  - decodeURIComponent ( encodedURIComponent )
  - encodeURI ( uri )
  - encodeURIComponent ( uriComponent )
- Constructor Properties
- Other Properties
  - Atomics
  - JSON
  - Math
  - Reflect

### Fundamental Objects
- Object
- Function
- Boolean
- Symbol
  - Symbol.asyncIterator
  - Symbol.hasInstance
  - Symbol.isConcatSpreadable
  - Symbol.iterator
  - Symbol.match
  - Symbol.replace
  - Symbol.search
  - Symbol.species
  - Symbol.split
  - Symbol.toPrimitive
  - Symbol.toStringTag
  - Symbol.unscopables
- Error
  - EvalError
  - RangeError
  - ReferenceError
  - SyntaxError
  - TypeError
  - URIError

### Numbers and Dates
- Number
- Math
- Date

### Text Processing
- String
- RegExp

### Indexed Collections
- Array
- TypedArray
  - Int8Array(char)
  - Uint8Array(unsigned char)
  - Uint8ClampedArray(unsigned char)
  - Int16Array(short)
  - Uint16Array(unsigned short)
  - Int32Array(int)
  - Uint32Array(unsigned int)
  - Float32Array(float)
  - Float64Array(double)

### Keyed Collections
- Map
- Set
- WeakMap
- WeakSet

### Structured Data
- ArrayBuffer
- SharedArrayBuffer
- DataView
- Atomics
- JSON

### Control Abstraction Objects
- Iteration
- GeneratorFunction Objects
- AsyncGeneratorFunction Objects
- Generator Objects
- AsyncGenerator Objects
- Promise Objects
- AsyncFunction Objects

### Reflection
- The Reflect Object
- Proxy Objects
- Module Namespace Objects



```
function NumberToString(number, type) {
  if (arguments.length < 2) {
    type = 10;
  }
  var integer = Math.floor(number);
  var fractionPos = ("" + number).indexOf(".");
  var fractionLength = ("" + number).length - fractionPos - 1;
  var fraction = (number - integer).toFixed(fractionLength);
  var str = "";
  while (integer > 0) {
    str = (integer % type) + str;
    integer = Math.floor(integer / type);
  }
  if (fractionPos > -1) {
    str += ".";
    while (fractionLength > 0) {
      fraction *= type;
      str += Math.floor(fraction % type);
      fractionLength--;
    }
  }
  return str;
}
```


```
function StringToNumber(string, radix = 10) {
  if (radix > 10) {
    return;
  }
  let flag = /e|E/.test(string);
  if (!flag) {
    let chars = string.split("");
    let number = 0;
    let i = 0;
    while (i < chars.length && chars[i] != ".") {
      number = number * radix;
      number += chars[i].codePointAt(0) - "0".codePointAt(0);
      i++;
    }
    if (chars[i] === ".") {
      i++;
    }
    let fraction = 1;
    while (i < chars.length) {
      fraction /= radix;
      number += (chars[i].codePointAt(0) - "0".codePointAt(0)) * fraction;
      i++;
    }
    return number;
  } else {
    let logNumber = Number(string.match(/\d+$/)[0]);
    let number = string.match(/^[\d\.]+/)[0].replace(/\./, "");
    if (/e-|E-/.test(string)) {
      return Number(number.padEnd(logNumber + 1, 0));
    } else {
      return Number(
        number.padStart(logNumber + number.length, 0).replace(/^0/, "0.")
      );
    }
  }
}
```


