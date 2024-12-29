import ProfileLayout from '@/component/Layout/ProfileLayout';
import NotificationSettingCheckbox from '@/components/profile/NotificationSettingCheckbox';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { NotificationSettingSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { readCookie } from '@/utils/readCookie';

const NotificationsSettings = () => {
    const form = useForm({
        resolver: zodResolver(NotificationSettingSchema),
        defaultValues: {
            receiveAllSms: false,
            announcements: false,
            savings: false,
            feedback: false,
            healthTips: false,
            informational: false,
            updatesViaWhatsapp: false,
            notificationFromDento: false,
        },
    });

    const { reset, handleSubmit, getValues, watch } = form;

    const userInfo = readCookie("userInfo");
    console.log("userInfo", userInfo)

    const onSubmit = (data) => {
        console.log("Data:", data);
        // reset();
    };

    return (
        <ProfileLayout>
            <div className='w-full flex items-start justify-center mt-5'>
                <div className="max-w-3xl rounded-lg w-full bg-white p-4">
                    <h1 className='text-2xl max-sm:text-xl font-inter font-semibold text-[#1A1A1A]'>SMS Settings</h1>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full'>
                            <div className="w-full flex flex-col gap-3 mt-5">
                                <FormField
                                    control={form.control}
                                    name="receiveAllSms"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                            <FormControl>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox
                                                        className="w-5 h-5"
                                                        onCheckedChange={field.onChange}
                                                        checked={field.value}
                                                        id="receiveAllSms"
                                                    />

                                                    <label
                                                        htmlFor="receiveAllSms"
                                                        className="text-[#1A1A1A] font-medium leading-none peer-disabled:cursor-not-allowed text-base peer-disabled:opacity-70"
                                                    >
                                                        I want to receive ALL
                                                    </label>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <NotificationSettingCheckbox
                                    control={form.control}
                                    name="announcements"
                                    title="Announcements"
                                    desc="Most important updates on new and exciting products. Sent around once in a month"
                                />

                                <NotificationSettingCheckbox
                                    control={form.control}
                                    name="savings"
                                    title="Savings"
                                    desc="Get exclusive discounts and offers to save money on your healthcare bill. Sent usually once in 15 days"
                                />

                                <NotificationSettingCheckbox
                                    control={form.control}
                                    name="feedback"
                                    title="Feedback"
                                    desc="Get beta invitations, surveys and feedback forms, for sharing your suggestions. Sent once in a month."
                                />

                                <NotificationSettingCheckbox
                                    control={form.control}
                                    name="healthTips"
                                    title="Health Tips"
                                    desc="Get the most insightful health tips and articles from verified doctors. Sent 1-2 times per week."
                                />

                                <NotificationSettingCheckbox
                                    control={form.control}
                                    name="informational"
                                    title="Informational"
                                    desc="Get to know what's the latest through our newsletters, product updates and more! Sent once in a week."
                                />


                                <h2 className='text-2xl max-sm:text-xl font-inter font-semibold text-[#1A1A1A] mt-10'>Whatsapp Settings</h2>
                                <div className="flex items-center gap-2 mt-3">
                                    <h3 className='font-inter max-sm:text-xs text-[#1A1A1A] text-base font-medium'>You are currently receiving all communications on +91{userInfo?.phone}</h3>
                                    <button className='rounded-[6px] border-[1px] border-[#95C22B] h-7 px-2 flex items-center gap-[6px]'>
                                        <span className='text-[#95C22B] text-xs font-medium font-inter'>Change</span>
                                    </button>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="updatesViaWhatsapp"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                            <FormControl>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox
                                                        className="w-5 h-5"
                                                        onCheckedChange={field.onChange}
                                                        checked={field.value}
                                                        id="updatesViaWhatsapp"
                                                    />

                                                    <label
                                                        htmlFor="updatesViaWhatsapp"
                                                        className="text-[#717171] max-sm:text-[10px] font-medium leading-none peer-disabled:cursor-not-allowed text-sm peer-disabled:opacity-70"
                                                    >
                                                        I want to receive important notifications and updates via WhatsApp
                                                    </label>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                <h2 className='text-2xl max-sm:text-xl font-inter font-semibold text-[#1A1A1A] mt-10'>Unsubscribe ALL</h2>
                                <FormField
                                    control={form.control}
                                    name="notificationFromDento"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                            <FormControl>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox
                                                        className="w-5 h-5"
                                                        onCheckedChange={field.onChange}
                                                        checked={field.value}
                                                        id="notificationFromDento"
                                                    />

                                                    <label
                                                        htmlFor="notificationFromDento"
                                                        className="text-[#1A1A1A] max-sm:text-xs font-medium text-base"
                                                    >
                                                        I don’t want  to receive any notification from De9to
                                                    </label>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* <div className='mt-3'>
                                    <FormField
                                        control={form.control}
                                        name="test"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="grid grid-cols-1 gap-5"
                                                    >
                                                        <FormItem className="w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <FormControl>
                                                                    <RadioGroupItem value="test1" id="r2" />
                                                                </FormControl>
                                                                <Label className="text-[#717171] font-medium text-sm" htmlFor="r2">I am not interested in online health care services</Label>
                                                            </div>
                                                        </FormItem>
                                                        <FormItem className="w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <FormControl>
                                                                    <RadioGroupItem value="test2" id="r2" />
                                                                </FormControl>
                                                                <Label className="text-[#717171] font-medium text-sm" htmlFor="r2">I am not interested in online health care services</Label>
                                                            </div>
                                                        </FormItem>
                                                        <FormItem className="w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <FormControl>
                                                                    <RadioGroupItem value="test3" id="r2" />
                                                                </FormControl>
                                                                <Label className="text-[#717171] font-medium text-sm" htmlFor="r2">I am not interested in online health care services</Label>
                                                            </div>
                                                        </FormItem>
                                                        <FormItem className="w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <FormControl>
                                                                    <RadioGroupItem value="test4" id="r2" />
                                                                </FormControl>
                                                                <Label className="text-[#717171] font-medium text-sm" htmlFor="r2">I am not interested in online health care services</Label>
                                                            </div>
                                                        </FormItem>
                                                        <FormItem className="w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <FormControl>
                                                                    <RadioGroupItem value="test5" id="r2" />
                                                                </FormControl>
                                                                <Label className="text-[#717171] font-medium text-sm" htmlFor="r2">I am not interested in online health care services</Label>
                                                            </div>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div> */}

                            </div>

                            <Button type="submit" className="bg-[#95C22B] text-base mt-4 flex justify-center w-full h-12">
                                Submit
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default NotificationsSettings