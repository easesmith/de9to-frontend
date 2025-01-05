import { differenceInYears } from "date-fns";

export const calculateYearFromDOB = (dob) => {
    const birthDate = new Date(dob); // Ensure the DOB is in a Date object format
    const age = differenceInYears(new Date(), birthDate); // Calculate age
    return age;
};