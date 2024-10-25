import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { LoginSchema, LoginSchema1 } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight, FaUnlockAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import OtpComp from './OtpComp';
import usePostApiReq from '@/hooks/usePostApiReq';
import { useNavigate } from 'react-router-dom';

const LoginComp = ({ setIsShowTabs }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isLoginwithOtp, setIsLoginwithOtp] = useState(false);
  const [isOtpSectionOpen, setIsOtpSectionOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(isLoginwithOtp ? LoginSchema1 : LoginSchema),
    defaultValues: {
      emailOrPhone: "",
      password: "",
      rememberMe: false,
      loginWithOtp: false,
    },
  });

  const { res, fetchData, isLoading } = usePostApiReq();
  const { reset, handleSubmit, getValues, watch } = form;

  const loginWithOtp = watch("loginWithOtp");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoginwithOtp(loginWithOtp);
  }, [loginWithOtp]);

  const onSubmit = (data) => {
    console.log("Data:", data);
    if (isLoginwithOtp) {
      fetchData(`/patient/get-otp`, { phone: data.emailOrPhone });
    }
    else {
      fetchData(`/patient/patient-login`, { loginInput: data.emailOrPhone, password: data.password });
    }
    // reset();
  };


  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("patient login res", res);
      if (isLoginwithOtp) {
        setIsShowTabs(false);
        setIsOtpSectionOpen(true);
      }
      else {
        navigate("/")
      }
    }
  }, [res])

  return (
    <div className='h-full '>
      {isOtpSectionOpen ?
        <OtpComp
          phone={getValues("emailOrPhone")}
          setIsOtpSectionOpen={setIsOtpSectionOpen}
          setIsShowTabs={setIsShowTabs}
          apiData={getValues()}
          getOtp={onSubmit}
        />
        : <div>
          <h1 className='text-[#1A1A1A] font-inter text-2xl font-semibold text-center mt-8'>Welcome Back</h1>
          <p className='font-inter text-[#717171] text-center font-normal mt-1'>LOG IN TO CONTINUE</p>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full'>
              <div className="w-full flex flex-col gap-4 mt-4">
                <FormField
                  control={form.control}
                  name="emailOrPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                      <FormControl>
                        <div className='relative'>
                          <MdEmail className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                          <Input placeholder="Enter mail/mobile" className="placeholder:text-[#717171] pl-10 h-12 border-[#E4E6EE]" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {!getValues("loginWithOtp") && <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                      <FormControl>
                        <div className='relative'>
                          <FaUnlockAlt className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                          <Input type={isPasswordShow ? "text" : "password"} placeholder="********" className="placeholder:text-[#717171] pl-10 pr-12 h-12 border-[#E4E6EE]" {...field} />
                          <button type='button' onClick={() => setIsPasswordShow(!isPasswordShow)} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#717171] text-xs'>{isPasswordShow ? "Hide" : "Show"}</button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />}
              </div>
              <div className="w-full flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                      <FormControl>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            onCheckedChange={field.onChange}
                            checked={field.value}
                            id="rememberMe"
                          />

                          <label
                            htmlFor="rememberMe"
                            className="text-sm max-[500px]:text-xs text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Remember me for 30 days
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="loginWithOtp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                      <FormControl>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            onCheckedChange={field.onChange}
                            checked={field.value}
                            id="loginWithOtp"
                          />

                          <label
                            htmlFor="loginWithOtp"
                            className="text-sm max-[500px]:text-xs text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Login with OTP instead
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {getValues("loginWithOtp") ? <Button type="submit" className="bg-[#95C22B] mt-4 flex justify-center w-full h-12">
                Send OTP
              </Button>
                : <Button type="submit" className="bg-[#95C22B] mt-4 flex justify-between w-full h-12">
                  <span>Proceed to my Account</span>
                  <FaArrowRight className='text-white' />
                </Button>}
              <div className="flex justify-end items-center w-full">
                <button type='button' className='font-inter text-xs text-[#1A1A1A]'>Forgot Password?</button>
              </div>
            </form>
          </Form>
        </div>
      }

    </div>
  )
}

export default LoginComp