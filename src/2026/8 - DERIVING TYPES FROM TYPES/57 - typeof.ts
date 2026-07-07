// JS typeof operator

const username = 'zach';
// let username = 'zach'

console.log(typeof username);

// TS - also does have typeof???!!!!

type UserName = typeof username; // // play with the username variable above to see the difference

const settings = {
  difficulty: 'easy',
  minLevel: 10,
  didStart: false,
  players: ['John', 'Jane'],
};

// type Settings = {
//   difficulty: string;
//   minLevel: number;
//   didStart: boolean;
//   players: string[ ];
// };

type Settings = typeof settings;

function loadData(settings: Settings) {
  // ...
}

loadData(settings);
