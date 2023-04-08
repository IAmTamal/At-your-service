//* All routes related to user's LOGIN AND REGISTER

import express, { Request, Response } from "express";
import User, { IUser } from "../models/UserModel";
import bcrypt from "bcryptjs";
var jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", (req: Request, res: Response<IUser[]>) => {
    User.find()
        .then((users: IUser[]) => res.json(users))
        .catch((err: Error) =>
            res.status(400).json({ error: "Error: " + err } as any)
        );
});


/**
 * POST /register
 * Creates a new user in the system
 * Request body should contain the following fields:
 *   - firstName: the user's first name (string)
 *   - lastName: the user's last name (string)
 *   - userName: the user's username (string)
 *   - email: the user's email address (string)
 *   - password: the user's password (string)
 *
 * If the user already exists, return a 409 Conflict HTTP status code
 * Returns the newly created user object on success
 * If an error occurs, return a 500 Internal Server Error HTTP status code
 */

router.post("/register", async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const { firstName, lastName, userName, email, password } = data;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ message: "User already exists, please log in" } as any);
        }


        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
            firstName,
            lastName,
            userName,
            email,
            password: hashedPassword,
            slug: userName.toLowerCase() + Math.floor(Math.random() * 1000),
            profilepic: "https://i.ibb.co/NS9thkp/profileicon.png",
        });

        await user.save();
        return res.status(201).json({ message: "Signed you up, please login" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" } as any);
    }
});


/**
 * POST /login
 * Logs in an existing user
 * Request body should contain the following fields:
 *   - email: the user's email address (string)
 *   - password: the user's password (string)
 *
 * If the user does not exist / Incorrect password, return a 409 Conflict HTTP status code
 *
 * Returns a JSON object with the following fields:
 *   - message: a success message indicating that the user has been logged in (string)
 *
 * Sets a cookie named "token" with the JWT token that expires in 30 days and is httpOnly
 * If an error occurs, return a 500 Internal Server Error HTTP status code
 */




router.post("/login", async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const { email, password } = data;

        const existingUser = await User.findOne({ email });

        if (!existingUser)
            return res.json({ message: "User doesnot exists" } as any);

        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!isPasswordCorrect)
            return res.json({ message: "Invalid credentials" } as any);

        const payload = { UserId: { id: existingUser._id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });

        res.cookie("token", token, { httpOnly: true, sameSite: 'none', secure: true });

        res.cookie("username", existingUser.userName);

        return res.status(201).json({ message: "Logged in successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" } as any);
    }
});

/**

* GET /api/users/getuserdata
*
* Gets the user data for the authenticated user
* The request should contain the JWT token in the cookie 'token', which server will fetch automatically
*
* Returns the user data in JSON format
*
* If the token is invalid or expired, returns a 401 Unauthorized response
* If there is an error on the server, returns a 500 Internal Server Error response

*/



/* router.get("/getprofiledata", async (req: Request, res: Response) => {
    const token = req.cookies.token;
    console.log(token);

    jwt.verify(token, process.env.JWT_SECRET, async (err: Error, decoded: any) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" } as any);
        }

        const UserId = decoded.UserId;
        const Userdetails = await User.findById(UserId.id);

        console.log(Userdetails);


        return res.status(201).json(Userdetails);
    });
})
 */


router.get("/getprofiledata/:username", async (req: Request, res: Response) => {
    console.log(req.params.username);
    const Userdetails = await User.findOne({ userName: req.params.username });


    console.log(Userdetails);


    return res.status(201).json(Userdetails);
})

module.exports = router;


