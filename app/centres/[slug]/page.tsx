import { notFound } from "next/navigation";
import { CENTRES } from "@/lib/constants";
import CentreDetailClient from "@/components/organisms/CentreDetailClient";

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
    if (!centre) return { title: "Centre Not Found | Changampally" };

    return {
        title: `${centre.name} | Changampally`,
        description: centre.description,
        alternates: {
            canonical: `/centres/${centre.anchor}`,
            languages: {
                en: `/centres/${centre.anchor}`,
                ar: `/centres/${centre.anchor}?lang=ar`,
            },
        },
    };
}

export default async function CentrePage({ params }: CentrePageProps) {
    const resolvedParams = await params;
    const centre = CENTRES.find((c) => c.anchor === resolvedParams.slug);

    if (!centre) {
        notFound();
    }

    return <CentreDetailClient centreSlug={resolvedParams.slug} initialCentre={centre} />;
}
