export interface IRepository {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export interface IRepositoriesProps {
  username: string;
}
