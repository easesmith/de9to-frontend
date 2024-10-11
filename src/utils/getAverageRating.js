export const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) return 0;

    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = sum / ratings.length;
    return average.toFixed(2);
}