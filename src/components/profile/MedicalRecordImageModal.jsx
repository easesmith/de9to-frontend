import { Dialog, DialogContent, DialogDescription, DialogHeader } from '../ui/dialog'

const MedicalRecordImageModal = ({ isMedicalRecordModalOpen, setIsMedicalRecordModalOpen,image }) => {
  return (
    <Dialog open={isMedicalRecordModalOpen} onOpenChange={setIsMedicalRecordModalOpen}>
      <DialogContent className="max-w-[680px] max-h-[95vh] p w-full">
        <DialogHeader>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <img className='h-full w-full' src={image} alt="" />
      </DialogContent>
    </Dialog>
  )
}

export default MedicalRecordImageModal