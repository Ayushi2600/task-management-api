import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

export const signupService = async({ email, password }) => {
    const existingUser = await prisma.user.findUnique({ where : {email}});
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data : {email, password: hashedPassword}
    });
    return {id: user.id, email: user.email};
}

export const loginService = async({ email, password }) => {
    const user = await prisma.user.findUnique({ where: {email}});
    if (!user) throw new Error("User not found");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid Password");

    const token = jwt.sign({userId: user.id}, JWT_SECRET, {expiresIn: '1h'});
    return token;
}

export const getProfileService = async(id) => {
    const user = await prisma.user.findUnique({ where: {id: parseInt(id)}});
    if (!user) throw new Error("User not found");
    return {id: user.id, email: user.email, createdAt: user.createdAt};
}
