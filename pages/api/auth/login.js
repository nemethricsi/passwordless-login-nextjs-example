export function waitForIt(req) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(req.body.email);
    }, 2000);
  });
  return promise;
}

export default async function login(req, res) {
  const response = await waitForIt(req);
  return res
    .status(200)
    .json({ message: `Please check ${response} for your login link` });
  // res.status(401).json({ message: `${response} was not registered` });
}
