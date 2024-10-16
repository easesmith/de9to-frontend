export const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) return 0;

    const sum = ratings.reduce((acc, rating) => acc + Number(rating?.patientRating), 0);
    const average = sum / ratings?.length;
    return Number(average);
}