import { z } from 'zod'

export const contactFormSchema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    contactNumber: z
        .string()
        .min(10, "Contact Number must be at least 10 digits")
        .max(15, "Contact Number cannot exceed 15 digits"),
    emailId: z.string().email("Invalid email address"),
    location: z.string().min(1, "Location is required"),
    pincode: z
        .string()
        .min(6, "Pincode must be 6 digits")
        .max(6, "Pincode must be exactly 6 digits"),
    dentalIssue: z.string().min(1, "Please describe your dental issue"),
})

export const requestDentalCampSchema = z.object({
    organiserName: z.string().min(1, "Organiser Name is required"),
    campType: z.string().min(1, "Camp Type is required"),
    emailId: z.string().email("Invalid email address"),
    contactNumber: z
        .string()
        .min(10, "Contact Number must be at least 10 digits")
        .max(15, "Contact Number cannot exceed 15 digits"),
    campPerferredDate: z.string().min(1, "Preferred Date is required"),
    campTiming: z.string().min(1, "Camp Timings are required"),
    location: z.string().min(1, "Camp Venue/Location is required"),
})

export const commentSchema = z.object({
    name: z.string().min(1, "Name is required"),
    emailId: z.string().email("Invalid email address"),
    comment: z.string().min(4, "comment is required"),
})