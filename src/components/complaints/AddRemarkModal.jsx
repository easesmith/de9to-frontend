import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import usePatchApiReq from '@/hooks/usePatchApiReq';
import { addRemarkSchema } from '@/schemas/complaintSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner';

const AddRemarkModal = ({ isAddRemarkModalOpen, setIsAddRemarkModalOpen, getComplaint }) => {
  const { res, fetchData, isLoading } = usePatchApiReq()
  const params = useParams();

  const form = useForm({
    resolver: zodResolver(addRemarkSchema),
    defaultValues: {
      status: "",
      resolution: "",
    }
  })


  const onSubmit = (data) => {
    console.log(data)

    fetchData("/admin/update-complaint", { complaintId: params?.complaintId, status: data.status, resolution: data.resolution })
  }

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("api res", res?.data);
      getComplaint();
      setIsAddRemarkModalOpen(false);
    }
  }, [res])

  return (
    <Dialog open={isAddRemarkModalOpen} onOpenChange={setIsAddRemarkModalOpen}>
      <DialogContent className="max-w-[700px] max-h-[90vh] overflow-y-auto bg-[#F6F6F6]">
        <DialogHeader>
          <div className="upper flex flex-col items-start gap-[15px] max-large:gap-1">
            <h2 className='text-[#000A2D] text-2xl font-bold font-inter max-large:text-3xl max-med:hidden'>Add Remark</h2>
          </div>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Status</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className='h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg'>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* <SelectItem value="raised">Raised</SelectItem> */}
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="resolution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Resolution</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none h-40 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg"
                      placeholder="Enter resolution..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full h-10 text-base">
              {isLoading ? <Spinner size={30} /> : "Submit"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddRemarkModal