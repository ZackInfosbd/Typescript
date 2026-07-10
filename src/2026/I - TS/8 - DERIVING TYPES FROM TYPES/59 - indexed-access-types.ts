// const appUser = {
//   name: 'zack',
//   age: 35,
//   permissions: [{ id: 'i1', title: 'admin', description: 'Admin access' }],
// };

// type AppUser = typeof appUser

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

// type Perms = {
//   id: string;
//   title: string;
//   description: string;
// }[];

type Perms = AppUser['permissions'];

// Accessing Array Elements With Indexed Access Types
type Perm = Perms[number];

type Names = string[];
type Name = Names[number];
