# Iterator Design Pattern

The Iterator design pattern is a behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. It enables the traversal of objects such as arrays, trees, and graphs in a standardized manner. This pattern decouples the collection from the traversal logic, allowing different kinds of iterators to be used for the same collection.

## Concept

Imagine you have a collection of books and you want to browse through them one by one. Instead of the collection exposing details about how the books are stored (array, list, tree, etc.), an iterator is used to traverse through the books. This way, the implementation details of the collection are hidden, and it becomes easier to change the collection's internal structure without affecting the code that traverses it.
