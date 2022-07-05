export default function generateToken(user){
    const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET
      );
    return token
}