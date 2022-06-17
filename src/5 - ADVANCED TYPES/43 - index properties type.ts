interface ErrorContainer {
  //{email: 'Not a valid email, userName: 'Must start with a character}

  // -1
  // id: string;
  // -2
  [key: string]: string;
}

const error: ErrorContainer = {
  email: 'Not a valid email!',
  userName: 'Must start with a charakter',
};

/**
 * index properties: are TS after all but they re  not really much types focused instead this feature is there to help us write felxible code, and allow us create objects whichg are more flexible regarding the properties they might hold
========================================== 
* problem:
* we want make Error container that is not restricted to some properties?
=========================================
* solution:
* to apply the flexible code here and building that object/container which contain dynamic properties 
- 1 we still can add predefined props, but they should be all of the same type
- 2 types allowed are : string, number, symbole => boolean for example is not allowed

 */
