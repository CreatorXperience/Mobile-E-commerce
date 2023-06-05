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

export type forHomeState = {
  drop: {
     "category":  string;
       "link": number,
       "product-image-link": string,
       "product-name": string,
       "product-amount": number,
       "product-reviews": number,
       "product-description": string
   }[] 
}


export type forHomeErrorProps = {
  userInput: string
  content: {
      "link": number,
      "product-image-link": string,
      "product-name": string,
      "product-amount": number,
      "product-reviews": number,
      "product-description": string
  } 
  }

  
export type forProductState = {
  data:[ {
      "category":  string;
      "link": number,
      "product-image-link": string,
      "product-name": string,
      "product-amount": number,
      "product-reviews": number,
      "product-description": string
  }]
}


export type forCurrentProductState = {
  data:{
      "category":  string;
      "link": number,
      "product-image-link": string,
      "product-name": string,
      "product-amount": number,
      "product-reviews": number,
      "product-description": string
  }
}


export type productCardType = {
  AddToCart: (item:forCurrentProductState)=> void
}

// export type forProductPageProps = {
//   addToCart: (item:{})=> void
// }

export type CartContextType = {
   cart: {}[],
   handleRemoveCart: (index:number)=> void
}
export type forCartItem = {
  item: {
    "link"?: string
    
  }[]
}

