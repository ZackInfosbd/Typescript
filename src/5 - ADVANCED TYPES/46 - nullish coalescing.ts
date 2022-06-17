const fetchedUserData = {
  id: 'u1',
  name: 'zack',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);

// const userInput = '';
// const userInput = null;
const userInput = undefined;

// const storedData = userInput || 'DEFAULT';
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

/**
 * Nullish Coalescing: a loosy related to optional chaining, where we dont know exactely  if it is null or undefined or valid pieace of data
 * ??: is used only when the value is null or undefined not empty string for example
 */
