/**
 * typeof and keyof.
 * indexed access types & mapped types.
 * conditional types.
 * built-in utility types.
 * more!
 */

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

const appUser = {
  name: "zack",
  age: 35,
  permissions: [
    { id: "p1", title: "admin", description: "Admin access" },
    { id: "p2", title: "manager", description: "manager access" },
  ],
};

// const AppUser = typeof appUser

type Perms = AppUser["permissions"];
