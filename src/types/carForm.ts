export interface CarFormData {
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

  sellerName: string;

  condition: "New" | "Used";
}