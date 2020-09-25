export interface Achievement {
  id: string;
  name: string;
  img: string;
  counter?: {
    current: number;
    total: number;
  };
}
