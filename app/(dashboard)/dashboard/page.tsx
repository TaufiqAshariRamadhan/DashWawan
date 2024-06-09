import dynamic from 'next/dynamic';
import { FC } from 'react';

// import MiniCalendar from "@/components/calendar/MiniCalendar";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "@/components/widget/Widget";


const MiniCalendar = dynamic(() => import("@/components/calendar/MiniCalendar"), {
    loading: () => <p>loading...</p>,
    ssr: false
})

type Props = {};

const DashboardPage: FC<Props> = () => {
    return (
        <>
            {/* Card widget */}
            <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                <Widget
                    icon={<MdBarChart className="h-7 w-7" />}
                    title={"Jumlah Mahasiswa"}
                    subtitle={"250"}
                />
                <Widget
                    icon={<IoMdHome className="h-6 w-6" />}
                    title={"Jumlah Pendaftar"}
                    subtitle={"215"}
                />
                <Widget
                    icon={<IoDocuments className="h-6 w-6" />}
                    title={"Jumlah Perusahaan"}
                    subtitle={"15"}
                />
                <Widget
                    icon={<MdBarChart className="h-7 w-7" />}
                    title={"Jumlah Lowongan"}
                    subtitle={"$574.34"}
                />
                <Widget
                    icon={<MdDashboard className="h-6 w-6" />}
                    title={"Belum Interview"}
                    subtitle={"70"}
                />
                <Widget
                    icon={<MdBarChart className="h-7 w-7" />}
                    title={"Sudah Interview"}
                    subtitle={"145"}
                />
            </div>
        </>
    );
}

export default DashboardPage;