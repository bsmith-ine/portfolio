export const STUDY_GUIDE: Record<
  string,
  { question: string; answer: string }[]
> = {
  Javascript: [
    {
      question: 'What is functional programming?',
      answer: `
      Functional Programming (FP) is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. In functional programming, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned as values.

      Key principles of Functional Programming include:

      Immutability: Once a piece of data is created, it cannot be changed. Instead of modifying existing data, functional programming encourages creating new data structures with the desired modifications.

      Pure Functions: Functions in FP are considered pure if they produce the same output for the same input and have no side effects. Pure functions are predictable and easier to reason about, test, and parallelize.

      First-Class and Higher-Order Functions: Functions can be assigned to variables, passed as arguments to other functions, and returned as values. Higher-order functions take one or more functions as arguments or return a function as a result.

      Referential Transparency: An expression is said to be referentially transparent if it can be replaced with its value without changing the program's behavior. This property makes code more understandable and facilitates reasoning about programs.

      Function Composition: Functions can be combined to create new functions. This promotes code reusability and the construction of complex functionality from simpler building blocks.

      Declarative Programming: FP emphasizes expressing the logic of a computation without describing its control flow. Declarative code focuses on what should be achieved rather than how it should be achieved.
      `,
    },
    {
      question: 'What is OOP?',
      answer: `
      Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of "objects." It's a way of organizing and designing code to represent real-world entities and the interactions between them. In OOP, software design is based on the encapsulation of data (attributes or properties) and methods (functions or procedures) into objects.

      Key principles of Object-Oriented Programming include:

      Encapsulation: Encapsulation refers to the bundling of data and the methods that operate on that data into a single unit known as an object. This concept helps to organize and structure code, making it more modular and maintainable.

      Inheritance: Inheritance allows one class (the subclass or derived class) to inherit the properties and behaviors of another class (the superclass or base class). This promotes code reuse and the creation of a hierarchy of classes with shared characteristics.

      Polymorphism: Polymorphism enables objects of different types to be treated as objects of a common type. This is achieved through method overloading (multiple methods with the same name but different parameters) and method overriding (redefining a method in a subclass).

      Abstraction: Abstraction involves simplifying complex systems by modeling classes based on essential properties and behaviors. It allows developers to focus on what an object does rather than how it achieves its functionality.
      `,
    },
    {
      question: 'What is prototypal inheritance?',
      answer: `Allows objects to inherit properties and methods from other objects. JavaScript is a prototype-based language, which means that inheritance is achieved by linking objects together through their prototypes rather than through class hierarchies as in class-based languages.

      * Every object in JavaScript has a hidden property called [[Prototype]], which refers to another object (or null). This [[Prototype]] is also referred to as the object's prototype. Objects inherit properties and methods from their prototype.

      * Objects in JavaScript are organized in a prototype chain. When you access a property or method on an object, JavaScript looks for that property/method in the object itself. If it doesn't find it, it goes up the prototype chain and checks the object's prototype, and so on, until it either finds the property or reaches the end of the chain with a null prototype.

      * Constructor functions in JavaScript have a prototype property. When you create objects using these constructors with the new keyword, the new object's [[Prototype]] is set to the constructor's prototype.`,
    },
    {
      question: 'Pass by ref vs pass by value',
      answer: `In summary, "pass by value" means that a copy of the data is passed, and changes inside the function do not affect the original data. "Pass by reference" means that a reference to the original data is passed, and changes inside the function affect the original data. JavaScript exhibits a unique behavior with objects and arrays, where the reference to the data is passed by value, allowing changes to the data but not reassignment of the reference itself.`,
    },
    {
      question: 'What are primitive values?',
      answer: `Strings, Numbers, Booleans, Undefined, Null, and Symbols.
      Primitive types which represent single and immutable values are compared by their value, which means that two primitive values with the same content are considered equal. For example, "hello" and "hello" are equal, and 42 and 42 are equal.`,
    },
    {
      question: 'What are non-primitive values?',
      answer: `Non-primitive values are more complex data structures and can hold multiple values and methods. Non-primitive values are often referred to as reference types because they are stored by reference rather than by value. Objects, Arrays, Function, Date, RegExp, Map, Set`,
    },
    {
      question: 'What are pure functions?',
      answer: `A pure function is a function that produces the same output value for the same input values and has no observable side effects. This definition can be broken down into two key characteristics: Deterministic and No side effects. `,
    },
    {
      question: 'What are the benefits of pure functions?',
      answer: `Predictability: Pure functions are easy to reason about because their behavior is entirely determined by their inputs. This predictability simplifies debugging and testing.

      Testability: Since pure functions have no side effects, testing them is straightforward.

      Immutability: Pure functions encourage the use of immutable data structures, which helps prevent unintended changes to data and simplifies concurrent programming.

      Memoization: Pure functions are ideal candidates for memoization, where you can cache the results of function calls for the same inputs to improve performance.

      Parallelization: Because pure functions have no dependencies on external state, they can be executed in parallel without concerns about shared state.`,
    },
    {
      question: 'What are the differences between a Map and an Object?',
      answer: `Maps and objects in JavaScript are both used to store collections of key-value pairs, but they have some key differences in terms of their characteristics and use cases:
      Key Types - Objects can only be strings or symbols (primitive type) and Map key can be of any type.
      Key Order - Objects do not guarantee order for their properties. Maps maintain their order.
      Iteration - Objects do not have a built in iterator, must use Object.keys/values/entries. Maps provide built in methods for iterating over their entries such as map.keys(), map.values(), map.entries()
      Size - The num of properties in an object must be manually counted. Maps have a built in size property.

      In summary, Maps are more versatile when it comes to keys, offer ordered iteration, and have built-in methods for working with key-value pairs. Objects, on the other hand, are commonly used for more general purposes, and their keys are limited to strings or symbols. Your choice between Maps and objects depends on the specific requirements of your application and the characteristics you need for your data structure.
      `,
    },
    {
      question: 'What are the differences between a Set and an Array?',
      answer: `Sets and arrays in JavaScript are both used to store collections of values, but they have distinct characteristics and use cases. Here are the key differences between them:
      Duplicate Values - Arrays allow duplicate values, Sets do not.
      Order - Arrays are ordered collections, sets are unordered.
      Indexing - You can access elements in arrays using numeric indicies such as myArray[0], Sets do not support indexing or direct access to elements by position, you must iterate over the set to access its values.
      Methods - Arrays have a wide range of built-in methods for adding, removing, and manipulating elements. Sets provide methods for adding and deleting elements (add(), delete()) and for checking if an element exists (has()). Sets also have methods for set operations like union, intersection, and difference.
      Use Cases - Arrays are commonly used when you need an ordered collection with the potential for duplicate values and when you want to access elements by index. They are versatile and suitable for a wide range of scenarios. Sets are used when you need a collection of unique values, and the order of elements does not matter. They are particularly useful for tasks that involve eliminating duplicates or checking for the presence of specific values.

      In summary, arrays are ordered collections that allow duplicate values and provide easy indexing and manipulation of elements. Sets, on the other hand, are unordered collections of unique values and are suitable for scenarios where uniqueness and order are not significant. Your choice between them depends on the specific requirements of your application and the nature of the data you need to store.
      `,
    },
    {
      question: 'What is the callstack?',
      answer:
        'The call stack in JavaScript is a fundamental data structure used for managing the execution context of functions and tracking the order in which functions are called and returned. It plays a crucial role in understanding how JavaScript manages function calls and handles the call stack frame by frame.',
    },
    {
      question: 'What is event propagation?',
      answer: `Event propagation is the over arching term for event capturing and event bubbling.
      Event Capturing Phase: During the event capturing phase, the event starts at the root of the DOM hierarchy, which is typically the document object, and then travels down through the hierarchy of ancestor elements toward the target element. It descends from the root element through its parent elements, then their parent elements, and so on.

      Target Element: Once the event reaches the target element that originally triggered the event, it enters the target phase. This is where event handlers registered on the target element itself are executed.

      Event Bubbling Phase: After the target phase, the event proceeds to the event bubbling phase, where it starts to bubble up through the hierarchy from the target element, passing through its parent elements, and continuing up to the root element (document). During this phase, event handlers on each element along the propagation path have an opportunity to respond to the event. `,
    },
    {
      question: 'What is event capturing?',
      answer: `
      During the event capturing phase, the event starts at the root of the DOM hierarchy, which is typically the document object, and then travels down through the hierarchy of ancestor elements toward the target element. It descends from the root element through its parent elements, then their parent elements, and so on.
      `,
    },
    {
      question: 'What is event bubbling?',
      answer: `During the bubbling phase, each element along the propagation path has the opportunity to respond to the event by executing event handlers registered on those elements. Event handlers can be functions that perform specific actions in response to the event, such as changing the content of an element, toggling a CSS class, or triggering other JavaScript functions. Event bubbling allows you to capture events at higher levels of the DOM hierarchy, making it easier to handle events for multiple elements with a common ancestor. It simplifies event delegation and can lead to more efficient event handling.
      `,
    },
    {
      question: 'Explain the concept of "hoisting" in JavaScript.',
      answer: `Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation. This means that you can use variables and functions before they are declared, but they will be initialized with undefined until their declarations are encountered in the code.`,
    },
    {
      question: 'Function Declaration',
      answer: `
        Syntax: Function declarations start with the "function" keyword followed by the function name, parameters enclosed in parentheses, and the function body enclosed in curly braces.
        Hoisting: Function declarations are hoisted, meaning they can be used before they are declared in the code.
        Use Case: Function declarations are suitable for creating reusable functions that are intended to be used throughout your code.
      `,
    },
    {
      question: 'Function Expression',
      answer: `
        Syntax: Function expressions define functions as part of an expression. They can be named or anonymous. If named, the function name is only available inside the function.
        Not Hoisted: Function expressions are not hoisted, so you cannot use them before they are declared.
        Use Case: Function expressions are often used to define functions within other functions or as values assigned to variables, making them suitable for conditional or dynamic function creation.
      `,
    },
    {
      question: 'Arrow Function Expression',
      answer: `
        Syntax: Arrow functions have a more concise syntax. They don't have their "this" context and are always anonymous. They use the arrow (=>) notation.
        Not Hoisted: Like function expressions, arrow functions are not hoisted.
        Use Case: Arrow functions are suitable for short, single-expression functions, especially when you want to maintain a concise and clean code style. They are also commonly used in ES6 for callback functions and functions that need to capture the "this" value from their lexical scope.
      `,
    },
    {
      question:
        'Describe the concept of the "this" keyword in JavaScript and how it behaves in different contexts.',
      answer: `The this keyword refers to the current execution context in JavaScript. Its value depends on how and where a function is called:

      In a regular function, this is determined by the function's caller.
      In an arrow function, this is lexically scoped and retains the value of this from its surrounding code.`,
    },
    {
      question:
        'What is a generator function, and how does it differ from a regular function?',
      answer: `A generator function is a special type of function in JavaScript that allows you to pause and resume its execution. It's defined using an asterisk (function*). When a generator function is called, it returns an iterator object that can be used to control the flow of execution using the yield keyword.`,
    },
    {
      question: 'What is the purpose of the bind() method in JavaScript?',
      answer: `The bind() method allows you to create a new function with a specified this value and initial arguments. It's commonly used to set the context (the value of this) for a function, especially in event handlers and callback functions.`,
    },
    {
      question:
        'What is the difference between null and undefined in JavaScript?',
      answer: `null represents an intentionally missing value or absence of an object value. undefined represents a variable that has been declared but has not been assigned a value, or a non-existent object property.`,
    },
    {
      question:
        'Explain the differences between let, const, and var in terms of variable declaration in ES6.',
      answer: `var has function scope and can be re-declared within the same function.
      let and const have block scope and cannot be re-declared within the same block.
      const is used for variables that should not be reassigned after declaration, while let allows reassignment.`,
    },
    {
      question: 'Explain async/await',
      answer: `async/await is a powerful and concise way to work with asynchronous code in JavaScript. It provides a more readable and structured approach to handling asynchronous operations compared to traditional callback functions and promises. async/await is built on top of the Promise API and makes asynchronous code appear more like synchronous code, improving code clarity and maintainability.`,
    },
    {
      question:
        'Explain Promises and the role they play in asynchronous JavaScript.',
      answer:
        'Promises are objects that represent the eventual completion or failure of an asynchronous operation. A Promise is a proxy for a value not necessarily known when the promise is created. They provide a more structured way to handle asynchronous code compared to callbacks. Promises have three states: pending, resolved (fulfilled), and rejected. Developers can attach .then() and .catch() handlers to handle successful and failed outcomes of asynchronous tasks.',
    },
    {
      question:
        'What are some differences between promise.all and promise.allSettled?',
      answer: `In summary, Promise.all is used when you need all promises to succeed for the overall operation to succeed and when you want to short-circuit on the first rejection. Promise.allSettled is used when you want to monitor the status and results of all promises, regardless of whether they fulfill or reject, and when you don't need the operation to fail immediately upon a single rejection. The choice between them depends on the specific requirements of your asynchronous task.`,
    },
    {
      question: 'What is a constructor function?',
      answer:
        'A constructor function in JavaScript is a special type of function that is used to create and initialize objects. Constructor functions are often used as templates or blueprints for creating multiple objects of the same type. ',
    },
    {
      question: 'What is a closure?',
      answer:
        "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. Closures are important because they allow for data encapsulation, private variables, and the creation of functions with persistent state.",
    },
    {
      question: 'What is a stale closure?',
      answer:
        'The stale closure problem occurs when a closure captures outdated variables. An efficient way to solve stale closures is to correctly set the dependencies of React hooks.',
    },
    {
      question: 'What is the Event Loop?',
      answer:
        'Allows JS to perform non-blocking async operations despite being a single threaded language giving the illusion of multi-threading. Whenever an async function is called, it is sent to the event queue in the browser API. The event loop then checks whether the call stack is empty and adds any events in the queue that were offloaded from the main thread.',
    },
    {
      question: 'What is the temporal dead zone?',
      answer:
        "Describes the state where variables are un-reachable. They are in scope, but they aren't declared. The let and const variables exist in the TDZ from the start of their enclosing scope until they are declared. Let, Const and Var are all hoisted - Vars are hoisted and initialized which is why we see “undefined” when evaluating a var before it's declared and a reference error when evaluating a const/let.",
    },
    {
      question: 'What is the super keyword used for?',
      answer:
        'The super keyword in JavaScript is used in order to call the methods of the parent class. By itself, super() is used within a constructor function to call the parent constructor function.',
    },
    {
      question: 'Bind vs Call vs Apply',
      answer: `Use bind when you want to create a new function with a fixed this context that you can call later.
      Use call when you want to invoke a function immediately with a specific context and individual arguments.
      Use apply when you want to invoke a function immediately with a specific context and an array (or array-like object) of arguments.
      These methods are handy for controlling function context and argument passing in JavaScript, especially in scenarios involving object-oriented programming, callbacks, and event handling.`,
    },
    {
      question: 'What is a callback function?',
      answer: `A callback function is a function passed into another function as an argument. The callback function is then invoked inside the callee to complete an action.`,
    },
    {
      question: 'What is the nullish coalescing operator?',
      answer: `Nullish coalescing is a JavaScript logical operator represented by two question marks (??). Nullish coalescing is an operator that returns the first “defined” value. “defined” here refers to an expression whose value is neither null nor undefined.`,
    },
    {
      question: 'What is a spread operator',
      answer: `Spread operator allows iterables such as arrays, objects, and strings to be expanded into single arguments. The spread operator is denoted by three dots (...) followed by the variable to be expanded.`,
    },
    {
      question: 'What is the rest parameter',
      answer: `The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. The rest operator puts the contents of the variable after the rest operator into an array (rest parameter can only be used as the last parameter of a function).`,
    },
    {
      question: 'What are logical operators?',
      answer:
        'There are 4 logical operator in JS - OR, AND, NOT, and nullish coalescing.',
    },
    {
      question: 'What is memoization?',
      answer: `Memoization is an optimization technique that speeds up your code by storing the results of expensive function calls and reusing the stored result when the same input occurs again. An expensive function refers to functions that consume a lot of resources (time and memory) during their execution due to heavy computation.`,
    },
    {
      question: 'What is function currying?',
      answer: `Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c). In other words, currying a function means the function takes one argument at a time and returns a new function expecting the next argument. Instead of taking all arguments at the same time, currying decomposes the function into a sequence of functions with a single argument.`,
    },
    {
      question: 'What is typecasting?',
      answer: `Typecasting or coercion means to change the data type of a value to another data type. For example, a conversion from a string to an integer or vice versa. There are three typecasts provided by JavaScript:

      Boolean(value): Casts the input value to a boolean value
      Number(value): Casts the input value to a float or integer value
      String(value): Casts the input value to a string`,
    },
    {
      question: 'What is a microtask?',
      answer: `A priority asynchronous task that is executed after the call stack is empty but before the next task from the event loop's task queue is executed. Microtasks are typically used for high-priority, non-blocking operations that need to be performed as soon as possible without blocking the main thread. Promises, .then, .catch, Mutation Observers`,
    },
    {
      question: 'What is a higher order function?',
      answer: `Functions that can take other functions as arguments or return functions as their results. They are a fundamental concept in functional programming and provide a powerful way to work with functions and data. Higher-order functions enable you to abstract and compose functionality, making your code more modular and expressive.`,
    },
    {
      question: 'What are the different types of native errors in JavaScript?',
      answer: `Error, SyntaxError, ReferenceError, TypeError, RangeError, URIError`,
    },
    {
      question:
        'What is the difference between attributes and properties in JavaScript?',
      answer: `Attributes are part of the HTML markup and define the initial state of an element, while properties are JavaScript objects that allow you to interact with and manipulate the current state of an element in the DOM. Although attributes and properties often have the same name, they serve different purposes and should be used accordingly when working with the DOM in JavaScript.`,
    },
    {
      question:
        'What are the main differences between a forEach loop and a map loop?',
      answer: `forEach is primarily used for iterating and performing actions on array elements without creating a new array, while map is used for creating a new array by applying a function to each element in the original array. The choice between them depends on your specific use case and whether you need to transform data or just perform actions on it.`,
    },
    {
      question: 'How do you compare two objects in JavaScript?',
      answer: `Comparing two objects in JavaScript can be a bit tricky because objects are reference types, and comparing them directly with == or === will check if they reference the same object in memory, not if their properties/values are the same. To compare the contents of two objects, you typically need to perform a deep comparison by comparing their properties recursively. Using a library or custom deep equal comparison function`,
    },
    {
      question: `What does the instanceof operator do?`,
      answer: `The instanceof operator checks whether the prototype property of a constructor appears anywhere in the prototype chain of an object. In other words, the instanceof operator checks if the object is an instance of a class or not at run time.`,
    },
    {
      question: 'How do you create a shallow copy of an object?',
      answer: `A shallow copy of an object creates a new object, but it only copies the references to the nested objects or properties of the original object. In other words, the top-level properties of the copied object are new, but the nested objects are still references to the same objects as the original.

      There are two main ways to create a shallow copy of an object in JavaScript:
      1. Using the spread operator
      2. Using Object.assign
      `,
    },
    {
      question: 'How does JavaScript garbage collector work?',
      answer: `JavaScript employs automatic memory management through a mechanism known as a garbage collector. The primary purpose of the garbage collector is to identify and reclaim memory that is no longer in use, preventing memory leaks and ensuring efficient memory utilization`,
    },
    {
      question: 'What is a proper tail call?',
      answer: `a specific type of function call that occurs as the last operation in a function before it returns a result. In a proper tail call, the return value of the calling function is directly determined by the return value of the called function, without any additional work or computation required in the calling function after the call.`,
    },
    {
      question: 'What is the purpose of queueMicrotask?',
      answer: `JavaScript has a task queue and a microtask queue. The task queue includes tasks like script execution, rendering, and handling user interactions. The microtask queue is used for shorter, higher-priority tasks. queueMicrotask allows you to schedule a function to run in the microtask queue.`,
    },
    {
      question: 'Shim vs polyfill',
      answer: `A shim provides a consistent interface or behavior for a feature that may be missing or behave differently in certain browsers.
      A polyfill is a specialized type of shim that specifically targets older browsers, providing modern functionality by emulating the missing feature or API.`,
    },
    {
      question: 'What is preventDefault?',
      answer: `preventDefault allows you to intercept default actions and implement custom behavior, giving you greater control over how your web pages and applications respond to user interactions. Prevent form submissions, link navigation, or scrolling`,
    },
    {
      question: 'What is a proxy object?',
      answer: `Proxies provide a powerful way to create custom behavior for objects, making them useful for tasks like validation, logging, memoization, and more.`,
    },
    {
      question: 'What are JavaScript accessors?',
      answer: `Also known as getters and setters, are a pair of special methods that allow you to define the behavior for reading and writing the values of an object's properties. They provide a way to encapsulate and control access to an object's data by defining custom logic when getting and setting property values. Accessors are used to ensure data consistency, validation, or to add additional behavior when interacting with object properties.`,
    },
    {
      question: 'What is the difference between Object.freeze() and const?',
      answer: `A variable declared with the const keyword can't be assigned a new value.
      Object.freeze(), on the other hand, makes the contents of the object immutable. You can't modify the properties in the object.
      `,
    },
    {
      question: 'What is Strict mode in JavaScript?',
      answer: `Strict mode is a mode in JavaScript to enforce stricter parsing and error handling on your JavaScript code.

      The main benefit of using strict mode is catching errors early and making debugging your code easier. Common errors such as assigning a value to an undeclared variable would throw an error in strict mode alerting you that there is something wrong in your code.`,
    },
    {
      question:
        'What is the difference between local storage and session storage?',
      answer: `Data stored in local storage is only cleared when removed explicitly through the browser's settings or programmatically by the application and can be accessed cross tabs. Data stored in session storage gets cleared when the page session ends. A page session lasts as long as the tab or browser is open and persists between page reloads and restores.`,
    },
    {
      question: 'What is the difference between a promise and an observable?',
      answer: `
      Promises and Observables are both used for handling asynchronous operations in JavaScript, but they have distinct differences in terms of their functionality and use cases.

      Promises:

      Single Value: A Promise represents a single value that may be available now, or in the future, or never.
      Eager: Promises are eager, meaning they start executing as soon as they are created. This behavior can lead to some limitations, especially when dealing with cancelation.
      Non-cancelable: Promises cannot be canceled once initiated. You can't abort an operation initiated by a Promise.
      Single Emission: A Promise either resolves with a value (fulfilled) or rejects with an error (rejected), but not both.
      Error Handling: Promises have a .then() method for handling success and a .catch() method for handling errors.
      Built-in: Promises are built into JavaScript and widely supported in modern browsers and Node.js.

      Observables (from RxJS or other libraries like redux-observable):

      Stream of Values: Observables represent a stream of values that can be emitted over time. They can emit multiple values asynchronously.
      Lazy: Observables are lazy, meaning they don't start executing until you subscribe to them. This allows for more control over when and how they start.
      Cancelable: Observables are cancelable. You can unsubscribe to stop receiving values from an Observable. This makes them suitable for scenarios where you want to cancel an ongoing operation.
      Multiple Emissions: Observables can emit multiple values over time, including errors, and can be used for scenarios like data polling, event handling, and more.
      Rich Operators: Observables provide a wide range of operators (e.g., map, filter, mergeMap, switchMap) for manipulating, combining, and transforming data within the stream.
      Not Built-in: Observables are not built into JavaScript but are provided by libraries like RxJS. You need to include the library in your project to use Observables.

      In summary, Promises are suitable for handling single asynchronous operations that resolve with a single value or reject with an error. Observables, on the other hand, are more versatile and are used for handling streams of values over time, making them well-suited for scenarios involving real-time data, events, and complex transformations. The choice between Promises and Observables depends on the specific requirements of your asynchronous operations.
      `,
    },
    {
      question: 'What is XSS?',
      answer: `
      XSS, or Cross-Site Scripting, is a type of security vulnerability in web applications where an attacker injects malicious scripts (typically JavaScript) into content that is then served to other users. These scripts can be executed in the context of the victim's browser, potentially compromising the user's session, stealing data, or performing actions on the user's behalf without their consent. To prevent XSS attacks, web developers should implement proper input validation, output encoding, and other security measures like Content Security Policy (CSP) headers to restrict the sources from which content can be loaded. Additionally, security practices such as escaping user-generated content and using secure coding standards can help mitigate the risk of XSS vulnerabilities.`,
    },
    {
      question: 'Weak map',
      answer: `
      A WeakMap is a collection of key-value pairs where the keys are objects, and the values can be arbitrary data.
      The key-object pairs in a WeakMap are weak references, meaning that they do not prevent the objects used as keys from being garbage collected when no other references to them exist.
      This makes WeakMap useful for scenarios where you need to associate metadata with objects but want the metadata to be automatically cleared when the associated objects are no longer in use.


      In JavaScript, WeakMap and WeakSet are two specialized data structures that allow you to store weak references to objects. These structures are particularly useful when you want to associate data with objects in a way that doesn't prevent those objects from being garbage collected when they are no longer needed.
      `,
    },
    {
      question: 'Weak set',
      answer: `A WeakSet is a collection of objects, and it only allows you to store objects. The objects in a WeakSet are also weakly referenced.
      Similar to WeakMap, the objects in a WeakSet do not prevent those objects from being garbage collected when no other references exist. This is useful for maintaining a set of objects without preventing their disposal by the garbage collector.


      In JavaScript, WeakMap and WeakSet are two specialized data structures that allow you to store weak references to objects. These structures are particularly useful when you want to associate data with objects in a way that doesn't prevent those objects from being garbage collected when they are no longer needed.
      `,
    },
    {
      question: 'What is RESTful API?',
      answer: `REST is a design philosophy for web interfaces to make them scalable and predictable.`,
    },
    {
      question: 'What is a Web Hook?',
      answer: `A webhook is a mechanism used in web development and web services to enable real-time communication and data transfer between different applications or systems. It allows one application to send data or events to another application as soon as they occur, rather than relying on periodic or manual requests for updates. Webhooks are often used for various purposes, including automation, integration, and notification systems.
      Webhooks are designed to trigger actions or notifications in response to specific events or data changes. For example, when a user submits a form on a website, a webhook can be used to notify another system to process the form data. Webhooks typically use HTTP/HTTPS protocols for communication.
      `,
    },
    {
      question: 'What is a web socket?',
      answer: `A WebSocket is a communication protocol that provides full-duplex, bidirectional communication channels over a single, long-lived connection. It is designed to enable real-time, low-latency, interactive communication between a client (typically a web browser) and a server. Unlike traditional HTTP communication, which relies on request-response cycles, WebSockets establish a persistent, low-overhead connection that allows data to flow in both directions at any time.`,
    },
    {
      question: 'Webhook vs websocket?',
      answer: `The key differences between Webhooks and Websockets are the communication direction, connection type, protocol, and use cases. Webhooks are suitable for one-way, event-driven notifications, while Websockets provide full-duplex, persistent communication for real-time interactions and bidirectional data flow. The choice between the two depends on the specific requirements of your application, whether it's a need for one-way notifications or two-way real-time communication.`,
    },
  ],
  Typescript: [
    {
      question: 'What is Typescript?',
      answer:
        'Typescript is a superset of JS that allows you to strongly type your code which can lead to catching bugs at compile time and describing shapes of objects within your code.',
    },
    {
      question: 'Benefits of TS?',
      answer:
        'Better tooling and intellisense with IDEs, Scalability and maintability of codebase by describing shapes of objects and call signatures of functions offering better readability and documentation.',
    },
    {
      question: 'What are interfaces',
      answer: `Interface are a way to describe data shapes.`,
    },
    {
      question: 'How do you create a new type using a subset of an interface?',
      answer: `TypeScript has a utility type called omit that lets you construct a new type by passing a current type/interface and selecting the keys to be excluded from the new type.`,
    },
    {
      question: 'How do “enums” work in TypeScript?',
      answer: `Are a means of defining a set of named constants. These data structures have a constant length and contain a set of constant values. Enums in TypeScript are commonly used to represent a set number of options for a given value using a set of key/value pairs. Bodyguard for your object. Under the hood, TypeScript translates enums into plain JavaScript objects after compilation. This makes the use of enums more favorable compared to using multiple independent const variables. The grouping that enums offer makes your code type-safe and more readable.`,
    },
    {
      question: 'What access modifiers are supported by TypeScript?',
      answer: `
      There are three types of access modifiers in TypeScript: public, private, and protected.
      public: All properties and methods are public by default. Public members of a class are visible and accessible from any location.
      protected: Protected properties are accessible from within the same class and its subclass. For example, a variable or method with the protected keyword will be accessible from anywhere within its class and within a different class that extends the class containing the variable or method.
      private: Private properties are only accessible from within the class the property or method is defined.
`,
    },
    {
      question: 'What are generics and how to use them in TypeScript?',
      answer: `
      Generics in TypeScript are a feature that allows you to create flexible, reusable, and type-safe components, functions, or classes by enabling you to work with a variety of data types while preserving type information. Generics are especially valuable when you want to write code that is not tied to a specific data type but can be applied to a range of types. reverseArray<T>(array: T) => {} -- reverseArray<number>()
      `,
    },
    {
      question: 'When should you use the unknown type?',
      answer: `unknown is a special type that is similar to any. Like any, a common use case of the unknown type is when you don't know the exact type upfront. unknown variables accept any value. However, when trying to operate on an unknown variable, TypeScript requires a type check or a type assertion.`,
    },
    {
      question: 'What is noImplicitAny and what is its purpose?',
      answer: `noImplicitAny is a property in a TypeScript project's configuration file (tsconfig.json) that modifies how TypeScript's compiler handles your project's implicit any types.
        When the noImplicitAny flag is false (by default), the compiler doesn't infer the variable type based on how it's used. Instead, the compiler defaults the type to any.

        On the other hand, when the noImplicitAny flag is true, the compiler will attempt to infer the type, throwing a compile-time error if the compiler isn't able to infer the type.
      `,
    },
    {
      question: 'What are conditional types in TypeScript?',
      answer: `Conditional types in TypeScript are similar to ternary operators. As the name suggests, it assigns a type to the variable based on a condition.`,
    },
    {
      question: 'What is the difference between union and intersection types?',
      answer: `A union type is described as a type that can be one of several types. Intersection on the other hand, is described as a type that combines multiple types into one - combining all the properties of each type to create a new type.`,
    },
    {
      question:
        'What is the difference between extends and implements in TypeScript?',
      answer: `When a class extends another class, the child class will inherit all the properties and methods of the class it extends. When a class implements another class or interface, the class has to implement all the methods and properties from the implemented class or interface. The implements keyword acts as a contract that the class has to follow, and TypeScript will make sure that the class is of the same shape as the class or interface it implements.`,
    },
    {
      question: 'Explain how optional chaining works in TypeScript.',
      answer: `Optional chaining uses the question mark followed by a period (?.) as its operator. TypeScript evaluates each reference in the chain and performs a null or undefined check before accessing its children. TypeScript immediately stops the execution when it fails the null or undefined check and returns undefined for the entire chain.`,
    },
    {
      question: 'What are abstract classes?',
      answer: `Abstract classes specify a contract for the objects without the ability to instantiate them directly. However, an abstract class may also provide implementation details for its members. abstract class Vehicle`,
    },
    {
      question: 'What are type assertions in TypeScript?',
      answer: `Type assertion allows you to explicitly set the type of a value and tell the compiler not to infer it. This is useful when you know the type of an object more specifically than its current type or current inferred type. In such cases, you can use type assertions to tell TypeScript the current type of the variable.
      `,
    },
    {
      question:
        'What is the difference between type inference and contextual typing?',
      answer: `TypeScript can infer the type of a variable usually based on the variable's initialization or declaration. This process is known as type inference. Contextual typing is a subset of type inference where TypeScript uses the location or context of a variable to infer its type. You can think about this as type inference in the opposite direction.`,
    },
    {
      question: 'How does function overloads work in TypeScript?',
      answer: `Function overloading helps make functions more flexible and reusable by allowing the same function to behave a different way based on the set of input passed in. Function overload is when the same function name is used multiple times with a different set of arguments - the number of arguments, types, or return types.`,
    },
  ],
  Authorization: [
    {
      question: 'What is AuthN',
      answer: `
      "AuthN" stands for "Authentication." It is the process of verifying the identity of a user or system trying to access a resource. Authentication answers the question, "Who are you?"
      Common methods of authentication include username and password, biometrics (such as fingerprint or facial recognition), multi-factor authentication (MFA), and single sign-on (SSO) systems.
      The goal of authentication is to ensure that only authorized users or entities gain access to a system or resource.`,
    },
    {
      question: 'What is AuthZ',
      answer: `
      "AuthZ" stands for "Authorization." It is the process of determining what actions or resources an authenticated user or system is allowed to access. Authorization answers the question, "What are you allowed to do?"
      Authorization is typically based on the permissions and roles associated with the authenticated user or entity. For example, an authenticated user may have read-only access, while an admin has full access.
      Access control lists (ACLs), role-based access control (RBAC), and attribute-based access control (ABAC) are common methods for implementing authorization.
      `,
    },
    {
      question:
        'What are the common types of authorization flows used in web applications?',
      answer: `
      Implicit Flow
      Authorization Code Flow
      Resource Owner Password Credentials Flow
      Client Credentials Flow
      `,
    },
    {
      question: 'Explain the Implicit Flow in OAuth 2.0.',
      answer: `
      The Implicit Flow is used for client-side applications (e.g., JavaScript-based applications) and is designed for scenarios where the client cannot keep a client secret. It involves the user being redirected to the authorization server to grant permissions, and the access token is returned directly in the URL fragment.
      `,
    },
    {
      question: 'Describe the Authorization Code Flow in OAuth 2.0.',
      answer: `
      The Authorization Code Flow is one of the most secure flows in OAuth 2.0. It involves the client first obtaining an authorization code, which is then exchanged for an access token and, optionally, a refresh token. This flow is typically used for server-side applications and requires the client to keep its client secret confidential.
      `,
    },
    {
      question: 'What is the role of a refresh token in an authorization flow?',
      answer: `
      A refresh token is used to obtain a new access token after the original access token has expired. It allows for continuous access without requiring the user to log in again. It is often used to maintain long-lived sessions.
`,
    },
    {
      question: 'How does Single Sign-On (SSO) relate to authorization flows?',
      answer: `
      Single Sign-On is a system that enables a user to access multiple applications with a single set of credentials. Authorization flows can be used in SSO systems to authenticate a user once and then obtain access tokens for various applications without the need to enter credentials repeatedly.
      `,
    },
    {
      question:
        'What is the role of JSON Web Tokens (JWTs) in authorization flows?',
      answer: `
      JWTs are often used to represent access tokens in authorization flows. They are self-contained, digitally signed tokens that can carry claims about the user and their permissions. JWTs are a popular choice for secure data transfer in authorization processes.
      `,
    },
    {
      question: 'Refresh token vs silent renew',
      answer: `
      Both refresh tokens and silent renew are mechanisms to maintain continuous access without requiring the user to log in again, they serve different purposes. Refresh tokens are a standard mechanism to obtain new access tokens when the old ones expire, while silent renew is a technique used to proactively renew an access token before it expires, providing a seamless user experience. Silent renew is often used in Single Sign-On (SSO) and Single Log-Out (SLO) scenarios to keep the user's session alive without noticeable interruptions
      `,
    },
  ],
  Docker: [
    {
      question:
        'What is Docker, and how does it differ from traditional virtualization?',
      answer: `
      Docker is a containerization platform that allows applications and their dependencies to be packaged into containers. Unlike traditional virtualization, Docker containers share the host OS kernel, which makes them lightweight and efficient.
      `,
    },
    {
      question: 'What are the key components of Docker architecture?',
      answer: `
      Docker architecture consists of the Docker Engine (Docker Daemon and Docker Client), Docker Images, Docker Containers, and Docker Registry.
      `,
    },
    {
      question: 'Explain the purpose of a Docker image.',
      answer: `
      A Docker image is a read-only template that contains the application and its dependencies. It is used to create Docker containers.
      `,
    },
    {
      question: 'What is a Dockerfile, and how is it used?',
      answer: `
      A Dockerfile is a text file that contains instructions for building a Docker image. It defines the application, its dependencies, and the execution environment.
      `,
    },
    {
      question: 'Explain the purpose of a Docker Compose file.',
      answer: `
      A Docker Compose file defines a multi-container application, its services, network, and volumes. It allows you to manage and run multi-container applications with a single command.
      `,
    },
    {
      question: 'Explain the concept of Docker volumes.',
      answer: `
      Docker volumes are used to persist data between containers and ensure data durability. They can be mounted to container paths for data storage.
      `,
    },
    {
      question:
        'What is the difference between a Docker container and an image?',
      answer: `
      An image is a read-only template, while a container is a running instance of an image. Containers can be created from images.
      `,
    },
    {
      question: ' Explain the differences between Docker and Kubernetes.',
      answer: `
      Docker is a containerization platform, while Kubernetes is an orchestration platform for managing containerized applications. Kubernetes provides features for scaling, load balancing, and more.
      `,
    },
    {
      question: 'What is a micro frontend?',
      answer: `
      A micro frontend is an architectural approach and development technique that extends the principles of microservices to the frontend of a web application. It involves breaking down a complex monolithic frontend into smaller, independently deployable and maintainable parts, which are often referred to as "micro frontends. Micro frontends offer several advantages, such as improved development velocity, flexibility, and maintainability. However, they also introduce challenges related to orchestration, communication between micro frontends, and ensuring a consistent user experience."
      `,
    },
  ],
  'Data Structures': [
    {
      question: 'What are the fundamental data structures in JavaScript?',
      answer: `The fundamental data structures in JavaScript include arrays, objects, strings, numbers, booleans, and functions.`,
    },
    {
      question: 'Explain the differences between a stack and a queue.',
      answer: `
      A stack is a data structure that follows the Last-In-First-Out (LIFO) principle, where the last element added is the first to be removed. A queue, on the other hand, follows the First-In-First-Out (FIFO) principle, where the first element added is the first to be removed.
      `,
    },
    {
      question: 'How would you implement a queue in JavaScript?',
      answer: `
      A queue can be implemented in JavaScript using an array or by creating a custom class with methods for enqueue and dequeue operations.
      `,
    },
    {
      question: 'What is a hash table and why is it useful?',
      answer: `
      A hash table is a data structure that stores key-value pairs. It uses a hash function to map keys to specific locations in memory, making it efficient for fast data retrieval.
    `,
    },
    {
      question: 'Explain the concept of a linked list.',
      answer: `
      A linked list is a linear data structure where elements, called nodes, are connected in a sequence. Each node contains data and a reference (or pointer) to the next node in the sequence.
      `,
    },
    {
      question: 'What is a binary search tree (BST) and how does it work?',
      answer: `
      A binary tree is a hierarchical data structure in computer science that consists of nodes connected by edges. Each node in a binary tree has at most two children, referred to as the left child and the right child. Binary trees are used in various applications, such as representing hierarchical structures and for efficient data retrieval and searching.
      `,
    },
    {
      question: 'How can you implement a stack using an array in JavaScript?',
      answer: `
      You can implement a stack using an array by using the push method to add elements to the top of the stack and the pop method to remove elements from the top.
      `,
    },
    {
      question: 'What is a priority queue, and why is it useful?',
      answer: `
      A priority queue is a data structure that assigns a priority to each element and processes elements in order of their priority. It is useful in scenarios where certain elements need to be processed before others based on their importance or urgency.
      `,
    },
  ],
  React: [
    {
      question: 'What is React?',
      answer:
        'React is a Javascript library that is used for building composable user interfaces, especially for single-page applications. It is used for handling the view layer for web and mobile apps based on components in a declarative approach.',
    },
    {
      question: 'What is JSX?',
      answer:
        'JSX stands for JavaScript XML and is a syntax extension for JavaScript used in React to define the structure and layout of UI components. It allows you to write HTML-like code within your JavaScript files, making it easier to create and manage the user interface of your React applications.',
    },
    {
      question: 'What are the major features of React?',
      answer: `Virtual DOM, Unidirectional Data Flow, JSX, Declarative Syntax, Rich Ecosystem, Component based architecture.`,
    },
    {
      question: 'What are react components?',
      answer: `Components are the building blocks of creating User Interfaces(UI) in React. React components are self-contained, reusable pieces of user interface. They can be either functional or class-based and encapsulate their own logic and rendering.`,
    },
    {
      question: 'What is a react hook?',
      answer:
        'React hooks are a way to manage state and side effects in functional components. Hooks enable you to reuse stateful logic across different components and make functional components more powerful and expressive.',
    },
    {
      question: 'What is state in react?',
      answer:
        "State in React is a mechanism for managing and storing data within a component, allowing it to respond to user interactions, data changes, and other dynamic aspects of the application's UI. State helps in creating dynamic and interactive components that can update their rendering based on changing data or user actions. State updates in React are asynchronous for performance reasons. React may batch multiple state updates together to optimize rendering. If you need to perform an action after the state has been updated, you can pass a callback function as the second argument to setState.",
    },
    {
      question: 'What are props in react?',
      answer:
        'Props in React are a means of passing data and behavior from parent components to child components. They enable you to create dynamic and reusable components by allowing customization and configuration based on the data and functions passed from their parent components. Props are a fundamental concept for building modular and flexible React applications.',
    },
    {
      question: 'Explain the concept of Virtual DOM in React.',
      answer:
        'The Virtual DOM is an in-memory representation of the actual DOM. React uses it to optimize updates by comparing the Virtual DOM with the real DOM and applying minimal changes to the latter to improve rendering performance.',
    },
    {
      question:
        'What is the role of the key prop in React when rendering lists of elements?',
      answer:
        'The key prop is used to help React identify which items in a list have changed, been added, or been removed. It aids in efficient list rendering and updates.',
    },
    {
      question:
        'Explain the concept of props drilling in React and how to mitigate it.',
      answer: `Props drilling occurs when you pass props through multiple layers of nested components.
      To mitigate it, you can use React Context or a state management library like Redux to avoid passing props down manually.`,
    },
    {
      question:
        'What is the purpose of React Router, and how is routing achieved in React applications?',
      answer: `React Router is a library for handling client-side routing in React applications.
      Routing is achieved by defining routes and associating components with specific URLs using Route components.`,
    },
    {
      question:
        'What are controlled and uncontrolled components in React forms?',
      answer: `Controlled components are forms elements whose values are controlled by React state. They provide a predictable way to manage form input.
      Uncontrolled components are forms elements whose values are not controlled by React state. They are typically accessed through refs.`,
    },
    {
      question: 'What is the callback function used for in setState?',
      answer: `In React, the callback function used in the setState method is a function that gets executed after the state has been updated and the component has been re-rendered. It allows you to perform additional actions or tasks that rely on the updated state. The primary purpose of using a callback function with setState is to ensure that you're working with the most up-to-date state data.`,
    },
    {
      question: 'What are synthetic events in react?',
      answer: `In React, synthetic events refer to a cross-browser wrapper around the native browser events. React provides this abstraction to ensure consistent event handling and behavior across different web browsers.`,
    },
    {
      question: 'What are higher order components?',
      answer: `A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.`,
    },
    {
      question: 'What is context?',
      answer:
        'A dependency injection tool that provides a way to share data between components without having to pass props explicitly through the component tree. It is primarily used to manage and propagate global or application-level state and settings, making it easier to access this data throughout your component hierarchy.',
    },
    {
      question: 'What is reconciliation?',
      answer: `The process of updating the user interface to reflect changes in application state or component props. It is a fundamental part of React's rendering process, where React compares the previous state of the component's virtual DOM (Virtual Document Object Model) with the current state and determines what updates, if any, are needed to synchronize the UI with the latest data.`,
    },
    {
      question: 'What are react fragments?',
      answer: `Allows you to group multiple child elements within a single parent element without adding extra nodes to the HTML markup. Fragments are useful in situations where you want to group elements for rendering purposes without introducing additional DOM elements.`,
    },
    {
      question: 'What are react portals?',
      answer: `Provide a way to render a component's content outside of its parent's DOM hierarchy. They allow you to render a component's content at a different place in the DOM tree, typically at a higher level in the hierarchy or in a completely different part of the DOM.`,
    },
    {
      question: 'What are some limitations of react?',
      answer: `React is just a view library, not a full framework.
      There is a learning curve for beginners who are new to web development.
      Integrating React into a traditional MVC framework requires some additional configuration.
      The code complexity increases with inline templating and JSX.
      Too many smaller components leading to over engineering or boilerplate.`,
    },
    {
      question: 'What is the useState hook?',
      answer: `Allows you to add state management to functional components. It returns a state variable and a function to update that variable. You can use it to store and manage component-level state`,
    },
    {
      question: 'What is the useEffect hook?',
      answer: `Managing side effects in functional components, ensuring that your component behaves correctly and efficiently when interacting with external data sources and the DOM. Data fetching, DOM updates, Subscriptions (external data sources or web sockets), Timers & Intervals`,
    },
    {
      question: 'What is the useRef hook?',
      answer: `used for creating mutable references to DOM elements or to persist values across renders without causing re-renders when the reference changes. It provides a way to access and interact with DOM elements directly and can also be used to store and manage mutable values that do not trigger re-renders.`,
    },
    {
      question: 'What is the useContext hook?',
      answer: `Enables access to the context of a parent component, allowing you to share data and functions across components without manually passing props through intermediate components.`,
    },
    {
      question: 'What is the useReducer hook?',
      answer: `Is an alternative to useState for managing complex state logic. It's often used when the state transitions depend on the previous state or require more complex updates. Think of it as a finite state machine that should be utilized when 3+ state data are reliant on each other.`,
    },
    {
      question: 'What is the useImperativeHandle hook?',
      answer: `Allows you to customize the instance value that is exposed when using ref with a forwardRef component. It's useful for controlling the behavior of the ref object`,
    },
    {
      question: 'What are the useTransition and useDeferredValue?',
      answer: `Introduced in React 18, these hooks are used for creating smoother transitions and prioritizing updates in concurrent mode.`,
    },
    {
      question: 'What is suspense?',
      answer: `Manages asynchronous data fetching and rendering in a more declarative and user-friendly manner. React Suspense aims to simplify the handling of loading states, error handling, and code-splitting in React applications. Pair with React.lazy.`,
    },
    {
      question: 'What is the useCallback hook?',
      answer: `The primary purpose of useCallback is to memoize functions and prevent unnecessary re-creation of function instances when a component re-renders. It's useful when you need to pass functions as props to child components. By memoizing the function, you can prevent unnecessary re-renders of child components when the parent component re-renders.
      It's commonly used with event handlers and functions that are part of the component's state or effect dependencies.`,
    },
    {
      question: 'What is the useMemo hook?',
      answer: `The primary purpose of useMemo is to memoize values (not functions) and prevent the re-computation of expensive calculations or expensive object creations when a component re-renders. It's useful when you have a calculation that is computationally expensive, and you want to avoid recalculating it every time the component renders.
      It's often used for memoizing the results of complex computations, formatting data, or creating new objects that depend on certain inputs.`,
    },
    {
      question: 'useCallback vs useMemo summary',
      answer: `Use useCallback when you want to memoize functions to prevent unnecessary function re-creation and you're primarily concerned with optimizing function references.
      Use useMemo when you want to memoize values or object instances to prevent unnecessary recomputation of expensive calculations or object creations.
      Remember that both hooks should be used judiciously. Using them too aggressively can lead to over-optimization, which might make your code harder to understand. Use profiling tools and performance metrics to determine if and where these optimizations are necessary for your specific application.`,
    },
    {
      question: 'What is a compound component?',
      answer: `A compound component in React is a pattern used to create a set of interconnected components that work together to form a complex UI component. Unlike traditional components, where each component manages its own state and rendering logic, compound components share state and behavior among themselves while allowing developers to configure their appearance and behavior individually.`,
    },
    {
      question: 'useEffect vs useLayoutEffect',
      answer: `
      useEffect and useLayoutEffect are both hooks in React used for handling side effects in functional components. However, they differ in when they are executed during the component's lifecycle and whether they block rendering.

      useEffect is called asynchronously after rendering is committed to the screen. This means it runs after the render cycle is complete, and the DOM has been updated. Suitable for most scenarios, such as data fetching, setting up subscriptions, or performing DOM manipulations that don't impact layout.

      useLayoutEffect is called synchronously immediately after rendering but before the browser has painted the screen. This means it runs before the render cycle is complete and before any changes to the DOM are visible to the user. Use useLayoutEffect when you need to make changes that affect the layout of the DOM and need to be reflected immediately. For example, when you want to measure the size of an element, you'd use useLayoutEffect to ensure that you have access to accurate layout information before the browser repaints.
      `,
    },
    {
      question: 'What are refs?',
      answer: `Refs provide a way to access DOM nodes or React elements created in the render method.

      Refs act as an escape hatch to the regular React dataflow of passing props down a component tree. They are used to update the child component (including both React components and DOM elements) without passing in new props.`,
    },
    {
      question: 'What are stateless components?',
      answer: `Stateless components (a flavor of “reusable” components) are nothing more than pure functions that render DOM-based solely on the properties provided to them.`,
    },
    {
      question: 'What are the 4 stages a component goes through?',
      answer: `Each React component has its own lifecycle. Each stage of the lifecycle invokes a series of methods allowing us to perform specific tasks at a specific stage of the component's lifecycle. Understanding the different stages within a component's lifecycle enables us to use them effectively.

      Initialization - the component is constructed with the given props and default state
      Mounting - rendering the JSX returned by the render method
      Updating - when the state of a component is updated and the application is repainted
      Unmounting - the final stage of the component lifecycle where the component is removed from the DOM`,
    },
    {
      question: 'How is react different?',
      answer: `Component-Based Architecture, Virtual DOM, Declarative Syntax, 1 way data flow, JSX, Vast ecosystem, React Native, SSR, Optimizations.

      React focuses on the view layer of an application and can be combined with other libraries and tools to build full-featured web applications. It is very un-opinionated.`,
    },
    {
      question: 'When to choose React over Vue/Angular.',
      answer: `Factors such as the project's scale, complexity, timeline, and the skills of your development team should all influence your decision. Additionally, evaluating the strengths and weaknesses of each technology in the context of your project is crucial for making an informed choice. Specific ecosystem needs (specific library), Personal or team preferences, building PWAs with next or remix, State Management Freedom, Large ecosystem, etc.`,
    },
    {
      question:
        'What are some pitfalls of building a large scale application with react?',
      answer: `State management complexity, component prop drilling, performance optimizations, component/folder structure, global styles / theming, testing complexity, routing, SSR & SEO, Code splitting & lazy loading, documentation.`,
    },
    {
      question: 'What are some pitfalls of JSX?',
      answer: `Learning curve, build tool config, eslint config, HTML vs JSX diffs, Fragments, Complex expressions and overuse of JSX`,
    },
    {
      question: 'What are render props?',
      answer: `Render prop is a technique to share code between components by passing a function (the function should return an element) as the component's props. The component with the render prop can then use the element from the passed-in function in its render function to compose a new component.`,
    },
    {
      question: 'What is the flux pattern?',
      answer: `Flux is an architectural pattern that enforces unidirectional data flow — its core purpose is to control derived data so that multiple components can interact with that data without risking pollution.

      In the Flux pattern, the Store is the central authority for all data; any mutations to the data must occur within the store. Changes to the Store data are subsequently broadcast to subscribing Views via events. Views then update themselves based on the new state of received data.

      To request changes to any Store data, Actions may be fired. These Actions are controlled by a central Dispatcher; Actions may not occur simultaneously, ensuring that a Store only mutates data once per Action.

      The strict unidirectional flow of this Flux pattern enforces data stability, reducing data-related runtime errors throughout an application.`,
    },
    {
      question: 'Flux vs MVC',
      answer: `With an MVC architecture, the data contained within the Model is shared between both the master and detail Views. Each of these views might have its own Controller delegating updates between the Model and the View. At any point the data contained within the Model might be updated — and it's difficult to know where exactly that change occurred. Did it happen in one of the Views sharing that Model, or in one of the Controllers? Because the Model's data can be mutated by any actor in the application, the risk of data pollution in complex UIs is greater than we'd like.

      With a Flux architecture, the Store data is similarly shared between multiple Views. However this data can't be directly mutated — all of the requests to update the data must pass through the Action > Dispatcher chain first, eliminating the risk of random data pollution. When updates are made to the data, it's now much easier to locate the code requesting those changes.`,
    },
    {
      question: 'What is a pure component?',
      answer: `Is a specific type of component that optimizes rendering performance by implementing a shallow comparison of props and state. Pure components automatically prevent unnecessary re-renders when their input data (props or state) remains the same between updates. This optimization can lead to improved performance in certain scenarios.`,
    },
    {
      question: 'What are error boundaries?',
      answer: `React components that catch JavaScript errors anywhere in its child component tree. The Error boundary component can then log those errors and display fallback UI instead of crashing the entire component tree. You can think of error boundaries as a catch block for components.`,
    },
    {
      question: 'What is React Profiler and what is it used for?',
      answer: `A means to measure the cost of rendering in a React application. The purpose of this component is to help developers identify parts of the application that are slow and may benefit from further optimizations.`,
    },
    {
      question: 'How do you measure performance in a react app?',
      answer: `Chrome Dev tools, React dev tools - specifically the profiler tab, the profiler API, analytics and monitoring`,
    },
    {
      question: 'What is StrictMode in React?',
      answer: `StrictMode is a tool to highlight potential problems in an application. Strict Mode enables the following development-only behaviors:

      Your components will re-render an extra time to find bugs caused by impure rendering.
      Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
      Your components will be checked for usage of deprecated APIs.

      `,
    },
    {
      question: 'How does the React Router differ from conventional routing?',
      answer: `React Router is often used in Single-Page Applications (SPAs), where a single HTML page is loaded initially, and subsequent route changes are managed by the client-side JavaScript. Conventional routing is more common in multi-page applications, where distinct HTML pages are served for different routes.`,
    },
    {
      question: 'What is lazy loading in react?',
      answer: `Lazying loading a component means that a component is unbundled from the rest of your application, and isn't requested/loaded until the component is rendered. Lazy loading can improve initial load times since the initial bundle is smaller. Useful for admin views that most users will never visit. The trade-off is that your users will be sent to suspense/loading pages more often as they navigate which may feel a little choppy. This only applies to static bundles (SPAs), SSR frameworks like next have their own way of keeping per page bundles low.`,
    },
    {
      question:
        'Why were functional component/hooks introduced in react if class components was working fine?',
      answer: `The main justification for hooks is that it allows you to reuse chunks of logic between components far more easily. The syntax is nicer, and the react core team is very into functional (as opposed to OOP) patterns, but at the end of the day, code reuse is the killer feature.

      For example, lets say you have a popup that needs to show up on first render, then go away after 10 seconds and never show back up. In a class component, all the logic for that would go into lifecycle methods, which would be tied to that component alone. So when you need the same behavior of popping in on first render and disappearing after a while for another component, you either need to make a complicated wrapping component, which is gross, or you copy-paste the lifecycle logic.

      Now you can wrap that logic in a 'usePopUp' custom hook that can be stuck in any component. You could make every item on your page do the same thing, with very clean code, if you wanted to. A popup is kind of a silly example, but when you extend that to other types of extractable logic, the impact is tremendous.`,
    },
    {
      question: 'How do you debug performance issues in a React application?',
      answer: `
      Tools like React Profiler and browser developer tools' performance tab can help identify performance bottlenecks. You can also optimize components, use memoization, and implement shouldComponentUpdate or React.memo for optimization.
    `,
    },
    {
      question: 'What tools can you use for debugging a 3rd party package?',
      answer: `
      In Chrome DevTools, go to the "Sources" tab. Locate the source code of the third-party package. This may be in a different folder or in the "file://" protocol if you linked the repository manually. Use the debugger statement or set breakpoints by clicking on the line numbers in the source code. When the code execution reaches these points, it will pause, allowing you to inspect variables and the call stack. Run your application or website that uses the third-party package. Trigger the behavior that you want to debug.When execution pauses at a breakpoint, you can inspect variables and step through the code. Use the "Console" tab to view console.log messages. In the "Call Stack" panel, you can navigate through function calls and understand how your code interacts with the third-party package. You can add expressions to the "Watch" panel to monitor variables and expressions during debugging. You can resume execution by clicking the "Play" button or pressing F8. Continue until you reach another breakpoint or the end of the interaction. Examine the behavior, variables, and any error messages in Chrome DevTools. Make any necessary adjustments to the package's source code, configurations, or your own code.`,
    },
  ],
  Redux: [
    {
      question:
        'What is Redux, and why would you use it in a React application?',
      answer: `Redux is a predictable state container for JavaScript apps, particularly useful in managing state for larger applications. It provides a single source of truth for the state, makes it easier to manage changes and actions, and simplifies debugging and testing.`,
    },
    {
      question: 'What are the core concepts of Redux?',
      answer: `Redux is built around three core principles:
      Store: It holds the state of the application.
      Actions: These are objects that describe the changes to the state.
      Reducers: These are pure functions that specify how the state changes in response to actions.`,
    },
    {
      question:
        'What is the role of an action in Redux, and how do you create one?',
      answer: `Actions are payloads of information that send data from your application to the store. They are plain JavaScript objects and must have a type property to indicate the type of action. You can create actions using action creator functions, which return action objects.`,
    },
    {
      question: 'Explain the purpose of a Reducer in Redux.',
      answer: `Reducers specify how the application's state changes in response to actions. They are pure functions that take the previous state and an action as arguments, and return a new state. Reducers ensure that the state transition is predictable and transparent.`,
    },
    {
      question: 'What is a Redux store?',
      answer: `The store is a single JavaScript object that holds the state of your application. It is the central repository for state and exposes methods to dispatch actions and subscribe to state changes.`,
    },
    {
      question:
        'What is the purpose of middleware in Redux? Name a few popular middleware.',
      answer: `Middleware in Redux allows you to intercept and process actions before they reach the reducer. Popular middleware includes redux-thunk for handling asynchronous actions, redux-saga for complex side effects, and redux-logger for logging actions and state changes.`,
    },
    {
      question: 'How can you optimize performance in a Redux application?',
      answer: `To optimize performance in Redux, you can:
      Use the reselect library to create memoized selectors.
      Avoid unnecessary re-renders by using the shouldComponentUpdate method or hooks like useMemo.
      Normalize your state structure for efficient updates.`,
    },
    {
      question: 'What is a redux thunk?',
      answer: `Redux Thunk middleware allows you to write action creators that return a function instead of an action which gives us the power to incorporate some logic or run some asynchronous code before dispatching an action. The functions returned by the action creators have access to the dispatch function, which is used to dispatch actions to the Redux store. This enables you to dispatch actions at various points in an asynchronous operation, such as when data is requested and when it is received.`,
    },
  ],
  Patterns: [
    {
      question: 'Singleton Pattern',
      answer:
        'Ensures that a class has only one instance and provides a global point of access to that instance. Useful for managing global settings or resources.',
    },
    {
      question: 'Module Pattern',
      answer: `Encapsulates related variables and functions into a single object, providing a clean and organized way to structure code. Commonly used in JavaScript for creating private and public members. ESM, AMD, Commonjs`,
    },
    {
      question: 'Factory Pattern',
      answer: `Provides an interface for creating objects but allows subclasses to alter the type of objects that will be created. Useful for creating objects with similar structures.`,
    },
    {
      question: 'Constructor Pattern',
      answer:
        'Defines a blueprint for creating objects. Constructors are used with the new keyword to create instances. This is the traditional way of creating classes in JavaScript before ES6 classes.',
    },
    {
      question: 'Prototype Pattern',
      answer:
        'Allows you to create objects by cloning an existing object, known as a prototype. Promotes code reuse and inheritance without the need for traditional classes.',
    },
    {
      question: 'Observer Pattern',
      answer:
        'Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. Commonly used in event handling.',
    },
    {
      question: 'Pub/Sub Pattern (Publisher/Subscriber)',
      answer: `Similar to the Observer pattern but allows objects (publishers) to send messages to a central hub (broker), which then distributes messages to subscribers. Enables loose coupling between components.`,
    },
    {
      question: 'Decorator Pattern',
      answer: `Allows you to add behavior or responsibilities to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class.`,
    },
    {
      question: 'Adapter Pattern',
      answer: `Allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.`,
    },
    {
      question: 'Facade Pattern',
      answer: `Provides a simplified interface to a more complex system of classes, making it easier to interact with the system and hide its complexity.`,
    },
    {
      question: 'Composite Pattern',
      answer: `Composes objects into tree structures to represent part-whole hierarchies. Allows clients to treat individual objects and compositions of objects uniformly.`,
    },
    {
      question: 'Strategy Pattern',
      answer: `Defines a family of interchangeable algorithms, encapsulates each one, and makes them interchangeable. Clients can switch between algorithms at runtime.`,
    },
    {
      question: 'Command Pattern',
      answer: `Encapsulates a request as an object, thereby allowing you to parameterize clients with queues, requests, and operations. Useful for implementing undo functionality.`,
    },
    {
      question: 'State Pattern',
      answer: `Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.`,
    },
    {
      question: 'Chain of Responsibility Pattern',
      answer: `Passes a request along a chain of handlers. Upon receiving a request, each handler decides either to process the request or pass it to the next handler in the chain.`,
    },
    {
      question: 'Proxy Pattern',
      answer: `Provides a surrogate or placeholder for another object to control access to it. Common use cases include lazy loading, access control, and logging.`,
    },
    {
      question: 'Flyweight Pattern',
      answer: `Minimizes memory usage or computational expenses by sharing as much as possible with related objects. Useful when dealing with a large number of lightweight objects.`,
    },
    {
      question: 'Command Query Responsibility Segregation (CQRS)',
      answer: `Separates the responsibility for modifying data from the responsibility for reading data. It is often used in conjunction with event sourcing in complex applications.`,
    },
    {
      question: 'Dependency Injection Pattern',
      answer: `Allows objects to be decoupled from their dependencies. Dependencies are provided externally (injected) rather than being created internally.`,
    },
    {
      question: 'MVC (Model-View-Controller) Pattern',
      answer: `Separates an application into three interconnected components: the Model (data and business logic), the View (user interface), and the Controller (handles user input and updates the Model and View).`,
    },
  ],
  CORS: [
    {
      question: 'What is CORS, and why is it necessary in web applications?',
      answer: `CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to control requests made to a different domain (origin). It is necessary to prevent unauthorized cross-origin requests that could potentially compromise the security of web applications.`,
    },
    {
      question:
        'How does a browser determine if a request is a cross-origin request?',
      answer: `Browsers use the "Same-Origin Policy" (SOP) to determine if a request is cross-origin. If the protocol, domain, and port of the target resource differ from the origin of the requesting document, it's considered a cross-origin request.`,
    },
    {
      question:
        'Explain the structure of a CORS request, including the key headers involved.',
      answer: `A CORS request includes the Origin header in the request and the Access-Control-Allow-Origin header in the server's response. Other headers like Access-Control-Allow-Methods and Access-Control-Allow-Headers may also be involved.`,
    },
    {
      question:
        'When is a preflight request generated in a CORS scenario, and what is its purpose?',
      answer: `A preflight request is generated when the actual request includes non-simple HTTP methods (e.g., PUT, DELETE) or custom headers. It serves to check if the server is willing to accept the actual request and its parameters.`,
    },
    {
      question:
        'How can you configure CORS to allow multiple origins to access your resources?',
      answer: `You can set the Access-Control-Allow-Origin header to include multiple origins, separated by commas. For example: Access-Control-Allow-Origin: https://example1.com, https://example2.com.`,
    },
    {
      question: 'Explain how to configure cookies with CORS requests.',
      answer: `To enable cookies in a CORS request, both the server (with Access-Control-Allow-Credentials: true) and the client (with credentials: 'include' in the fetch request) need to configure the use of credentials.`,
    },
    {
      question:
        'What are the security implications of enabling CORS on your server for any origin (using Access-Control-Allow-Origin: *)?',
      answer: `Enabling CORS for any origin is generally discouraged, as it opens up the server to potential security vulnerabilities, including CSRF attacks.`,
    },
    {
      question:
        'Describe the role of the Same-Site attribute in the context of CORS and cookies.',
      answer: `The Same-Site attribute is used to control when cookies are sent in a cross-origin context. It can be set to SameSite=None to allow cross-origin cookies in a secure way.`,
    },
    {
      question:
        'What is a CORS preflight cache, and how can it be controlled by the server?',
      answer: `The preflight cache stores preflight request results for subsequent requests. The server can control the cache's duration using the Access-Control-Max-Age header.`,
    },
    {
      question:
        'How can a server protect against CORS-related security risks, such as CSRF attacks?',
      answer: `To protect against CSRF attacks, the server can implement anti-CSRF tokens and check the Origin or Referer headers on incoming requests to ensure they match an expected value.`,
    },
    {
      question:
        'Explain the differences between JSONP and CORS for cross-origin requests.',
      answer: `JSONP uses script tags to load data from a different domain, while CORS is a more secure mechanism for making cross-origin requests using XMLHttpRequest or the Fetch API. JSONP is prone to security vulnerabilities.
      `,
    },
    {
      question:
        'What is a CORS proxy, and when might it be useful in a CORS scenario?',
      answer: `A CORS proxy is an intermediary server that forwards requests to another server while adding the appropriate CORS headers. It can be useful in scenarios where the target server doesn't support CORS or where you want to control the headers.`,
    },
    {
      question:
        'Explain how to configure and use the Content Security Policy (CSP) header in conjunction with CORS.',
      answer: `The CSP header can be configured to restrict the sources from which content can be loaded. By aligning the CSP policy with CORS, you can enhance the security of your web application.
      `,
    },
    {
      question:
        'Discuss the impact of CORS in serverless architectures or cloud-based applications.',
      answer: `Serverless functions and cloud-based applications often require careful configuration of CORS to ensure proper access control and security. Misconfigured CORS can lead to security vulnerabilities.`,
    },
    {
      question:
        'How can you use CORS with server-side languages like PHP or Node.js to handle cross-origin requests?',
      answer: `CORS can be implemented on the server using middleware or headers. For example, in Node.js, the CORS package can be used as middleware to configure CORS rules.`,
    },
    {
      question:
        'What is the role of the Access-Control-Expose-Headers header, and how can it be used in a CORS configuration?',
      answer: `The 'Access-Control-Expose-Headers' header specifies which response headers can be exposed to the requesting client. It can be configured to expose specific headers beyond the default set.`,
    },
    {
      question:
        'Explain how CORS interacts with different HTTP methods like GET, POST, and OPTIONS.',
      answer: `CORS headers and preflight requests are handled differently for various HTTP methods. For example, a preflight request is generated for non-simple methods, while simple methods may not require a preflight. `,
    },
    {
      question:
        'Describe the role of the Access-Control-Max-Age header in a CORS configuration.',
      answer: `'Access-Control-Max-Age' header specifies the maximum time (in seconds) that the results of a preflight request can be cached. It can help reduce the number of preflight requests.`,
    },
    {
      question:
        'Discuss the nuances of implementing CORS for web sockets (WebSocket) connections.',
      answer: `WebSocket connections can be configured to use the 'Sec-WebSocket-Protocol' header to specify the protocol used, and CORS headers can be used to control access to WebSocket endpoints.
      `,
    },
    {
      question: `Can you provide an example of a real-world CORS issue you've encountered and how you resolved it?`,
      answer: ``,
    },
  ],
  Interview: [
    {
      question: 'What is excellence to you?',
      answer: `
      Excellence is a standard that I strive to embrace at all capacities in software engineering. I believe that coding is an art form and should adhere to the highest levels of creativity and admiration.
      `,
    },
    {
      question: 'What is your greatest strength?',
      answer: `Technical collaboration and discussions with a cross functional teams - since I am well versed in the entire tech stack I can effectively navigate and lead these discussions. Ability to absorb information and become fluent with tribal knowledge very quickly. Providing multiple solutions to a problem or limitation. Dissect large user stories into more manageable sub tasks.`,
    },
    {
      question: 'What is your greatest weakness?',
      answer: `I tend to let features / bugs / projects consume me until it is perfect or near perfect. May be good for employers since I'm working around the clock to uphold a level of excellence in all aspects of the dev cycle. Sometimes I trip up when I'm trying to articulate something to a junior / someone who doesn't understand tech at all - I like to think of Neil Degrasse Tyson and how he can explain astro physics to an infant. `,
    },
    {
      question: 'Why should we hire you?',
      answer: `I bring and expect a certain level of excellence out of myself and peers around me. I'm extremely hardworking, passionate, loyal, and I have a track record of experience and responsibilities that align perfectly with the role. You want someone to come in and hit the ground running and I believe that I can be that person.`,
    },
    {
      question: 'Why do you want to work here?',
      answer: `
      Im looking for a company that places a high priority on recognizing and respecting the individual, fostering a positive and supportive work culture. For me, the core of job satisfaction lies in the opportunity to face challenges, engage in meaningful collaboration, and continue my personal and professional growth. My true passion lies in the transformation of intricate business requirements into works of art — a skill I excel at. I understand you are looking for a software developer with extensive experience in building new app features and enhancements to existing platforms - over the course of my career I have written a magnitude of production ready features, enhancements, and tests`,
    },
    {
      question: 'Tell me about a time you showed leadership.',
      answer: `One of my initiatives (of many) as a team lead was to refactor our Class components to function components. At the time we had 4 front end developers that were working alongside each other to make this dream a reality. I remember a PR came through that I was reviewing and I noticed it was instantly blocked because one of the developers had a different approach to some of the problems they were facing. All I remember was seeing "Immutability is better." and I thought to myself that's not the way we should handle this. I took him aside and said yes immutability is better in the context of react but lets explain this to him in a more empathetic way. I also asked him to explain all the pros and cons and to be open minded on his opinions as well. We all got together on a call and we were able to move forward with a hybrid approach (utilizing immer) but we were also able to complete the project ahead of time because everyone was motivated after we had this fruitful discussion.
      `,
    },
    {
      question: 'Tell me about a time you were successful on a team.',
      answer: ` I joined a project that needed an overhaul of their existing global state management system. The data was unorganized, not normalized, not maintainable, not scalable, causing too many rerenders and instability in downstream components, and most importantly -- took too much time to add additional logic. I proposed the idea to the team, whipped up a proof of concept, and proved to the team that not only will this reduce on boiler plate and lines of code by re-organizing the data into more manageable pieces but it would cut down on development time when we needed to add additional logic to the store. The team loved the idea so I began refactoring the store to meet the standard of excellence I demand out of myself. After completing the initiative we were able to capture data through jira that proved story points were significantly reduced when asked to create new features or enhancements that required updates to the store.
      `,
    },
    {
      question: 'Tell me about a time you failed or made a mistake.',
      answer: `In my previous position at INE, we did not have a solidified CI/CD pipeline to deploy our micro front ends. At the time, we were uploading our artifacts directly to the s3 buckets from our local machine. Because of this, it was prone to errors at any given time. I once uploaded the wrong micro frontend to a bucket that was for another frontend. I quickly realized what had happened, rolled it back immediately, took full responsibility for any downtime and brought this data to the head of my department and explained the importance of devops engineers being integrated into our team. We took this failure and turned into a positive by hiring devops that created pipelines for us and we never had it happen again.`,
    },
    {
      question: 'Tell me about a time you worked with a difficult person.',
      answer: `In my most recent role at PrecisionHawk, we had a java developer that had a difficult personality in the sense that he needed a strict set of requirements to perform his duties. He was not great following directions, staying on track, or communication. He would continuously jump from one task to another leaving the previous task in an unknown and broken state. He would not communicate with the team on or update his tickets in jira. So the manager and I came up with a plan to address the issue and we just came up with a checklist of things that we needed to say / do in our scrum ceremonies. We needed to treat him special and summarize everything, make sure he was on the same page by asking him to repeat what we had said, doing random huddles throughout the day to make sure he was on track and had everything he needed. We basically came up with a checklist that we did throughout the day to make sure he was performing his duties.`,
    },
    {
      question: 'Describe a project that you are most proud of',
      answer: `I am most proud of the PrecisionAnalytics application. At the core of this app, it was a data visualization tool that utilize optimization techniques to display data intensive maps, resources viewers, and lists. It utilized mapbox, leaflet, ESRI, chart.js, and other visualization packages to display otherwise boring information in an elegant and friendly way.`,
    },
    {
      question: 'How do you give feedback to designers?',
      answer: `Having worked closely with designers for over 10 years I have found that either use visual annotations where I take a quick screenshot of the elements or UX that is in question and annotate with some simple graphics and text Or I will schedule feedback sessions where I can discuss the design in real-time. My feedback typically consists of limitations of their designs and I will usually provide multiple solutions to align with their design system.`,
    },
    {
      question:
        'Describe an interesting technical challenge you have faced in your work and how you overcame it as a software developer?',
      answer: `
      one notable technical challenge I encountered involved optimizing the rendering performance of a data-intensive map within PA. The map displayed a magnitude of dynamic layers and graphics and users were experiencing delays and noticeable lag when interacting with the interface.

      To address this challenge, I initiated a thorough analysis of the existing codebase and identified several areas contributing to the performance issues. One major bottleneck was the rendering process for complex data visualizations, especially when dealing with a large dataset. Additionally, inefficient state management and unnecessary re-renders were impacting the overall responsiveness of the application.

      I introduced virtualization techniques to render only the visible data on the screen, significantly reducing the initial load time. For large datasets, I implemented a load more approach to fetch and render smaller chunks of data at a time, preventing the browser from becoming overwhelmed.

      Optimized State Management: I revisited the state management architecture, refactoring it to ensure that only essential data triggered component updates. By utilizing memoization and optimizing state changes, I minimized unnecessary re-renders, enhancing the overall performance of the frontend components.`,
    },
    {
      question: 'What questions do you have for us?',
      answer: `
        What's the managing style here?
        What typical time zones overlap with other engineers?
        What is the engineering culture?
        What surrounding technologies do you use?
        How are deployments handled?
        What does your ci/cd pipelines look like?
        Do you have QA? What does the leadership culture look like?
        Is your company cashflow positive and if not, who are your investors?
        How much code coverage of unit tests do you have?
        Is there a clear vision and strong leadership?
        Is there enough work to go around?
        What is one thing you would change about your company?
      `,
    },
    {
      question:
        'How do you stay up-to-date with best practices and industry trends?',
      answer: `Bytes.dev & This week in react newsletters / articles. Also react, typescript, software development subreddits which spin off different articles and discussions. I also subscribe to Kent C. Dobbs, Wes Boss, and Dan Abramov.`,
    },
    {
      question:
        'What is the difference between a junior, mid-level, and senior developer?',
      answer: `Junior: you have limited knowledge and willing to learn

      Mid level: you know what you are doing, still learning but you are independent.

      Senior: you pull others up, can be trusted to lead projects and understand the importance of human cohesion and communication`,
    },
  ],
  Exercises: [
    {
      question:
        'Create a function that accepts 2 strings and removes the common characters from the outputted string',
      answer: 'https://codepen.io/bsmith-code/pen/MWXqGKw',
    },
    {
      question: 'Deduplicate an array',
      answer: 'https://codepen.io/bsmith-code/pen/Jjabape',
    },
    {
      question: 'Flatten a multi-dimensional array?',
      answer: 'https://codepen.io/bsmith-code/pen/xxmMOdp',
    },
    {
      question: 'Shuffle an array',
      answer: `https://codepen.io/bsmith-code/pen/XWoLJLV`,
    },
    {
      question: 'Bubble sort',
      answer: `https://codepen.io/bsmith-code/pen/abPrdwE`,
    },
    {
      question: 'Fibonacci Sequence',
      answer: `https://codepen.io/bsmith-code/pen/VwqgOgM`,
    },
    {
      question: 'Merge sorted arrays without creating a new array in memory.',
      answer: `https://codepen.io/bsmith-code/pen/OJrdqmG`,
    },
    {
      question: 'Maximum subarray sum',
      answer: `https://codepen.io/bsmith-code/pen/eYbxXWB`,
    },
    {
      question:
        'Find 2 numbers in an array that add up to the passed value, return their indices',
      answer: `https://codepen.io/bsmith-code/pen/BavMMgG`,
    },
    {
      question: 'Detect if 2 strings are Palindromes',
      answer: `https://codepen.io/bsmith-code/pen/LYMqqqy`,
    },
    {
      question: `Reverse a string without using reverse()`,
      answer: `https://codepen.io/bsmith-code/pen/PoXVVxa`,
    },
    {
      question: 'FizzBuzz',
      answer: `https://codepen.io/bsmith-code/pen/ExGrreK`,
    },
    {
      question: 'Flatten Array',
      answer: `https://codepen.io/bsmith-code/pen/xxmMOdp`,
    },
  ],
}
