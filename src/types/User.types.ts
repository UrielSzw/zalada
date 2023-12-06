export interface Address {
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

export interface UserData {
  userId: string;
  email: string;
  firstname: string;
  lastname: string;
  addresses: Address[];
  password: string;
}

export type FormDataLogin = {
  username: string;
  password: string;
};

export type FormDataRegister = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  postCode: string;
  region: string;
  street: string;
  telephone: string;
};
