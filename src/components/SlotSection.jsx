import { Button } from "./ui/button";
import icon from "@/assets/Frame (5).png";

const SlotSection = ({ title, slots, selectedSlot, handleSlotClick, dayDate }) => (
    <div className="grid w-full gap-3">
        {/* <div className="flex items-center gap-2">
            <img src={icon} alt={`${title} Icon`} />
            <h4 className="font-inter text-[#1A1A1A]">{title}</h4>
        </div> */}
        {slots?.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] w-full gap-2">
                {slots.map((slot, slotIndex) => (
                    <Button
                        type="button"
                        key={slotIndex}
                        variant="secondary"
                        className={`border-2 ${selectedSlot === slot?.slotId?.startTime ? 'bg-[#95C22B] hover:bg-[#95C22B] text-white' : ''} text-xs sm:text-base`}
                        onClick={() => handleSlotClick(slot?.slotId?.startTime, dayDate,slot?.slotId?._id)}
                        disabled={slot?.slotId?.isBooked}
                    >
                        {slot?.slotId?.startTime}
                    </Button>
                ))}
            </div>
        ) : (
            <p className="text-red-500">No slots available</p>
        )}
    </div>
);

export default SlotSection