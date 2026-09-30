import { notFound } from "next/navigation";
import Link from "next/link";
import { CENTRES } from "@/lib/constants";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

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

    return (
        <main className="min-h-screen bg-ivory font-sans">
            
            {/* ── Hero Section ─────────────────────────────────────────── */}
            <section className="relative pt-32 md:pt-48 pb-20 md:pb-24 px-6 md:px-12 bg-plum text-ivory overflow-hidden">
                <div className="absolute inset-0 bg-charcoal/30 mix-blend-multiply" />
                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <p className="font-sans font-medium text-[10px] tracking-[0.3em] uppercase mb-4 text-ivory/70">
                        {centre.tagline}
                    </p>
                    <h1 className="font-serif font-light text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight" style={{ fontFamily: "var(--font-juana)" }}>
                        {centre.name}
                    </h1>
                    <p className="font-sans font-light text-sm md:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
                        {centre.location}
                    </p>
                </div>
            </section>

            {/* ── Image Placeholder & Intro ───────────────────────────── */}
            <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Placeholder Image */}
                    <div className="w-full h-[400px] md:h-[600px] bg-plum/5 border border-plum/10 rounded-2xl flex items-center justify-center shadow-soft relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-plum/5 to-transparent mix-blend-overlay" />
                        <div className="flex flex-col items-center text-center p-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-12 h-12 text-plum/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span className="font-sans font-medium text-[10px] uppercase tracking-widest text-plum">Image Placeholder</span>
                            <span className="font-sans font-light text-[10px] text-taupe mt-1">Provide a high-quality photo of {centre.name}</span>
                        </div>
                    </div>

                    {/* Intro Content */}
                    <div className="flex flex-col gap-6">
                        <h2 className="font-serif font-light text-3xl md:text-4xl text-charcoal" style={{ fontFamily: "var(--font-juana)" }}>
                            About the Centre
                        </h2>
                        <div className="w-12 h-px bg-plum/20" />
                        <p className="font-sans font-light text-sm md:text-base text-taupe leading-relaxed">
                            {centre.description}
                        </p>
                        
                        <div className="mt-8 flex flex-col gap-4 bg-white p-8 border border-plum/10 rounded-xl">
                            <h3 className="font-sans font-medium text-[10px] tracking-[0.2em] uppercase text-plum border-b border-plum/10 pb-3">Contact Information</h3>
                            <div className="flex flex-col gap-2 mt-2">
                                <span className="font-sans text-xs text-charcoal/80"><strong>Phone:</strong> {centre.phone}</span>
                                <span className="font-sans text-xs text-charcoal/80"><strong>Location:</strong> {centre.location}</span>
                            </div>
                            <Link href="/contact" className="mt-4 inline-flex items-center justify-center w-full px-6 py-3 bg-plum text-ivory font-sans font-medium text-[10px] tracking-[0.2em] uppercase hover:bg-plum-dark transition-all duration-300">
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Specialisations List ────────────────────────────────── */}
            <section className="bg-white py-20 md:py-32 px-6 md:px-12 border-t border-plum/10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="font-serif font-light text-3xl md:text-4xl text-charcoal mb-4" style={{ fontFamily: "var(--font-juana)" }}>
                        Specialised Services
                    </h2>
                    <p className="font-sans font-light text-sm text-taupe max-w-xl mx-auto">
                        Dedicated departments and treatments available at {centre.name}.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {centre.specialisations.map((spec, idx) => (
                            <li key={idx} className="flex items-start gap-4 p-6 bg-ivory border border-plum/5 rounded-xl hover:border-plum/20 transition-all duration-300">
                                <div className="w-1.5 h-1.5 bg-plum rounded-full mt-1.5 shrink-0" />
                                <span className="font-sans font-light text-sm text-charcoal">{spec}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
