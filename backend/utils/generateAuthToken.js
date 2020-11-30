import jwt from 'jsonwebtoken';

const generateAuthToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '50d',
  });
};

export { generateAuthToken };
