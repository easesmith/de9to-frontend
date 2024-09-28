import ProfileLayout from '@/component/Layout/ProfileLayout';
import Feedback from '@/components/profile/Feedback';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

const MyFeedback = () => {
    const feedbacks = [
        {
            date: "23/08/2024",
            clinicOrDoctor: "Dr Anusha",
            ratings: 4,
            feedback: "Working at Sam.AI has been an incredible journey so far. The technology we're building is truly cutting-edge, and being a part of a team that's revolutionizing how people achieve their goals is immensely fulfilling.",
        },
        {
            date: "23/08/2024",
            clinicOrDoctor: "Dr Anusha",
            ratings: 4,
            feedback: "Working at Sam.AI has been an incredible journey so far. The technology we're building is truly cutting-edge, and being a part of a team that's revolutionizing how people achieve their goals is immensely fulfilling.",
        },
    ]

    return (
        <ProfileLayout>
            <div className="bg-white rounded-lg p-5">
                <h1 className='font-inter text-2xl font-medium text-[#00214B]'>My Feedback</h1>
                <Button variant="outline" className="border-[#717171] mt-5 font-normal text-[#717171]">
                    Filter by date
                </Button>

                <Table className="mt-4">
                    <TableHeader className="bg-[#F6F6F6]">
                        <TableRow className="uppercase">
                            <TableHead className="w-[130px]">Date</TableHead>
                            <TableHead className="w-[230px]">Clinic/Doctor</TableHead>
                            <TableHead className="w-[130px]">ratings</TableHead>
                            <TableHead className="w-[380]">Feedback</TableHead>
                            <TableHead className="w-[110px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {feedbacks.map((feedback, i) => (
                            <Feedback
                                key={i}
                                feedback={feedback}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ProfileLayout>
    )
}

export default MyFeedback