# Level One

## Using Let

*   Prior to executing our code, JavaScript moves _var_ declarations all the way up to the top of the scope. This is known as **hoisting**.
*   _let_ variables are scoped to the nearest **block** and are **NOT HOISTED**. (A block is any code section within **curly braces**, like _if, else, for, while,_, etc)
*   Use _let_, variables are "trapped" inside their respective _if_ and _else_ blocks.touch

## 1.4 using let in for loops

*   _var_ is the reason behind a popular "gotcha" in _for_ loops.
*   With _let_, there's **no sharing** in _for_ loops. A new variable is created on each iteration.
*   Variables declared with _let_ can be reassigned, but cannot be **redeclared** within the same scope.

## 1.9 Using const

*   **Magic Numbers** - a magic numners is a literal value with a clear meaning.
*   When used multiple times, magic numbers introduce **unnecassary duplication**, which can lead to **bad code**!
*   The _const_ keyword creates **read-only** named constants.
*   Once assigned, constants **cannot** be assigned a new value.
*   Variables declared with _const_ are scoped to the nearest block.
*   In most cases, _let_ and _const_ will behave very similarly. Consider the semantics when choosing one over the other.
*   Use **let** when variables could be reassigned new values.
*   Use **const** when new variables are not expected to be reassigned new values.

# Level Two

## 2.0 Function Defaults

*   A common practice is to **check for presence** of arguments as the very first thing in the function.
*   Default parameter values help move **default values** from the function body to the function signature.
*   **The Options Object** - the options object is a widely used pattern that allows user-defined settings to be passed to a function in the form of properties on an object.
*   **Using Named Parameters** - Using named parameters for optional settings makes it easier to understand how a function should be invoked.
*   It's **NOT okay** to omit the options argument altogether when invoking a function with named parameters when no default value is set for them.

## 2.7 Rest Params, Spread Op, Arrow Func

*   **Variadic functions** can take in any number of arguments
*   The _arguments_ object is a built-in, Array-like object that corresponds to the arguments of a function. Here's why relying on this object to read arguments is **not ideal.**
*   The new _rest parameter_ syntax allows us to represent an indefinite number of arguments as an Array. This way, changes to function signature are **less likeley to break code**.
*   The spread operator allows us to **split an Array** argument into **individual elements**.
*   **Rest and Spread look the same**Rest parameters and the spread operator **look the same**, but the former is used in function **definitions** and the later in function **invocations**.
*   **From functions to Objects** - JavaScript objects can help use with the **encapsulation, organization**, and **testability** of our code.
*   The _TagComponent_ object **encapsulates** the code for fetching tags and adding them to a page.
*   Anonymos functions passed as callback to other functions create **their own scope**.
*   Arrow functions bind to the scope of where they are **defined**, not where they are used. (also knows as **lexical binding**)

# Level Three

## 3.1 Objects and Strings

*   **Object Initializer Shorthand Syntax** - From variable to object properties
*   **Object Destructuring**From object properties to variables
*   **Template Strings** template strings are **string literals** allowing embedded expressions. This allows for a much better way to do **string interpolation**.
*   Template strings offer a new - and much better - way to write **multi-line strings**

## 3.9 Object.assign

*   In order to cater to different applications and domains, our _countdownTimer_ function needs to be called in **many different ways**
*   For functions that need to be used acrossdifferent applications, it's okay to accept an **option object** instead of using named parameters
*   Some options might not be specified by the caller, so we need to have **default values**
*   Using a local object to group **default** values for user options is a common practice and can help write more **idiomatic JavaScript**
*   We want to merge _options_ and _defaults_. Upon dplicate properties, those from _options_**must override properties** from _defaults_.
*   The _Object.assign_ method copies properties from one or more **source objects** to a **target obejct** specified as the very first argument. In case of **duplicate properties** on source objects, the value from the **last object** on the chain always prevails.
*   Preserving the original default values gives us the ability to compare them with the options passed and act accordingly when necassary

# Level Four

## 4.1 Arrays

*   We typically access array elements by their index, but doing so for more than just a couple of elements can quickly turn into a **repetitive task**.
*   We can **combine** destructuring with rest paramters to **group values** into other arrays
*   The _for...of_ statement iterates over **property values**, and it's a better way to loop over arrays and other **iterable objects**
*   The _for...of_ statement **cannot** be used to iterate over properties in plain JavaScript objects out-of-the-box.
*   In order to work with _for...of_, objects need a special function assigned to the _Symbol.iterator_ propert. The presence of this property allows us to know whether an object is **iterable**.
*   No function assigned to the _Symbol.iterator_ property means the object is **not iterable**.
*   _Array.find_ returns the **first element** in the array that satisfies a provided testing function.

## 4.8 Maps

*   _Maps_ are a **data structure** composed of a collection of **key/value** pairs. They are very useful to store simple data, such as property values.
*   When using **Objects** as maps, its _keys_ are **always converted to strings**.
*   The _Map_ object is a simple **key/value** data structure. Any value may bels