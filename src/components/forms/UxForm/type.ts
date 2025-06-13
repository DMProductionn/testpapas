
export interface FormData {
  clientName: string;
  country: string;
  testDevice: string;
  operatingSystem: string;
  currency: string;
  depositAmount: string;
  withdrawalAmount: string;
  withdrawalToggle: boolean;
  uxTestingOption: string;
  uploadFile: FileList | null;
}

export interface CountryOption {
  value: string;
  label: string;
}

export interface CurrencyOption {
  value: string;
  label: string;
}