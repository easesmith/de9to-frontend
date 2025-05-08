import { z } from 'zod'

export const addComplaintSchema = z.object({
    complaintType: z.enum(['general', 'appointment-related', 'payment-related']),
    date: z.date({ required_error: "Date is required" }),
    raisedBy: z.string(),
    raisedFor: z.enum(['dentist', 'admin']),
    remark: z
        .string()
        .min(1, { message: "Please provide a description for the issue." }),
    issue: z
        .string()
        .min(1, { message: "Please describe the issue you're facing." }),
    dentistId: z.string().optional(),
    patientId: z.string().optional(),
    appointmentId: z.string().optional(),
    clinicId: z.string().optional(),
})
    .refine(
        (data) =>
            data.complaintType !== 'appointment-related' || !!data.appointmentId,
        {
            message: "appointmentId is required when complaintType is 'appointment-related'",
            path: ['appointmentId'],
        }
    )
    .refine(
        (data) =>
            data.raisedFor !== 'patient' || !!data.patientId,
        {
            message: "patientId is required when raised for patient'",
            path: ['patientId'],
        }
    )
    .refine(
        (data) =>
            data.raisedFor !== 'dentist' || !!data.dentistId,
        {
            message: "dentistId is required when raised for dentist'",
            path: ['dentistId'],
        }
    )