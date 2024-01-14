interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface Cart {
  products: Product[];
}

interface Shipping_Details {
  email: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  shipping_method: string;
  holder_name: string;
  card_number: string;
  expiry_date: string;
  security_code: string;
  subtotal: number;
  taxes: number;
  total: number;
  products: Product[];
}
