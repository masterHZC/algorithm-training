# JavaScript词法

## 对词法初步的了解

+ JavaScript字符区分大小写

+ JavaScript词法构成有 token 空白符 行终结符。其中空格符除了空格之外，还支持制表符、以及Unicode中的所有空白的字符。行终结符包括回车符、换行符、回车/换行

+ JavaScrript中的标识符就是一个名字，可以命名常量，变量，函数，方法，类，标记（label）。标识符不能以数字开头，其中可以包含数字，字母，_，$。不以数字开头主要是因为解析器会将所有以数字开头的字符都解析成数字。某些标识符被语言本身使用，因此被作为保留字，这些保留字不能用作寻常的标识符来使用。另外有一些字符在某些特定场所具有特殊意义 `of` `from` `get` `set` `target` 这些字符的使用就是与语法的上下文相关的，在不同的语句中会产生不同的意义

+ JavaScript字符集支持全部Unicode字符，但是为了兼容性尽量使用ASCII中的字符。由于某些计算机对于Unicode的输入和输出无法正确处理，因此JavaScript提供了使用ASCII中的字符来转义所有Unicode字符。ASCII转义符通常是 `\u` 开头后接一个16进制的四位数，但随着Unicode字符集不断扩充部分字符的码点已经超过了四位数，所以在ES6中补充了新的表示转义符的方式，通过 `{}` 中间可以输入多位字母和数字的组合来表示一个转义符。同时，由于在ASCII之外的一些Unicode支持多种写法表示同一个字符，在使用超出ASCII字符的Unicode需要注意统一字符的写法。

+ JavaScript允许添加分号和不添加分号两种风格。JavaScript的词法解析会尽可能将多的字符解析成同一语句，所以并不会在每一个行终结符后面都自动补全分号，只有在不添加分号无法解析的情况下才补全分号。这样也造成了一些问题，有些情况下解析器的意图和代码本身的表达意图出现分歧就会出现一些报错的问题。当以`(` `[` `-` `+` `/`开头时，如果上一个语句没有添加分号，解析器会优先与前一部分代码相结合。因此在使用无分号风格编程时，需要在以上这几种情况下添加防御分号，也就是在这几句代码前手动添加分号。

```js
;(function() {})()

var a = 1
;++a

;[].toString()

```

## 词法

