export interface Car {
  _id: string;

  title: string;
  brand: string;
  model: string;

  year: number;
  price: number;

  fuel: string;
  transmission: string;
  mileage: number;

  location: string;

  image: string;

  description: string;

  condition: "New" | "Used";

  sellerName: string;
}