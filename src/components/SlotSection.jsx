import { Button } from "./ui/button";
import icon from "@/assets/Frame (5).png";

const SlotSection = ({
  title,
  slots,
  selectedSlot,
  handleSlotClick,
  dayDate,
}) => (
  <div className="grid w-full gap-3 sm:max-h-[120px] overflow-y-auto">
    {/* <div className="flex items-center gap-2">
            <img src={icon} alt={`${title} Icon`} />
            <h4 className="font-inter text-[#1A1A1A]">{title}</h4>
        </div> */}
    {slots?.length > 0 ? (
      <div className="grid grid-cols-4 w-full gap-2">
        {slots.map((slot, slotIndex) => (
          <Button
            type="button"
            key={slotIndex}
            variant="secondary"
            className={`border-2 text-xs sm:text-sm hover:scale-100 ${selectedSlot === slot?.slotId?.startTime ? "bg-[#95C22B] hover:bg-[#95C22B] text-white" : ""}`}
            onClick={() =>
              handleSlotClick(
                slot?.slotId?.startTime,
                dayDate,
                slot?.slotId?._id,
              )
            }
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

export default SlotSection;
