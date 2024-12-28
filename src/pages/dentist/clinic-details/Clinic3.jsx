import React, { useEffect } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FaXmark } from 'react-icons/fa6'
import { updatePreview } from '@/utils/updatePreview'
import { ImageCompo, ShowImageCompo } from '@/component/dentist-signup/ImageCompo'

const Clinic3 = ({ form }) => {

  const { register, control, watch, setValue } = form


  const clinicLogoImg = register("clinicLogo")
  const clinicPhotoImg = register("clinicPhoto")
  const doctorPhotoImg = register("doctorPhoto")
  const clinicVisitingCardImg = register("clinicVisitingCard")
  const frontFasciaImg = register("frontFascia")
  const receptionCounterImg = register("receptionCounter")
  const waitingAreaImg = register("waitingArea")
  const consultationTableImg = register("consultationTable")
  const certificateWallImg = register("certificateWall")
  const otherPicturesImg = register("otherPictures")


  const clinicLogoImgWatch = watch("clinicLogo")
  const clinicPhotoImgWatch = watch("clinicPhoto")
  const doctorPhotoImgWatch = watch("doctorPhoto")
  const clinicVisitingCardImgWatch = watch("clinicVisitingCard")
  const frontFasciaImgWatch = watch("frontFascia")
  const receptionCounterImgWatch = watch("receptionCounter")
  const waitingAreaImgWatch = watch("waitingArea")
  const consultationTableImgWatch = watch("consultationTable")
  const certificateWallImgWatch = watch("certificateWall")
  const otherPicturesImgWatch = watch("otherPictures")


  useEffect(() => {
    updatePreview(clinicLogoImgWatch, "clinicLogoImgWatchPreview", setValue)
    updatePreview(clinicPhotoImgWatch, "clinicPhotoImgWatchPreview", setValue)
    updatePreview(doctorPhotoImgWatch, "doctorPhotoImgWatchPreview", setValue)
    updatePreview(clinicVisitingCardImgWatch, "clinicVisitingCardImgWatchPreview", setValue)
    updatePreview(frontFasciaImgWatch, "frontFasciaImgWatchPreview", setValue)
    updatePreview(receptionCounterImgWatch, "receptionCounterImgWatchPreview", setValue)
    updatePreview(waitingAreaImgWatch, "waitingAreaImgWatchPreview", setValue)
    updatePreview(consultationTableImgWatch, "consultationTableImgWatchPreview", setValue)
    updatePreview(certificateWallImgWatch, "certificateWallImgWatchPreview", setValue)
    updatePreview(otherPicturesImgWatch, "otherPicturesImgWatchPreview", setValue)


  }, [form, clinicLogoImgWatch, clinicPhotoImgWatch, doctorPhotoImgWatch, clinicVisitingCardImgWatch, frontFasciaImgWatch, receptionCounterImgWatch, waitingAreaImgWatch, consultationTableImgWatch, certificateWallImgWatch, otherPicturesImgWatch, setValue])

  return (
    <>
      <h3 className='text-[#95C22B] text-2xl font-semibold font-Barlow'>Clinic Details</h3>
      <div className='flex flex-col gap-5 w-[700px]'>
        <FormField
          control={control}
          name="clinicLogo"
          render={({ field }) => (
            <FormItem>
              {watch("clinicLogoImgWatchPreview") && <ShowImageCompo field={"clinicLogoImgWatchPreview"} setValue={setValue} watch={watch} title={"clinic Logo"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("clinicLogoImgWatchPreview") && <ImageCompo title={"clinic Logo"} />}
              </FormLabel>
              <FormControl>
                <Input type="file" className="hidden" {...clinicLogoImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="clinicPhoto"
          render={({ field }) => (
            <FormItem>
              {watch("clinicPhotoImgWatchPreview") && <ShowImageCompo field={"clinicPhotoImgWatchPreview"} setValue={setValue} watch={watch} title={"clinic Photo"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("clinicPhotoImgWatchPreview") && <ImageCompo title={"clinic Photo"} />}
              </FormLabel>
              <FormControl>
                <Input type="file" className="hidden" {...clinicPhotoImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="doctorPhoto"
          render={({ field }) => (
            <FormItem>
              {watch("doctorPhotoImgWatchPreview") && <ShowImageCompo field={"doctorPhotoImgWatchPreview"} setValue={setValue} watch={watch} title={"doctor Photo"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("doctorPhotoImgWatchPreview") && <ImageCompo title={"doctor Photo"} />}
              </FormLabel>
              <FormControl>
                <Input type="file" className="hidden" {...doctorPhotoImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="clinicVisitingCard"
          render={({ field }) => (
            <FormItem>
              {watch("clinicVisitingCardImgWatchPreview") && <ShowImageCompo field={"clinicVisitingCardImgWatchPreview"} setValue={setValue} watch={watch} title={"clinic Visiting Card"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("clinicVisitingCardImgWatchPreview") && <ImageCompo title={"clinic Visiting Card"} />}
              </FormLabel>
              <FormControl>
                <Input type="file" className="hidden" {...clinicVisitingCardImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="frontFascia"
          render={({ field }) => (
            <FormItem>
              {watch("frontFasciaImgWatchPreview") && <ShowImageCompo field={"frontFasciaImgWatchPreview"} setValue={setValue} watch={watch} title={"front Fascia"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("frontFasciaImgWatchPreview") && <ImageCompo title={"front Fascia"} />}
              </FormLabel>
              <FormControl>
                <Input type="file" className="hidden" {...frontFasciaImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="receptionCounter"
          render={({ field }) => (
            <FormItem>
              {watch("receptionCounterImgWatchPreview") && <ShowImageCompo field={"receptionCounterImgWatchPreview"} setValue={setValue} watch={watch} title={"reception Counter"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("receptionCounterImgWatchPreview") && <ImageCompo title={"reception Counter"} />}
              </FormLabel>
              <FormControl>
                <Input type="file" className="hidden" {...receptionCounterImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="waitingArea"
          render={({ field }) => (
            <FormItem>
              {watch("waitingAreaImgWatchPreview") && <ShowImageCompo field={"waitingAreaImgWatchPreview"} setValue={setValue} watch={watch} title={"waiting Area"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("waitingAreaImgWatchPreview") && <ImageCompo title={"waiting Area"} />}
              </FormLabel>
              <FormControl>
                <Input type="file" className="hidden" {...waitingAreaImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="consultationTable"
          render={({ field }) => (
            <FormItem>
              {watch("consultationTableImgWatchPreview") && <ShowImageCompo field={"consultationTableImgWatchPreview"} setValue={setValue} watch={watch} title={"consultation Table"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("consultationTableImgWatchPreview") && <ImageCompo title={"consultation Table"} />}
              </FormLabel>
              <FormControl>
                <Input type="file" className="hidden" {...consultationTableImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="certificateWall"
          render={({ field }) => (
            <FormItem>
              {watch("certificateWallImgWatchPreview") && <ShowImageCompo field={"certificateWallImgWatchPreview"} setValue={setValue} watch={watch} title={"certificate Wall"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("certificateWallImgWatchPreview") && <ImageCompo title={"certificate Wall"} />}
              </FormLabel>
              <FormControl>
                <Input type="file" className="hidden" {...certificateWallImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="otherPictures"
          render={({ field }) => (
            <FormItem>
              {watch("otherPicturesImgWatchPreview") && <ShowImageCompo field={"otherPicturesImgWatchPreview"} setValue={setValue} watch={watch} title={"other Pictures"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("otherPicturesImgWatchPreview") && <ImageCompo title={"other Pictures"} />}
              </FormLabel>
              <FormControl>
                <Input type="file" className="hidden" {...otherPicturesImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}

export default Clinic3
