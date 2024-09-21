import React from 'react'
import Layout from '@/component/Layout/Layout'
import { Link } from 'react-router-dom'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { commentSchema } from '@/schema/formSchema'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import TeethCheckImg from '../../assets/ca-dentistry-patient-dental-health 1.png'
import Card from '@/component/Card/Card'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import Img1 from '../../assets/dentist-doing-check-up-patient 1.png'
import { GoArrowUpRight } from 'react-icons/go'
import { FaRegCalendar } from 'react-icons/fa'
import { MdShare } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { PrevLink } from '@/component/MiniCompo/MiniCompo'

const BlogDetail = () => {

  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      emailId: "",
      comment: ""
    },
  })

  const { reset, handleSubmit } = form

  const onSubmit = (data) => {
    console.log(data)
    reset({
      name: "",
      emailId: "",
      comment: ""
    })
  }
  return (
    <Layout>
      <main className='w-full max-w-[1240px] mx-auto'>
        <PrevLink page="Blogs Details" />
        <section className=' flex items-start justify-between'>
          <div className='w-2/3 flex flex-col gap-4'>
            <div className=' flex flex-col gap-5'>
              <div>
                <img src={TeethCheckImg} alt="" />
              </div>
              <div className='flex flex-col items-start gap-2 py-[10px]'>
                <h2 className='text-[#313131] text-[28px] font-medium font-poppins'>Shield Your Smile: How Dental Sealants Block Cavities</h2>
                <div className='flex justify-start items-center gap-3'>
                  <div className='flex items-center gap-1'>
                    <FaRegCalendar className='text-[#717171]' />
                    <p className='text-[#535353] text-[15px] font-medium font-poppins'>June 28, 2024</p>
                  </div>
                  <div className='border-[1px] border-[#535353] h-[14px]'></div>
                  <div className='flex items-center gap-2'>
                    <p className='text-[#535353] text-[15px] font-medium font-poppins'>by Dr. Nehal Tambe</p>
                    <Link className='flex items-center gap-1'>
                      <span className='text-[#717171] text-sm italic font-normal font-poppins'>View Profile</span>
                      <GoArrowUpRight className='text-[#717171]' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-start justify-center gap-4'>
              <div className='flex flex-col justify-start gap-6'>
                <FaFacebook className='text-4xl text-[blue]' />
                <RiTwitterXLine className='text-4xl' />
                <SiGmail className='text-4xl' />
                <MdShare className='text-4xl' />
              </div>
              <div className='flex flex-col gap-6'>
                <p className='text-[#717171] text-sm italic font-normal font-inter'>Gingivitis, a common gum problem, plays hide & seek with us and only catches our attention when it gets out of control. Yes, if you aren’t someone who is very cautious of your oral health, it might already be doing its evil in your mouth right now.</p>
                <p className='text-[#717171] text-sm italic font-normal font-inter'>Scared? Don’t be! Let’s understand it better so we can detect it at the very beginning.</p>
                <p className='text-[#717171] text-sm italic font-normal font-inter'>Gingiva is a part of the periodontium, the structure that secures the tooth in the bony socket. It is the external fleshy tissue that drapes the alveolar bone, the part that contains the sockets for the teeth and forms a collar surrounding each tooth. It is an important structure as it prevents external bodies such as debris and germs from entering the periodontium, which can cause periodontal diseases that might result in tooth loss. Hence, to maintain healthy & strong teeth, the periodontium is important and part of it, the gingiva is of foremost importance. When the gingiva gets affected by any factor, it leads to gingivitis. </p>
              </div>
            </div>
            <div className=' flex flex-col gap-4'>
              <p className='text-[#717171] text-sm font-normal font-inter'>The term ‘gingivitis’ comes from the two words, ‘gingiva’, which is the medical term for gums, and ‘itis’, attached to any word indicates inflammation. Inflammation is mostly caused by the presence of a foreign body or irritation caused due to an external factor.  At times, such inflammation can also occur due to internal conditions or can be a secondary result of another disease. Gingivitis is a very common problem among the population and isn’t very critical and hence is ignored most of the time. The matter of concern here is, that gingivitis is the first stage of critical gum disease periodontitis which can lead to severe oral health issues. So, let us see how we can categorize it to understand it better.</p>
              <p className='text-[#717171] text-sm font-normal font-inter'>Gingivitis can be generally classified based on the duration of its occurrence as acute (small duration) or chronic (long duration), based on the number of teeth affected as localized (affecting a single tooth or some teeth in an arch) or generalized (affecting all teeth of an arch or both dental arches).</p>
              <h4 className='text-[#717171] text-xl font-bold font-inter'>Causes : </h4>
              <ul>
                <li className='text-[#717171] text-sm font-normal font-inter'>Causes of gingivitis can vary but the most common cause is the inability to clean the deposition of plaque on the teeth and surrounding areas i.e. not brushing or cleaning the teeth and mouth.  The collected plaque which contains the bacteria leads to inflammation of the tissue.</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Lodging of food particles or foreign bodies such as using toothpicks, pins, etc. to pick out food. </li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Improper brushing techniques such as aggressive or wrong methods of brushing can lead to gingival irritation.</li>
              </ul>
              <h4 className='text-[#717171] text-xl font-bold font-inter'>Risk factors associated :</h4>
              <ul>
                <li className='text-[#717171] text-sm font-normal font-inter'>Smoking or habit of tobacco chewing.</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Poor oral hygiene.</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Dry mouth – Less production of saliva or mouth breathing can result in dry mouth</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Vitamin C deficiency</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Poorly fitting dental appliances, poorly finished dental restorations, crooked teeth that are difficult to clean (malaligned teeth).</li>
              </ul>
              <h4 className='text-[#717171] text-xl font-bold font-inter'>Symptoms : </h4>
              <ul>
                <li className='text-[#717171] text-sm font-normal font-inter'>A foremost and common symptom of gingivitis is bleeding gums. Bleeding from gums while brushing is often neglected.</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Swollen or puffy gums.</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Swollen or puffy gums.</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Swollen or puffy gums.</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Swollen or puffy gums.</li>
              </ul>
              <h4 className='text-[#717171] text-xl font-bold font-inter'>Complications : </h4>
              <ul>
                <li className='text-[#717171] text-sm font-normal font-inter'>Causes of gingivitis can vary but the most common cause is the inability to clean the deposition of plaque on the teeth and surrounding areas i.e. not brushing or cleaning the teeth and mouth.  The collected plaque which contains the bacteria leads to inflammation of the tissue.</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Lodging of food particles or foreign bodies such as using toothpicks, pins, etc. to pick out food. </li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Improper brushing techniques such as aggressive or wrong methods of brushing can lead to gingival irritation.</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Improper brushing techniques such as aggressive or wrong methods of brushing can lead to gingival irritation.</li>
              </ul>
              <h4 className='text-[#717171] text-xl font-bold font-inter'>Prevention : </h4>
              <ul>
                <li className='text-[#717171] text-sm font-normal font-inter'>Causes of gingivitis can vary but the most common cause is the inability to clean the deposition of plaque on the teeth and surrounding areas i.e. not brushing or cleaning the teeth and mouth.  The collected plaque which contains the bacteria leads to inflammation of the tissue.</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Lodging of food particles or foreign bodies such as using toothpicks, pins, etc. </li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Lodging of food particles or foreign bodies such as using toothpicks, pins, etc. </li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Lodging of food particles or foreign bodies such as using toothpicks, pins, etc. </li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Lodging of food particles or foreign bodies such as using toothpicks, pins, etc. </li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Lodging of food particles or foreign bodies such as using toothpicks, pins, etc. </li>
              </ul>
              <h4 className='text-[#717171] text-xl font-bold font-inter'>Treatment : </h4>
              <ul>
                <li className='text-[#717171] text-sm font-normal font-inter'>Causes of gingivitis can vary but the most common cause is the inability to clean the deposition of plaque on the teeth and surrounding areas i.e. not brushing or cleaning the teeth and mouth.  The collected plaque which contains the bacteria leads to inflammation of the tissue.</li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Lodging of food particles or foreign bodies such as using toothpicks, pins, etc. to pick out food. </li>
                <li className='text-[#717171] text-sm font-normal font-inter'>Improper brushing techniques such as aggressive or wrong methods of brushing can lead to gingival irritation.</li>
              </ul>
              <p className='text-[#717171] text-sm font-normal font-inter'>So, we hope now you know why you should never ignore bleeding gums. Our mouth is the gateway for nutrition and overall health. So let’s prevent it from any harm by practicing healthy dental habits. </p>
              <p className='text-[#717171] text-sm font-normal font-inter'>-Dr.Nehal Tambe </p>
            </div>
            <div className='bg-[#F8F8F8] rounded-[10px] p-[30px]'>
              <Form {...form}>
                <div className='flex flex-col gap-4 rounded-md'>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-[#272B41] text-2xl font-medium font-inter'>Leave a Reply</h3>
                    <p className='text-[#5B5B5B] text-base font-normal font-inter'>Your email address will not be published. Required fields are marked *</p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full'>
                    <div className='grid grid-cols-2 gap-5 w-full'>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Name*" {...field}
                                className="h-[40px] text-[#838383] text-sm font-normal font-inter border-[1px] border-[#EBF2F3] rounded-lg px-[14px] placeholder:text-[#757575]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="emailId"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Email*" {...field}
                                className="h-[40px] text-[#838383] text-sm font-normal font-inter border-[1px] border-[#EBF2F3] rounded-lg px-[14px] placeholder:text-[#757575]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className='w-full'>
                      <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea placeholder="Enter your comment here..." {...field} id="message-2"
                                className="h-[110px] text-[#838383] text-sm font-normal font-inter border-[1px] border-[#EBF2F3] rounded-lg p-[14px] placeholder:text-[#757575]]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button variant='submit' size='submit'>Post Comment</Button>
                  </form>
                </div>
              </Form>
            </div>
          </div>
          <div className='flex flex-col items-center gap-4 w-1/3'>
            <div className=''>
              <h3 className="text-[#717171] text-2xl font-medium font-inter mb-5">Popular Blogs</h3>
              <div className='flex flex-wrap items-center justify-center gap-5'>
                <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
                <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
                <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
              </div>
            </div>
            <div className='h-[104px] w-[400px] rounded-2xl py-5 shadow-custom5'>
              <h3 className='text-[#313131] text-2xl font-medium font-inter py-1 px-4'>Comments</h3>
              <p className='text-[#535353] text-sm font-normal font-inter px-4'>No comments to be shown.</p>
            </div>
          </div>
        </section>
        <section className='mt-4'>
          <h3 className="text-[#717171] text-2xl font-medium font-inter mb-5">Recent Blogs</h3>
          <div className='flex items-center justify-center gap-5 mb-5'>
            <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
            <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
            <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
          </div>
          <div className='flex justify-center mb-5'>
            <Select>
              <SelectTrigger className="w-[190px] border-[1px] border-[#95C22B]">
                <SelectValue placeholder="Show more blogs" />
              </SelectTrigger>
              <SelectContent className="border-[1px] border-[#95C22B] rounded-lg py-[10px] px-5">
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default BlogDetail