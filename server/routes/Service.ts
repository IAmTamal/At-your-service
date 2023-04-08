//* All routes related to user's LOGIN AND REGISTER

import express, { Request, Response } from "express";
import Service, { IService } from "../models/ServiceModel";

const router = express.Router();

router.post("/create", async (req: Request, res: Response) => {
    try {

        const data = req.body;
        const { name, description, slug, location, charge, availability, keywords, banner } = data;

        const checkbyslug = await Service.findOne({ slug });
        const checkbyname = await Service.findOne({ name });

        if (checkbyslug || checkbyname) {
            return res.json({ message: "Service already exists" } as any);
        }

        const service = new Service({
            name,
            description,
            slug,
            location,
            charge,
            availability,
            keywords,
            banner
        });

        await service.save();
        return res.status(201).json({ message: "Service created" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" } as any);
    }
})

module.exports = router;


