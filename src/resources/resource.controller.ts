const controllerExecute = async (request: any, response: any, controllerName: string, callback: any) => {
  console.log('resource.controller > controllerExecute');
  return callback();
}

export {
  controllerExecute
}