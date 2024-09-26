import { Button } from "./ui/button";
import icon from "@/assets/Frame (4).png";

const SlotSection = ({ title, slots, selectedSlot, handleSlotClick, dayDate }) => (
    <div className="grid grid-cols-[120px_1fr] gap-3">
        <div className="flex items-center gap-2">
            <img src={icon} alt={`${title} Icon`} />
            <h4 className="font-inter text-[#1A1A1A]">{title}</h4>
        </div>
        {slots.length > 0 ? (
            <div className="grid grid-cols-[repeat(5,1fr)] gap-2">
                {slots.map((slot, slotIndex) => (
                    <Button
                        type="button"
                        key={slotIndex}
                        variant="secondary"
                        className={`border-2 ${selectedSlot === slot ? 'bg-[#95C22B] hover:bg-[#95C22B] text-white' : ''}`}
                        onClick={() => handleSlotClick(slot, dayDate)}
                    >
                        {slot}
                    </Button>
                ))}
            </div>
        ) : (
            <p className="text-red-500">No slots available</p>
        )}
    </div>
);

export default SlotSection