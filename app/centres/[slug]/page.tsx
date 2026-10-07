import { notFound } from "next/navigation";
import { CENTRES } from "@/lib/constants";
import CentreDetailClient from "@/components/organisms/CentreDetailClient";

// Generate static params for the dynamic routes
export async function generateStaticParams() {
    return CENTRES.map((centre) => ({
        slug: centre.anchor,
    }));
}

interface CentrePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: CentrePageProps) {
    const resolvedParams = await params;
    const centre = CENTRES.find((c) => c.anchor === resolvedParams.slug);
    if (!centre) return { title: "Centre Not Found" };

    return {
        title: `${centre.name} | Changampally`,
        description: centre.description,
    };
}

export default async function CentrePage({ params }: CentrePageProps) {
    const resolvedParams = await params;
    const centre = CENTRES.find((c) => c.anchor === resolvedParams.slug);

    if (!centre) {
        notFound();
    }

    return <CentreDetailClient centre={centre} />;
}
