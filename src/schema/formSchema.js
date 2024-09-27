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

export const ConfirmBookingFormSchema = z.object({
    for: z.string().min(1, "Please select at least one option"),
    name: z.string().min(1, "Name is required"),
    mobile: z
        .string()
        .length(10, "Mobile No. must be exactly 10 digits")
        .regex(/^\d+$/, "Mobile No. must contain only numbers"),
    email: z
        .string()
        .optional()
        .refine((value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
            message: "Invalid email address",
        }),
});


const phoneRegex = /^\d{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

export const LoginSchema = z.object({
    emailOrPhone: z
        .string()
        .min(1, "Email or Phone number is required")
        .refine((value) => phoneRegex.test(value) || emailRegex.test(value), {
            message: "Must be a valid email or phone number",
        }),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .regex(passwordRegex, "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"),
    rememberMe: z.boolean().optional(),
    loginWithOtp: z.boolean().optional(),
});


export const LoginSchema1 = z.object({
    emailOrPhone: z
        .string()
        .min(1, "Email or Phone number is required")
        .refine((value) => phoneRegex.test(value) || emailRegex.test(value), {
            message: "Must be a valid email or phone number",
        }),
    rememberMe: z.boolean().optional(),
    loginWithOtp: z.boolean().optional(),
});

export const OtpSchema = z.object({
    otp: z
        .string()
        .length(6, { message: "OTP must be exactly 6 digits" }) // Enforces exactly 6 digits
        .regex(/^\d+$/, { message: "OTP must contain only numbers" }), // Numeric-only validation
});

