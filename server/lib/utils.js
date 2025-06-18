import jwst from "jsonwebtoken";

//function to generate token for user
export const generateToken = (userId)=>{
    const token = jwst.sign({userId},process.env.JWT_SECRET);
    return token;
}