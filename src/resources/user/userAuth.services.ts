import { userAuthLoginModelFunction, userAuthRegisterModelFunction } from "../../models/user";

const userAuthRegisterService = async (email: string, username: string, password: string) => {
  const result = await userAuthRegisterModelFunction(email, username, password);
  return result;
}

const userAuthLoginService =  async (username: string, password: string) => {
  const result = await userAuthLoginModelFunction(username, password);
  return result;
}

export {
  userAuthRegisterService,
  userAuthLoginService
}