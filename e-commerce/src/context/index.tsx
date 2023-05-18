import React, { useState, createContext, useMemo } from "react";
import { validEmail, validPassword } from "../components/Regex";
import {
  ContextPropsP,
  StoreUserProps,
  UserProps,
  ContextProps,
} from "../type";
export const Context = React.createContext<ContextPropsP | null>(null);

// type React.SetStateAction<S> = S | ((prevState: S) => S)

export const ContextProvider = ({ children }: ContextProps) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const [storeUserInfo, setStoreUserInfo] = React.useState<UserProps[]>([
    {
      name: "",
      email: "",
      password: "",
    },
  ]);

  const HandleChangeName = function (e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    setName(value);
  };
  const HandleChangeConfirmPassWord = function (
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    let value = e.target.value;


    setconfirmPassword(value);
  };

  const HandleChangeEmail = function (e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    setEmail(value);
    if (!validEmail.test(value)) {
      setEmailError(true);
   return false
    
    } else {
      setEmailError(false);
      return true
    }
  };

  const HandleChangePassword = function (e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;

    setPassword(value);
    if (!validPassword.test(value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleTogglePassword = function () {
    setToggleIcon((prev) => !prev);
  };

  const handleGetUserInfo = (name: string, password: string, email: string) => {
    console.log(setStoreUserInfo);
    const userInfo: UserProps = {
      name: name,
      password: password,
      email: email,
    };
    setStoreUserInfo((prevState) => {
      const newUser = [...prevState];
      if (
        userInfo.email === "" &&
        userInfo.password === "" &&
        userInfo.name === ""
      ) {

      } else {
        newUser.push(userInfo);
      }
  
      return newUser;
    });
  };

  const contextValue: ContextPropsP = useMemo(
    () => ({
      toggleIcon,
      validEmail,
      confirmPassword,
      validPassword,
      email,
      name,
      emailError,
      password,
      passwordError,
      storeUserInfo,
      HandleChangeName,
      HandleChangeConfirmPassWord,
      HandleChangeEmail,
      HandleChangePassword,
      handleTogglePassword,
      handleGetUserInfo,
    }),
    [email, name, password, passwordError, handleTogglePassword]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
