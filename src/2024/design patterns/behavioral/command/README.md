The Command design pattern is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation allows you to parameterize methods with different requests, delay or queue a request's execution, and support undoable operations.

## Concept

Imagine you're designing a remote control for various electronic devices like a TV, a stereo system, and lights. Each button on the remote needs to perform a specific action on one of the devices. Instead of hardcoding the actions of each button for each device, you can use the Command pattern to encapsulate the action as an object. This object (command) will then be associated with a button, making it easy to change the button's action dynamically.
