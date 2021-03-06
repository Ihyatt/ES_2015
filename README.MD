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
*   Anonymous functions passed as callback to other functions create **their own scope**.
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
*   The _Map_ object is a simple **key/value** data structure. Any value may be used as either a key or a value, and object are **not converted** to strings. 
*   _Maps_ are iterable, so they can be used in a _for...of_ loop. Each run of the loops returns a **[key,value]** pair for an entry in the _Map_.
*   The _WeakMap_ is a type of _Map_ where **only objects** can be passed as keys. Primitive data types -- such as strings,numbers,booleans, ets, -- are **not allowed**.
*   Working with WeakMaps --> all available methods on a _WeakMap_ require access to an **object used as a key**.
*   WeakMaps are better with memory --> Individual entries in a _WeakMap_ can be **garbage collected** while the _WeakMap_ itself still exists.

## 4.17 Sets

*	Limitations w/Arays --> Arrays don't enforce uniqueness of items. Duplicate entries are allowed
*	Using Set --> The _Set_ object stores ***unique** values of **any type**, whether primitive values or object references
*	Using Set as Enumberable Object --> _Set_ objects are ***iterable**, which means they can be used with _for..of_ and destucturing.
* 	WeakSet --> The _WeakSet_ is a type of _Set_ where ***only objects** are allowed to be stored.
*	Can't Read From a WeakSet --> _WeakSets_ **cannot** be used with _for..of_ and they offer **no** methods for reading values from it. 
*	Using WeakSets to Show Unread Posts --> We want to add a different background color to posts that **have not yet been read**.
*	Showing Unread Posts With WeakSets --> We can use _WeakSets_ to create special groups from existing objects **without mutating them**. Favoring **immutable** objects allow for much **simpler** code with **no unexpected side effects**.

# Level Five

## 5.1 Classes
*	Using a Function Approach --> A common approach to encapsulation in JavaScript is using a **constructor function**
*	Using the New Class Syntax --> To define a class, we use the _class_ keyword followed by the name of the class. The body of a class is the part between curly braces.
*	Initializing Values in the Construcotr Functions --> The _constructor_ method is a special method for **creating and initializing** and object.
*	Accessing Class Instance Variables --> Instance variables set on the _constructor_ method can be accessed from all other instance methods in the class.
*	Creating an Instance From a Class --> The class syntax is not introducing a new object model to javaScript. It's just **syntatical sugar** over the existing **prototype-based** inheritance.
*	Class Inheritance --> We can use inheritance to reduce code repitition. Child classes **inherit** and **specialize** behavior defined in parent classes.
*	Using extends to Inherit From Base Class --> The _extends_ keyword is used to create a class that **inherits methods and properties** from another class. The _super_ methos runs the contructor function from the parent class. 
*	Overriding Inherited Methods --> Child classes can invoke methods from their **parent** classes via the _super_ object.

## 5.7 Modules Part I

*	Polluting the Global Namespace --> The common solution for modularizing code relies on using **global variables**. This increases the chances of **unexpected side effects** and potential **naming conflicts**.
*	Importing Modules With Default Export --> To import modules we use the _import_ keyword, specify a new local variable to hold its cntent, and use the _from_ keyword to tell the JavaScript engine where the module can be found.
*	Running Code From Modules --> Modules still need to be imported via _<script></script>_, but no longer pollute the global namespace.
*	The _default_ type export ***limits* the number of functions we can export from a module.
*	Using Named Exports --> In order to **export multiple functions** from a single module, we can use **named** export.
*	Importing Named Exorts --> Functions from **named** exports must be assigned to variables to **the same name** enclosed in curly braces.
*	Importing a Module as an Object --> We can also **import the entire module** as an object and call each function as a **property** from this object.
*	Exporting Multiple Functions at Once --> We can export multiple functions at once by passing them to _export_ inside curly braces.

## 5.13 Modules - Part II

*	Extracting Hardcoded Constants --> Redefining constants across out application is **unnecessary repetition** and can lead to **bugs**.
*	Exporting Constants ---> Placing constants on their own module allos them to be reused across other modules and **hides implementation details** (aka, **encapsulation**).
*	How to Import Constants --> to _import_ constants, we use the exact same syntax or importing functions. 
*	Exporting Class Modules with Default Export --> Classes can also be exported from modules using the same syntax as functions. Instead of 2 individual functions, we now have **2 instance methods** that are part of a class. 
*	Using Class Modules with Default Export --> Imported classes are assigned to a variable using _import_ and can be used to create **new instances**.
*	Using Class Modules with Named Export --> Another way to export classes is to first define them, and then used the _export_ statement with the class name inside curly braces. 
*	Using Class Modules with Named Export --> When using named **export**, the script that loads the module needs to assign it to a variable with **the same name as the class**.

