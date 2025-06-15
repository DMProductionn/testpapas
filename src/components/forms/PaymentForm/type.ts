
export interface FormData {
  clientName: string;
  country: { value: string; label: string } | string;
  testDevice: { value: string; label: string } | string;
  operatingSystem: { value: string; label: string } | string;
  currency: { value: string; label: string } | string;
  depositAmount: string;
  uxTestingOption: string;
  uploadFile: FileList | null;
  paymentMethod: string;
  link: string;
  description: string;
  KYC: boolean;
}

export interface CountryOption {
  value: string;
  label: string;
}

export interface CurrencyOption {
  value: string;
  label: string;
}