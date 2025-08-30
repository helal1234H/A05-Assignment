
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
1. What is the difference between;
getElementById --> 
getElementById is a function that can be used to identify a specific element in JavaScript.
getElementsByClassName --> 
getElementsByClassName is a js method that can be used to identify multiple elements at once.
querySelector--> 
querySelector is a js method that can access a specific CSS property.
querySelectorAll--->
querySelectorAll is a js method that allows you to access CSS properties.
2. How do you **create and insert a new element into the DOM** -->
 createNewElement This property can be used to create a new element using the DOM method.
3. What is **Event Bubbling** and how does it work? -->
 Event Bubbling is a process that when an element is clicked, it targets that element in the DOM and can target its parent and child on the event listener. That is, Event bubbling is a process that can spread throughout the DOM with an event listener.
4.  What is **Event Delegation** in JavaScript? Why is it useful? -->
Event delegation in JavaScript is a technique that allows you to add an EventListener to any preantnode in the DOM instead of adding an EventListener to every chile in the DOM. It is called Event delegation.

Event delegation is useful because it improves application performance and scalability by reducing the number of event listeners required, and simplifies code by centralizing event handling.
Simplifies code by centralizing event handling and automatically integrating dynamically added components, making web applications more responsive and easier to maintain
 

 5. What is the difference between **preventDefault() and stopPropagation()** methods?-->
preventDefault() -->
This method prevents the default action associated with an event from occurring.
stopPropagation() -->

This method prevents the event from being propagated further into the DOM hierarchy.Prevents access to parent or child elements