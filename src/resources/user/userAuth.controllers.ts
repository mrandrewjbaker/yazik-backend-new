import { userAuthLoginService, userAuthRegisterService } from "./userAuth.services";

const userAuthRegisterController = async (req:any, res: any) => {
  console.log('tester')
  const { email, username, password } = req.body;
  const userAuthRegisterServiceResult = await userAuthRegisterService(email, username, password);
  res.send(userAuthRegisterServiceResult);
}

const userAuthLoginController = async (req:any, res: any) => {
  const { username, password } = req.body;
  const userAuthLoginServiceResult = await userAuthLoginService(username, password);
  res.send(userAuthLoginServiceResult);
}

export { 
  userAuthRegisterController,
  userAuthLoginController
};