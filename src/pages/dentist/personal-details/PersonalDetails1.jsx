import { ImageCompo, ShowImageCompo } from '@/component/dentist-signup/ImageCompo';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { updatePreview } from '@/utils/updatePreview';
import { useEffect, useState } from 'react';
import { FaUpload } from "react-icons/fa6";
import { HiRefresh } from "react-icons/hi";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdPersonRemoveAlt1 } from "react-icons/md";

const PersonalDetails1 = ({ form }) => {

    const { register, control, watch, setValue } = form

    const [showPassword, setShowPasswprd] = useState(false)

    function showHidePassword() {
        setShowPasswprd(!showPassword)
    }

    const doctorImg = register("doctorImg")
    const adhaarFrontImg = register("adhaarFrontImg")
    const adhaarBackImg = register("adhaarBackImg")
    const doctorsSignatureImg = register("doctorsSignature")


    const doctorImgWatch = watch("doctorImg")
    const adhaarFrontImgWatch = watch("adhaarFrontImg")
    const adhaarBackImgWatch = watch("adhaarBackImg")
    const doctorsSignatureImgWatch = watch("doctorsSignature")

    useEffect(() => {
        updatePreview(doctorImgWatch, "doctorImgWatchPreview", setValue)
        updatePreview(adhaarFrontImgWatch, "adhaarFrontImgWatchPreview", setValue)
        updatePreview(adhaarBackImgWatch, "adhaarBackImgWatchPreview", setValue)
        updatePreview(doctorsSignatureImgWatch, "doctorsSignatureImgWatchPreview", setValue)

    }, [form, doctorImgWatch, adhaarFrontImgWatch, adhaarBackImgWatch, doctorsSignatureImgWatch, setValue])

    return (
        <>
            <h3 className='text-[#95C22B] text-2xl font-semibold font-Barlow'>Doctor Details</h3>
            <div className='flex justify-between gap-5 w-full'>
                <div className='flex flex-col gap-5 w-[550px]'>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={control}
                            name="doctorFirstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>First Name</FormLabel>
                                    <div className="relative mt-1">
                                        <FormControl>
                                            <Input placeholder="Enter First Name" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                        </FormControl>
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                            onClick={() => setValue("doctorFirstName", "")}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="doctorLastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Last Name</FormLabel>
                                    <div className="relative mt-1">
                                        <FormControl>
                                            <Input placeholder="Enter Last Name" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                        </FormControl>
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                            onClick={() => setValue("doctorLastName", "")}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={control}
                            name="dateOfBirth"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Date of Birth</FormLabel>
                                    <div className="relative mt-1">
                                        <FormControl>
                                            <Input type="date" placeholder="Enter Date of Birth" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                        </FormControl>
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                            onClick={() => setValue("dateOfBirth", "")}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Gender</FormLabel>
                                    <FormControl>
                                        {/* <div className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <Input type="radio" className="accent-black w-8 h-6" {...field} />
                          <Label htmlFor="male" className='text-[12.6px]'>Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Input type="radio" className="accent-black w-8 h-6" {...field} />
                          <Label htmlFor="female" className='text-[12.6px]'>Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Input type="radio" className="accent-black w-8 h-6" {...field} />
                          <Label htmlFor="others" className='text-[12.6px]'>Others</Label>
                        </div>
                      </div> */}
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="male" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    male
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="female" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    female
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="others" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    others
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={control}
                            name="degree"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Degree</FormLabel>
                                    <FormControl>
                                        {/* <div className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <Input type="radio" className="accent-black w-8 h-6" {...field} />
                          <Label htmlFor="BDS" className='text-[12.6px]'>BDS</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Input type="radio" className="accent-black w-8 h-6" {...field} />
                          <Label htmlFor="MDS" className='text-[12.6px]'>MDS</Label>
                        </div>
                      </div> */}
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem className="bg-[#95C22B] border-2 border-[#95C22B] w-[18px] h-[18px]" value="BDS" />
                                                </FormControl>
                                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>
                                                    BDS
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem className="bg-[#95C22B] border-2 border-[#95C22B] w-[18px] h-[18px]" value="MDS" />
                                                </FormControl>
                                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>
                                                    MDS
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>

                                        {/* <RadioGroup defaultValue="comfortable">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="default" className="bg-white border-[5px] border-[red]" id="r1" />
                                                <Label htmlFor="r1">Default</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="comfortable" id="r2" />
                                                <Label htmlFor="r2">Comfortable</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="compact" id="r3" />
                                                <Label htmlFor="r3">Compact</Label>
                                            </div>
                                        </RadioGroup> */}

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="specialization"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Specialization</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl className={`bg-[#F9FAFB] border-[#D1D5DB] rounded-lg`}>
                                            <SelectTrigger className="w-full text-[#6B7280] text-sm font-normal font-barlow">
                                                <SelectValue placeholder="Main Doctor" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>doctor</SelectLabel>
                                                <SelectItem value="apple">Apple</SelectItem>
                                                <SelectItem value="banana">Banana</SelectItem>
                                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                                <SelectItem value="grapes">Grapes</SelectItem>
                                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Email Id</FormLabel>
                                <div className="relative mt-1">
                                    <FormControl>
                                        <Input type="email" placeholder="Enter Email Id" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                    </FormControl>
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                        onClick={() => setValue("email", "")}
                                    >
                                        &times;
                                    </button>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Password</FormLabel>
                                <div className="relative mt-1">
                                    <FormControl>
                                        <Input type={`${showPassword ? 'password' : 'text'}`} placeholder="Enter Password" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                    </FormControl>
                                    {
                                        showPassword ? <IoEyeOff className=' absolute top-[28%] right-[2%] cursor-pointer' onClick={showHidePassword} /> : <IoEye className=' absolute top-[28%] right-[2%] cursor-pointer' onClick={showHidePassword} />
                                    }
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Phone Number</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Enter Phone Number" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="bio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Bio</FormLabel>
                                <div className="relative mt-1">
                                    <FormControl>
                                        <Textarea
                                            type="text"
                                            placeholder="Introduce yourself and share your background" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`}
                                            {...field}
                                        />
                                    </FormControl>
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 flex items-start pr-3 text-[#6B7280] hover:text-gray-600"
                                        onClick={() => setValue("bio", "")}
                                    >
                                        &times;
                                    </button>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="adhaarFrontImg"
                        render={({ field }) => (
                            <FormItem className="z-20">
                                {watch("adhaarFrontImgWatchPreview") && <ShowImageCompo field={"adhaarFrontImgWatchPreview"} setValue={setValue} watch={watch} title={"Adhaar Front Img"} />}
                                <FormLabel className={`w-[250px]`}>
                                    {!watch("adhaarFrontImgWatchPreview") && <ImageCompo title={"Adhaar Front Img"} />}
                                </FormLabel>
                                <FormControl className="hidden">
                                    <Input type="file" accept='.png,.jpeg,.jpg' {...adhaarFrontImg} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="adhaarBackImg"
                        render={({ field }) => (
                            <FormItem className="z-20">
                                {watch("adhaarBackImgWatchPreview") && <ShowImageCompo field={"adhaarBackImgWatchPreview"} setValue={setValue} watch={watch} title={"Adhaar Back Img"} />}
                                <FormLabel className={`w-[250px]`}>
                                    {!watch("adhaarBackImgWatchPreview") && <ImageCompo title={"Adhaar Back Img"} />}
                                </FormLabel>
                                <FormControl className="hidden">
                                    <Input type="file" accept='.png,.jpeg,.jpg' {...adhaarBackImg} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="doctorsSignature"
                        render={({ field }) => (
                            <FormItem className="z-20">
                                {watch("doctorsSignatureImgWatchPreview") && <ShowImageCompo field={"doctorsSignatureImgWatchPreview"} setValue={setValue} watch={watch} title={"Doctors Signature"} />}
                                <FormLabel className={`w-[250px]`}>
                                    {!watch("doctorsSignatureImgWatchPreview") && <ImageCompo title={"Doctors Signature"} />}
                                </FormLabel>
                                <FormControl className="hidden">
                                    <Input type="file" accept='.png,.jpeg,.jpg' {...doctorsSignatureImg} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={control}
                        name="doctorImg"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="cursor-pointer">
                                    {watch("doctorImgWatchPreview") && <>
                                        <span className={`text-[#111928] text-sm font-medium font-barlow`}>Doctor Image</span>
                                        <img src={watch("doctorImgWatchPreview")} alt="" className='w-[180px] h-[200px] mt-2' />
                                    </>}
                                    {!watch("doctorImgWatchPreview") && <>
                                        <span className={`text-[#111928] text-sm font-medium font-barlow`}>Doctor Image</span>
                                        <div className={`flex flex-col items-center justify-center gap-2 w-[180px] h-[200px] bg-[#F9FAFB] border-dashed border-[2px] border-[#E5E7EB] rounded-sm mt-2`}>
                                            <FaUpload className='text-[#9CA3AF] text-3xl' />
                                            <p className={`text-[#6B7280] text-sm font-bold font-inter`}>Click to upload</p>
                                            <p className={`text-[#6B7280] text-xs font-bold font-inter`}>(MAX. 800x400px)</p>
                                        </div>
                                    </>}
                                    <div className=' flex items-center justify-between mt-2'>
                                        <Button variant='profileBtn' size='profileBtn' ><HiRefresh className='text-xl' /><span>Update</span></Button>
                                        <Button onClick={() => setValue("doctorImgWatchPreview", "")} variant='profileBtn' size='profileBtn'><MdPersonRemoveAlt1 className='text-xl' /><span>Remove</span></Button>
                                    </div>
                                </FormLabel>
                                <FormControl>
                                    <Input type="file" className="placeholder:text-[#AEB4CF] border-[#E4E6EE] hidden" {...doctorImg} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>
        </>
    )
}

export default PersonalDetails1