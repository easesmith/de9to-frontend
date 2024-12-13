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
    designation: z.string().min(1, "Designation  is required"),
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
    name: z.string().min(1, "Name is required"),
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

export const DentistRegisterSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z
        .string()
        .length(10, "Mobile No. must be exactly 10 digits")
        .regex(/^\d+$/, "Mobile No. must contain only numbers"),
    otp: z
        .string()
        .length(4, "Otp must be exactly 4 digits")
        .regex(/^\d+$/, "Otp must contain only numbers"),
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
        .length(4, { message: "OTP must be exactly 4 digits" }) // Enforces exactly 6 digits
        .regex(/^\d+$/, { message: "OTP must contain only numbers" }), // Numeric-only validation
});

export const ChangePasswordSchema = z.object({
    oldPassword: z
        .string()
        .min(8, "Old Password must be at least 8 characters long")
        .regex(passwordRegex, "Old Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"),
    newPassword: z
        .string()
        .min(8, "New Password must be at least 8 characters long")
        .regex(passwordRegex, "New Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"),
    confirmNewPassword: z
        .string()
        .min(8, "Confirm New Password must be at least 8 characters long")
        .regex(passwordRegex, "Confirm New Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ['confirmNewPassword'],
    message: "New password and confirm new password must match",
});

export const DeleteAccountSchema = z.object({
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .regex(passwordRegex, "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"),
})

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
        .max(10, "Mobile number must be 10 digits"),
    email: z.string().email().optional(),  // Optional email with valid format
    gender: z.string().optional(),  // Optional gender field
    dateOfBirth: z.date().optional(),  // Optional date of birth as string, could use date type
    // bloodGroup: z.string().optional(),  // Optional blood group with validation
    // timezone: z.string().optional(),  // Optional timezone
    address: z.string().optional(),  // Optional street name
    area: z.string().optional(),  // Optional locality
    city: z.string().optional(),  // Optional city
    state: z.string().optional(),  // Optional state
    country: z.string().optional(),  // Optional country
    pincode: z.string().optional(),  // Optional pincode
    // alternateMobileNumber: z.string().optional(),  // Optional alternate mobile number
    // language: z.string().optional()  // Optional language
});

export const AddFeedbackSchema = z.object({
    rating: z
        .number()
        .min(1, { message: "Rating must be at least 1 star" })
        .max(5, { message: "Rating cannot exceed 5 stars" }),
    desc: z
        .string()
        .min(10, { message: "Feedback must be at least 10 characters long" })
        .max(500, { message: "Feedback cannot exceed 500 characters" }),
});


