export interface GET_USER {
    id: number;
    name: string;
    email: string;
    verified: boolean;
  }


 export interface  USER_TYPE {
    id: number;
    name: string;
    username: string;
    email: string;
    address?: {
      street?: string;
      suite?: string;
      city?: string;
      zipcode?: string;
      geo?: {
        lat?: string;
        lng?: string;
      };
    };
    phone?: string;
    website?: string;
    company?: {
      name?: string;
      catchPhrase?: string;
      bs?: string;
    };
  }