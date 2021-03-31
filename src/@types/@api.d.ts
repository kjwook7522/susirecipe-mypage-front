declare module '@api' {
  import { UserTab } from '@objects';

  export interface SignUp {
    email: string;
    password: string;
    name: string;
    phoneNumber: string;
    type: UserTab;
    termOfServiceAgreement: boolean;
    privacyPolicyAgreement: boolean;
    receiveMarketingAgreement: boolean;
  }

  export interface SignIn {
    email: string;
    password: string;
  }
}