export const PersonalDetails1Schema = z.object({
    doctorImg: z.any().refine(file => file && file.length > 0, "Doctor image is required"),
    doctorFirstName: z.string().min(1, "First name is required"),
    doctorLastName: z.string().min(1, "Last name is required"),
    dateOfBirth: z.string(),
    gender: z.enum(["male", "female", "other"]),
    degree: z.enum(["BDS", "MDS"]),
    specialization: z.string(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(20, { message: "Password must be at most 20 characters long" }),
    phoneNumber: z.string().regex(/^\d{10}$/, "Invalid phone number"),
    bio: z.string(),
    adhaarFrontImg: z.any().refine(file => file && file.length > 0, "Adhaar front is required"),
    adhaarBackImg: z.any().refine(file => file && file.length > 0, "Adhaar back is required"),
    doctorsSignature: z.any().refine(file => file && file.length > 0, "Doctor's signature is required"),
})

const hospitalExperienceSchema = z.object({
    organizationName: z.string().min(1, "Organization Name is required"),
    from: z.string().min(1, "start date is required"),
    to: z.string().min(1, "end date is required"),
});

export const PersonalDetails2Schema = z.object({
    dentistRegistranstionCertificate: z.any().refine(file => file && file.length > 0, "Dentist Registranstion Certification is required"),
    degreeByStateCouncil: z.any().refine(file => file && file.length > 0, "Degree by State Councilis is required"),
    dentistRegistranstionNumber: z.string(),
    collegePassoutYear: z.string(),
    experiences: z.array(hospitalExperienceSchema).min(1, "At least one work experience is required")
})

export const PersonalDetailsSchema = z.object({
    ...PersonalDetails1Schema.shape,
    ...PersonalDetails2Schema.shape,
})


export const Clinic1Schema = z.object({
    clinicName: z.string().min(1, "Clinic name is required"),
    clinicReceptionNumber: z.string().regex(/^\d{10}$/, "Invalid contact number"),
    clinicConsultationFees: z.string().min(1, "Clinic Consultation Fees is required"),
    numberOfDentalChairs: z.string().min(1, "Number Of Dental Chairs is required"),
    clinicOwnership: z.string().min(1, "Clinic Ownership is required"),
    propertyOwnership: z.string().min(1, "Property Ownership is required"),
    address: z.string().min(1, "Address is required"),
    nearbyLandmark: z.string().min(1, "Landmark is required"),
    pincode: z.string().min(1, "Pincode is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    clinicLocationLink: z.string().min(1, "Clinic Location Link is required")
})

export const Clinic2Schema = z.object({
    selectedDaysWithTiming: z.array(

    ).min(1, "At least one day with timings must be selected"),
})

export const Clinic3Schema = z.object({
    clinicLogo: z.any().refine(file => file && file.length > 0, "Clinic Logo is required"),
    clinicPhoto: z.any().refine(file => file && file.length > 0, "Clinic Photo is required"),
    doctorPhoto: z.any().refine(file => file && file.length > 0, "Doctor Photo is required"),
    clinicVisitingCard: z.any().refine(file => file && file.length > 0, "Clinic Visiting Card is required"),
    frontFascia: z.any().refine(file => file && file.length > 0, "Front Fascia is required"),
    receptionCounter: z.any().refine(file => file && file.length > 0, "Reception Counter is required"),
    waitingArea: z.any().refine(file => file && file.length > 0, "Waiting Area is required"),
    consultationTable: z.any().refine(file => file && file.length > 0, "Consultation Table is required"),
    certificateWall: z.any().refine(file => file && file.length > 0, "Certificate Wall is required"),
    otherPictures: z.any().refine(file => file && file.length > 0, "Other Pictures is required"),
})

export const ClinicSchema = z.object({
    ...Clinic1Schema.shape,
    ...Clinic2Schema.shape,
    ...Clinic3Schema.shape,
})

export const OthersDetailsSchema = z.object({
    instagramProfileLink: z.string(),
    facebookProfileLink: z.string(),
    youtubeProfileLink: z.string(),
    linkdinProfileLink: z.string(),
    websiteLink: z.string(),
    vaccinationCertification: z.any().refine(file => file && file.length > 0, "Vaccination Certification is required"),
    statePollutionCertification: z.any().refine(file => file && file.length > 0, "State Pollution Certification is required"),
    BMWLicenseCertification: z.any().refine(file => file && file.length > 0, "BMW License Certification is required"),
    coursesCertification: z.any().refine(file => file && file.length > 0, "Courses Certification is required"),
})

// BankDetailsSchema
export const BankDetailsSchema = z.object({
    bankAccountNumber: z.string().regex(/^\d+$/, 'Account number must contain only digits'),
    bankAccountType: z.enum(['savings', 'current', 'fixed', 'recurring'], {
        errorMap: () => ({ message: 'Bank account type must be one of: savings, current, fixed, recurring' }),
    }),
    branchName: z.string().regex(/^[a-zA-Z\s]+$/, 'Bank name must contain only letters and spaces'),
    IFSCCode: z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, 'IFSC code must be in the format: 4 letters, "0", and 6 alphanumeric characters'),
    upiCode: z.string().regex(/^[\w.-]+@[\w]+$/, 'UPI code must be in the format: identifier@bankname'),
    clinicQrCode: z.any().refine(file => file && file.length > 0, "Clinic OR Code is required"),
})
