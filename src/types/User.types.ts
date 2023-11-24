interface Address {
  defaultShipping: boolean;
  defaultBilling: boolean;
  firstname: string;
  lastname: string;
  region: {
    regionCode: string;
    region: string;
    regionId: number;
  };
  postcode: number;
  street: string[];
  city: string;
  telephone: string;
  countryId: string;
}

interface UserData {
  userId: string;
  email: string;
  firstname: string;
  lastname: string;
  addresses: Address[];
  password: string;
}
