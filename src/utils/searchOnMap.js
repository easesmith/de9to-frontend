import toast from "react-hot-toast";

export const searchOnMap = ({ latitude, longitude }) => {
    if (!latitude || !longitude) return toast.error('Location not found');
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(mapUrl, '_blank'); // Opens Google Maps in a new tab with the coordinates
};