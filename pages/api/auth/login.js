export default function login(req, res) {
  setTimeout(() => {
    console.log(req.body);
    res
      .status(200)
      .json({ message: 'Please check your mailbox for your login link' });
    // res.status(401).json({ message: 'This email was not registered' });
  }, 2000);
}
