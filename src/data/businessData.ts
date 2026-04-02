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

export const sampleBusinessData: BusinessData = {
  placeUrl: "https://maps.google.com/?cid=1234567890",
  title: "Làmay Nail Spa",
  rating: "4.8",
  reviewCount: "312",
  category: "Nail Salon",
  address: "134 N San Fernando Blvd, Burbank, CA 91502",
  plusCode: "",
  website: "",
  phoneNumber: "(818) 245-5226",
  currentStatus: "Open",
  info: "",
  imgUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
  isClaimed: "true",
  openingHours: {
    monday: "9:30 AM – 7:00 PM",
    tuesday: "9:30 AM – 7:00 PM",
    wednesday: "9:30 AM – 7:00 PM",
    thursday: "9:30 AM – 7:00 PM",
    friday: "9:30 AM – 7:00 PM",
    saturday: "9:30 AM – 7:00 PM",
    sunday: "10:00 AM – 6:00 PM",
  },
};
