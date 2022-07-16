import { userAuthRegisterService } from "./userAuth.services";

const userAuthRegisterController = async (req:any, res: any) => {
  console.log('tester')
  const { email, password } = req.body;
  const userAuthRegisterServiceResult = await userAuthRegisterService(email, password);
  res.send(userAuthRegisterServiceResult);
}

export { 
  userAuthRegisterController
};