import { userAuthRegister } from "../../models/user";

const userAuthRegisterService = async (email: string, password: string) => {
  const result = await userAuthRegister(email, password);
  return result;
}

const userAuthLoginService =  async (email: string, password: string) => {
}

export {
  userAuthRegisterService,
}