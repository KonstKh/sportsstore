export const data: {[key: string] : any} = {
  categories: ["Watersports", "Soccer", "Chess", "Running"],
  products: [
    {
      id: 1, name: "P1", category: "Watersports",
      description: "P1 (Watersports)", price: 3
    },
    {
      id: 2, name: "P2", category: "Watersports",
      description: "P2 (Watersports)", price: 4
    },
    {
      id: 3, name: "P3", category: "Running",
      description: "P3 (Running)", price: 5
    },
    {
      id: 4, name: "P4", category: "Chess",
      description: "P4 (Chess)", price: 6
    },
    {
      id: 5, name: "P5", category: "Chess",
      description: "P6 (Chess)", price: 7
    },
  ]
}

type Data = {
  categories: string[],
  products: Product[]
}

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
}

// export interface IData {
//   categories: string[],
//   products: any[]
// }

// export type DataKeys = keyof IData;