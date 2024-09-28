import ProfileLayout from '@/component/Layout/ProfileLayout';
import Appointment from '@/components/profile/Appointment';
import PaymentComp from '@/components/profile/PaymentComp';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

const Payment = () => {
    const payments = [
        {
            date: "23/08/2024",
            clinicOrDoctor: "Dr Anusha",
            amount: 400,
            status: "Due"
        },
        {
            date: "23/08/2024",
            clinicOrDoctor: "Dr Anusha",
            amount: 400,
            status: "Paid"
        },
    ]

    return (
        <ProfileLayout>
            <div className="bg-white rounded-lg p-5">
                <h1 className='font-inter text-2xl font-medium text-[#00214B]'>Payment History</h1>
                <div className="flex gap-4 items-center mt-5">
                    <Button variant="outline" className="border-[#717171] font-normal text-[#717171]">
                        Filter by date
                    </Button>
                    <Select>
                        <SelectTrigger className="w-[130px] border-[#717171] text-[#717171]">
                            <SelectValue placeholder="All Payment" />
                        </SelectTrigger>
                        <SelectContent className="text-[#717171]">
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                </div>

                <Table className="mt-4">
                    <TableHeader className="bg-[#F6F6F6]">
                        <TableRow className="uppercase">
                            <TableHead className="w-[130px]">Date</TableHead>
                            <TableHead className="w-[190px]">Clinic/Doctor</TableHead>
                            <TableHead className="w-[190px]">Amount</TableHead>
                            <TableHead className="w-[190px]">Status</TableHead>
                            <TableHead className="w-[190px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {payments.map((payment, i) => (
                            <PaymentComp
                                key={i}
                                payment={payment}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ProfileLayout>
    )
}

export default Payment