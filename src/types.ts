export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'bicicletas' | 'cascos' | 'accesorios';
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Appointment {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  service: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