# Level Six

## 6.1 Promises

*	Fetching Poll Results From the Server --> It's very importatnt to understand how to work with JavaScript's **single-thread model**. Otherwise, we might accidentally **freeze** the entire app, to the detriment of user experience. 
*	Avoiding Code That Blocks --> Once the browser **blocks** executing a sript, it stops running other scripts, rendering elements, and responding to user events like keyboard and mouse interactions. 
*	Passing Callbacks to Continue Execution --> In **continuation-passing style** (CPS) async programming, we tell a function how to continue execution by passing callbacks. It can grow to **complicate nested code**.
*	The Best of Both Worlds With Promises --> A Promise is a new abstraction that allows us to write async code in an easier way.
*	Creating a New Promise Object --> The Promise constructor function takes an anonymous function with 2 callback arguments known as **handlers**. 
*	The Lifecycle of a Promise Object --> Creating a new Promise automatically sets it to the **pending** state. Then, it can do 1 of 2 things: become **fulfilled** or **rejected**.
*	Returning a New Promise Object --> A Promise represents a **future value**, such as the eventual result of an **asynchronous** operation. 
*	Resolving a Promise --> Let's wrap the _XMLHttpRequest_ object API within a Promise. Calling the _resolve()_ handler moves the Promise to a **fulfilled** state. 
*	Reading Results From a Promise --> We can use the _then()_ method to read results from the Promise once it's resolved. This method takes a function that will only be invoked once the Promise is **resolved**.
*	Removing Temporary Variables --> We are currently using a **temporary variable** to store our Promise object, but it's not really necassary. Let's replace it with **chaining function calls**.
*	Rejecting a Promise --> We'll call the _reject()_ handler for **unsuccessful status codes** and also when the _onerror_ event is triggered on our request object. Both move the Promise to a **rejected state**.
*	Catching Rejected Promises --> Once an error occurs, execution moves immediately to the _catch()_ function. None of the remaining _then()_ functions are invoked. 
*	Passing Functions as Arguments --> We can make out code more succinct by passing function arguments to _then_, instead of using anonymous functions. 

## 6.5 Iterators

*	What We know About Iterables So far -- > Arrays are **iterable** objects, which means we can use them with _for..of_. Plain JavaScript objects are **not iterable**, so they **do not work** with _for...of_ out-of-th-box.
*	Iterables Return Iterators --> Iterables return an **iterator** object. This object knows how to **access items from a collection** 1 at a time, while **keeping track of its current position** within the sequence.
*	Understanding the next Method --> Each time _next()_ is called, it returns an object with 2 specific properties: _done_ and _value_.
*	Here's how values from these 2 peoperties work: **done(boolean)** will be _false_ if the iterator is able to return a value from the collection. And will be _true_ if the iterator is past the end of the collection. **value(any)** any  value returned by the iterator. When _done_ is _true_, this returns _undefined_.
*	The First Step Toward an Iterator Object --> An iterator is an object with a _next_ propert, returned by the result of calling the _Symbol.iterator_ method.
*	Navigating the Sequence --> We can use _Object.keys_ to build an array with propery names for our object. We'll also use a counter(_count_) and a boolean flag (_isDone_) to help us navigate our collection. 
*	Returning done and value --> We use _count_ to keep track of the sequence and also to fetch values from the _properties_ array. 
*	Running Our Custom Iterator --> We've succesfully made our plain JavaScript object **iterable**, and it can now be used with _for...of_
*	Iterables With the Spread Operator --> Objects that comply with the iterable protocal can also be used with the **spread operator**.
*	Iterables with Destructuring --> Lastly, **destructuring** assignments will also work with iterables. 

## 6.9 Generators

*	Generator Functions --> The _function *_ declaration defines **generator functions**. These are special functions from which we can use the _yield_ keyword to return **iterator** objects.
*	Generator Objects and _for...of_ --> Generator functions return objects that provide the same _next_ method expected by _for...of_, the _spread operator_, and the _destructuring assignment_.
*	Replacing Manual Iterator Objects --> Knowing how to **manually** craft an iterator object is important, but there's a **shorter** syntax.
*	Refactoring to Generator Functions --> Each time _yield_ is called, our function returns a **new iterator** object and then **pauses** until it's called again. 

















