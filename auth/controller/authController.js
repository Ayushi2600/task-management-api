import {signupService, loginService, getProfileService} from "../service/authService.js";

export const signup = async (req, res) => {
    try{
        const user = await signupService(req.body);
        res.status(201).json({ message: "User Signup successful", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const login = async (req, res) => {
    try{
        const token = await loginService(req.body);
        res.status(201).json({ message: "User Login successful", token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getProfile = async (req, res) => {
    try{
        const user = await getProfileService(req.params.userId);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