JavaScript不是完全的上下文无关语法，因此定义一系列 [goal symbol](https://tc39.es/ecma262/#sec-context-free-grammars) 来对应不同的词法场景，也是为了避免在不同场景的词法分析补全分号的机制出现歧义。例如：
```js
 // 自动补全的分号 在以下场景会出现问题
 var b = 1
 var a = b
 /\d+/
 // SyntaxError: Invalid or unexpected token
 // 两个原因：
 // 1. 在行终结符后的第一个非空白符和非注释的字符是 \u002f (/)，这个符号被解析成了 除号 没有当成正则语法
 // 2. 当/前面没有分号时 会被与前面的语句当成一个整体解析 所以并没有在行终结符之后立马添加分号

 // 最后被解析成了 

 var b = 1; var a = b / \ d + /;
```

## Unicode Format-Control Characters

## White Space

空白符最主要的作用是：
1. 增加代码的可读性，可以是代码按照某种风格展示
2. 分割token
空白符是*字符串字面量*、*正则字面量*、*模版字符串的尾模版*、*模版字符串*的组成部分，也可以出现在注释中。

以下几种都是可以通过码点表示出的空白符：
```js
 // U+0009 <TAB>
 eval('console.log("\u0009133")') // ' 133'
 // U+000B <VT>
 eval('console.log("\u000B133")') // ' 133'
 // U+000C <FF>
 eval('console.log("\u000C133")') // '133'  输出的时候没有空格
 // U+0020 <SP>
 eval('console.log("\u0020133")') // ' 133'
 // U+00A0 <NBSP>
 eval('console.log("\u00A0133")') // ' 133'
 // U+FEFF <ZWNBSP>
 eval('console.log("\uFEFF133")') // '133' 输出的时候没有空格
```

## Line Terminators
和空白符一样，行终结符的作用也是用来提升可读性以及分割token。不同的是行终结符对语法分析会有一定的影响，并且也会对自动补全分号机制产生一定的影响。行终结符不能出现在 *字符串字面量* *模版字面量* *模版字符串尾模版字面量* 以及 *单行注释* 中，但是可以存在在*多行注释*。行终结符由多个空格组成，这些空格可以通过正则表达式中的 `\s` 来进行匹配。
行终结符有四种表示方式：
```js
'\u000A' // '\n'
'\u000D' // '\r'
'\u2028' // ''
'\u2029' // ''

// \u2028 和 \u2029 这两个转义码需要注意自动补全分号问题

// 在匹配换行符的时候 尽量将 \r \n \r\n 都加上
// 在标准里可以允许 <LF> <CR> 的组合
```

## Tokens
以下是Token的基本组成：
```
 CommonToken::
  IdentifierName
  PrivateIdentifier
  Punctuator
  NumbericLiteral
  StringLiteral
  Template
```
其余所有复杂的 `additional tokens` 都是由 `CommonToken` 所组成的。最后 `token` 可以被解释为**无法被拆分的词法单元**

## Names and Keywords
JavaScript的名称和关键字都分别被包含在了标识符和保留字中。标识符名称 `IdentifierName` 用于定义JavaScript中的所有常量、变量、类、属性、函数、标签的命名。保留字 `ReservedWord` 是标识符名称的一个子集，同时保留字是不能用于命名使用的。

>另外，在标准中特别提到了几个Unicode的码点作为名称命名的补充字符：\u0024($),\u005f(_)。可以出现在标识符名称的任意位置。而\u200C(ZWNJ)和\u200D(ZWJ)可以出现在标识符名称的首位以外的任意位置

Unicode 的转义序列也允许用于标识符名称，例如：
```js
  var a\u{200D}b = 1
  a\u{200D}b // 1
  // 或者使用传统的写法也可以
  var b\u200Da = 2
  b\u200Da // 2
```
但是需要注意的是：
1. 转义序列之前必须有 `\` 不然会报错
2. 转义序列和源字符可以等效替换
```js
// \u0024 === $ true
var a\u0024b = 123
a$b // 123
```
3. 在有转义序列符的命名中名称的位数和将对应的转义序列符替换成的源字符的位数相同
```js
var obj = {}
obj.a\u0024b = 1234
Object.keys(obj).forEach(item => console.log(item.length)) // 3
```

然后从标准中展出一些关于标识符名称的代码：
```
  IdentifierName::
      IdentifierStart
      IdentifierName IdentifierPart
  
  IdentifierStart::
      UnicodeIDStart
      $
      _
      \ UnicodeEscapeSequence

  IdetifierPart::
      UnicodeIDContinue
      $
      \UnicodeEscapeSequence
      <ZWNJ>
      <ZWJ>

  UnicodeIDStart::
      any Unicode code point with the Unicode property "ID_Start"

  UnicodeIDContinue::
      any Unicode code point with the Unicode property "ID_Start"
```
这是标准的标识符名称的规则，然后还有一个最近自由属性命名的 `PrivateIdentifier`。

```
  PrivateIdentifier::
      # IdentifierName
```

```js
  class C {
    #name = 'this is name'
    getName() {
      return this.#name
    }
  }

  var c = new C()
  c.name // undefined
  c.name = 1
  c.name // 1
  c.getName() // this is name
```

以上代码展示了私有名称的使用方法，至于私有名称的定义为什么不使用 `private` 关键字或者在很多开源库大规模使用的 `_` 在这里不去讨论。

## Literals

## Automatic Semicolon Insertion
