export type ContextPropsP = {
  toggleIcon: boolean;
  validPassword: RegExp;
  email: string;
  name: string;
  emailError: boolean;
  validEmail: RegExp;
  password: string;
  confirmPassword: string;
  storeUserInfo: UserProps[] | undefined;
  passwordError: boolean;
  HandleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  HandleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  HandleChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  HandleChangeConfirmPassWord: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTogglePassword: () => void;
  handleGetUserInfo: (name: string, password: string, email: string) => void;
};
export type UserProps = {
  name: string;
  password: string;
  email: string;
};

export type StoreUserProps = {
  users: UserProps[];
};

export type ContextProps = {
  children: React.ReactNode;
};
