export interface AddPlaceModel {
  name: string;
  contact: string;
  phone: string;
  email: string;
  website: string;
  address?: string;
  lat?: number;
  lng?: number;
  category?: string;
  subcategory?: string;
}
