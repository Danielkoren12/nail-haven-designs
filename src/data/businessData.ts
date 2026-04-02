export interface BusinessData {
  placeUrl: string;
  title: string;
  rating: string;
  reviewCount: string;
  category: string;
  address: string;
  plusCode: string;
  website: string;
  phoneNumber: string;
  currentStatus: string;
  info: string;
  imgUrl: string;
  isClaimed: string;
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

// Re-export from external client data file
import clientDataJson from "./clientData.json";
export const clientData: BusinessData = clientDataJson as BusinessData;
