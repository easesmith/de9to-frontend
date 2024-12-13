import BreadcrumbCompo from "@/component/dentist-signup/BreadcrumbCompo"
import FormBox from "@/component/dentist-signup/FormBox"
import DentistWrapper from "@/components/dentist-wrapper/DentistWrapper"

const ApplicationForm = () => {

    return (
        <DentistWrapper>
            <div className="w-full shadow-[2px] rounded-[30px] bg-white px-16 py-10">
                <BreadcrumbCompo hidden="hidden" />
                <div className="border-2 border-[#D4D4D4] rounded-[10px] px-16 pt-12 pb-24 my-12 flex flex-col gap-10">
                    <div className="flex justify-between items-center">
                        <h1 className='section-heading text-[#95C22B] text-xl font-normal font-barlow'>Application Form</h1>
                    </div>

                    <div className={`flex flex-wrap gap-4 mt-5`}>
                        <div className="grid grid-cols-2 w-full">
                            <FormBox
                                title="Personal Details"
                                number="01"
                                href="personal-details"
                            />
                            <FormBox
                                title="Clinic Details"
                                number="02"
                                href="clinic"
                            />
                        </div>
                        <div className="grid grid-cols-2 w-full">
                            <FormBox
                                title="Other Details"
                                number="03"
                                href="other-details"
                            />
                            <FormBox
                                title="Bank Details"
                                number="04"
                                href="bank-details"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DentistWrapper>
    )
}

export default ApplicationForm