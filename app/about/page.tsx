import type { Metadata } from "next";
import AboutInteractiveLayout from "@/components/organisms/AboutInteractiveLayout";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about the Changampally Vaidya family heritage — a lineage of healers since 1300 AD combining Ayurveda, modern medicine, and compassionate mental care.",
};

export default function AboutPage() {
    return <AboutInteractiveLayout />;
}
