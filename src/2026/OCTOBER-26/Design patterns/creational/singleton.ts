// class AppConfig {
//   private static instance: AppConfig | null = null;
//   private apiUrl = "https://api.example.com";

//   private constructor() {}

//   static getInstance(): AppConfig {
//     if (AppConfig.instance === null) {
//       AppConfig.instance = new AppConfig();
//     }

//     return AppConfig.instance;
//   }

//   setApiUrl(url: string): void {
//     this.apiUrl = url;
//   }

//   getApiUrl(): string {
//     return this.apiUrl;
//   }
// }

// // The private constructor prevents callers from creating instances with `new`.
// const configA = AppConfig.getInstance();
// const configB = AppConfig.getInstance();

// configA.setApiUrl("https://course.example.com");

// console.log("Same instance:", configA === configB);
// console.log("Shared API URL:", configB.getApiUrl());
