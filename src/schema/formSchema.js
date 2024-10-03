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
    campPerferredDate: z.date({ required_error: "Preferred Date is required" }),
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
        .string(),
    // .min(8, "Password must be at least 8 characters long")
    // .regex(passwordRegex, "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"),
    rememberMe: z.boolean().optional(),
    loginWithOtp: z.boolean().optional(),
});

export const RegisterSchema = z.object({
    firstName: z.string().min(1, "FirstName is required"),
    lastName: z.string().min(1, "LastName is required"),
    phone: z
        .string()
        .length(10, "Mobile No. must be exactly 10 digits")
        .regex(/^\d+$/, "Mobile No. must contain only numbers"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .regex(passwordRegex, "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"),
    getUpdates: z.boolean().optional(),
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

export const ChangePasswordSchema = z.object({
    newPassword: z
        .string()
        .min(8, "New Password must be at least 8 characters long")
        .regex(passwordRegex, "New Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"),
    confirmNewPassword: z
        .string()
        .min(8, "Confirm New Password must be at least 8 characters long")
        .regex(passwordRegex, "Confirm New Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"),
});

export const NotificationSettingSchema = z.object({
    receiveAllSms: z.boolean().optional(),
    announcements: z.boolean().optional(),
    savings: z.boolean().optional(),
    feedback: z.boolean().optional(),
    healthTips: z.boolean().optional(),
    informational: z.boolean().optional(),
    updatesViaWhatsapp: z.boolean().optional(),
});


export const ProfileSchema = z.object({
    profileImg: z.any(),  // Optional string for profile image URL or path
    name: z.string().min(1, "Name is required"),  // Name is required
    mobile: z.string()
        .min(1, "Mobile number is required")
        .min(10, "Mobile number must be at least 10 digits")
        .max(15, "Mobile number can't exceed 15 digits"),  // Mobile is required and validated
    email: z.string().email().optional(),  // Optional email with valid format
    gender: z.string().optional(),  // Optional gender field
    dateOfBirth: z.date().optional(),  // Optional date of birth as string, could use date type
    bloodGroup: z.string().optional(),  // Optional blood group with validation
    timezone: z.string().optional(),  // Optional timezone
    streetName: z.string().optional(),  // Optional street name
    locality: z.string().optional(),  // Optional locality
    city: z.string().optional(),  // Optional city
    state: z.string().optional(),  // Optional state
    country: z.string().optional(),  // Optional country
    pincode: z.string().optional(),  // Optional pincode
    alternateMobileNumber: z.string().optional(),  // Optional alternate mobile number
    language: z.string().optional()  // Optional language
});
