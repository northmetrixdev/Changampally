export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    subtitle?: string;
    category: string;
    date: string;
    readTime: string;
    coverImage: string;
    author: {
        name: string;
        role: string;
        dept: string;
        institute: string;
        avatar: string;
        bio?: string;
    };
    excerpt: string;
    content: {
        type: "paragraph" | "heading" | "quote" | "subheading";
        text: string;
    }[];
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "nomophobia-and-the-digital-mind",
        slug: "nomophobia-and-the-digital-mind",
        title: "Nomophobia and the Digital Mind: Insights from Cyber Psychology",
        subtitle: "How digital hyper-connectivity alters emotional regulation, and how scientific Ayurvedic psychiatry restores cognitive balance.",
        category: "Mental Health",
        date: "Oct 2026",
        readTime: "5 min read",
        coverImage: "/images/departments/dept_psychiatry.png",
        author: {
            name: "Dr. Sajjad Changampally",
            role: "Ayurveda Psychiatrist",
            dept: "Happy Moon, Department of Happiness and Mental well-being",
            institute: "CRIH (Changampally Remedium Integrated Healthcare)",
            avatar: "/images/doctors/Dr_Sajad.png",
            bio: "Ayurveda Psychiatrist and researcher at Happy Moon, Department of Happiness & Mental Well-being, CRIH, specialising in cyber psychology and integrative psychotherapeutic interventions."
        },
        excerpt:
            "The human mind is rapidly adapting to a digital environment that has evolved faster than our psychological resilience. One of the most visible manifestations of this mismatch is Nomophobia—the anxiety experienced when individuals are unable to access or use their mobile phones.",
        content: [
            {
                type: "paragraph",
                text: "The human mind is rapidly adapting to a digital environment that has evolved faster than our psychological resilience. One of the most visible manifestations of this mismatch is Nomophobia—the anxiety experienced when individuals are unable to access or use their mobile phones. From a cyber psychology perspective, nomophobia represents not merely excessive phone use, but a deeper alteration in emotional regulation, attention, and behavioral control."
            },
            {
                type: "heading",
                text: "Nomophobia: A Cyber Psychological Phenomenon"
            },
            {
                type: "paragraph",
                text: "Cyber psychology examines how digital technology influences human cognition, emotions, and behavior. Nomophobia fits squarely within this domain. Continuous exposure to digital stimuli—notifications, social media feedback loops, and instant connectivity—creates persistent cognitive arousal. Over time, the brain becomes conditioned to constant external validation and stimulation, reducing our tolerance to silence, inactivity, or momentary disconnection."
            },
            {
                type: "paragraph",
                text: "Clinically, this manifests as anxiety, irritability, sleep architecture disturbances, impaired sustained concentration, and emotional instability. Among students and working professionals, these symptoms often go unrecognized until academic performance, relationships, or overall mental wellbeing is significantly degraded."
            },
            {
                type: "quote",
                text: "Nomophobia is a signal—not of technological failure, but of the urgent necessity to realign human psychology with digital realities."
            },
            {
                type: "heading",
                text: "Evidence from Clinical Research"
            },
            {
                type: "paragraph",
                text: "As part of our academic and clinical research work, a cross-sectional study was conducted among college students in Kerala using the validated Nomophobia Questionnaire (NMP-Q). The findings revealed a strikingly high prevalence of nomophobic behavior, particularly among individuals with prolonged daily smartphone engagement exceeding 5 hours. This confirms that nomophobia is not an isolated behavioral habit, but a widespread digital-era mental health epidemic."
            },
            {
                type: "paragraph",
                text: "In addition, a structured clinical evaluation was undertaken to assess an integrative therapeutic protocol combining Aśvagandha cūṛṇa and classical Satvāvajaya cikitsa (Ayurvedic psychotherapy). Participants demonstrated statistically significant reductions in anxiety scores, depressive symptoms, and nomophobia severity, evaluated using HAM-A, HAM-D, and NMP-Q scales."
            },
            {
                type: "heading",
                text: "Where Ayurveda Meets Cyber Psychology"
            },
            {
                type: "paragraph",
                text: "Ayurveda offers a sophisticated psychological framework that aligns remarkably well with modern cyber psychology. Excessive digital engagement leads to imbalance of Rajas (hyperactivity and agitation) and Tamas (lethargy and detachment), impairing Dhi (intellect/discernment), Dhriti (self-control/willpower), and Smriti (memory/retention)—a state classically described as Prajñāparādha (crimes against one's own wisdom). This ancient model mirrors contemporary neurobiological understandings of behavioral addiction and dopamine receptor downregulation."
            },
            {
                type: "heading",
                text: "A Scientific Integrative Direction"
            },
            {
                type: "paragraph",
                text: "At Happy Moon, the mental health department of CRIH, we practice a scientific integrative approach—combining validated psychological assessments, cognitive behavioral interventions, mindfulness disciplines, and classical Ayurvedic botanical therapies. The goal is never crude digital avoidance, but restoring authentic mental autonomy in an inescapable digital world."
            },
            {
                type: "paragraph",
                text: "Nomophobia is a signal—not of technological failure, but of the urgent need to realign human psychology with digital realities. Addressing it requires research-driven, compassionate, and interdisciplinary mental healthcare."
            }
        ]
    }
];
