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
    },
    {
        id: "synesthetic-minds-tridosha-cognitive-science",
        slug: "synesthetic-minds-tridosha-cognitive-science",
        title: "Synesthetic Minds? Exploring the Tridosha System Through the Lens of Cognitive Science",
        subtitle: "An interdisciplinary perspective on sensory associations, Ayurvedic theory, and the human tendency to identify patterns across different domains of experience.",
        category: "Cognitive Science & Ayurveda",
        date: "Oct 2026",
        readTime: "7 min read",
        coverImage: "/images/departments/dept_neurology.png",
        author: {
            name: "Dr. Shahna MT",
            role: "Ayurveda Physician",
            dept: "Ayurveda & Medical Communications",
            institute: "Changampally Remedium Integrated Healthcare (CRIH)",
            avatar: "/images/doctors/Dr_shana.png",
            bio: "Ayurveda physician specializing in psychosomatic disorders, gut health, clinical nutrition, and mind-body wellbeing, with certified training in Ayurveda Nutrition and Smriti Ayurveda Meditation Therapy."
        },
        excerpt:
            "The Ayurvedic tridosha framework presents an interconnected model in which qualities such as heat, dryness, mobility, heaviness, and stability are used to describe aspects of the body, mind, diet, and environment. Can its descriptive structure be compared with synesthesia?",
        content: [
            {
                type: "paragraph",
                text: "The Ayurvedic tridosha framework presents an interconnected model in which qualities such as heat, dryness, mobility, heaviness, and stability are used to describe aspects of the body, mind, diet, and environment. This cross-domain organisation raises an interesting conceptual question: can its descriptive structure be compared with synesthesia, a perceptual phenomenon in which specific stimuli elicit additional, often automatic experiences? This article examines the similarities and differences between the two frameworks. It argues that, although the comparison offers a useful starting point for interdisciplinary discussion, the tridosha system is better understood as a culturally transmitted system of classification than as evidence of synesthetic perception. Concepts from cognitive science, including embodied cognition and conceptual metaphor, may offer additional perspectives on how people organise experiences across domains."
            },
            {
                type: "heading",
                text: "1. Introduction: When Different Experiences Share a Common Quality"
            },
            {
                type: "paragraph",
                text: "What connects the heat of the midday sun, the sharp taste of a chilli, a sensation of warmth during digestion, and a feeling of irritability? These experiences differ in their physical and psychological characteristics, yet the Ayurvedic framework may interpret them through a shared quality: ushna, or heat."
            },
            {
                type: "paragraph",
                text: "A similar pattern appears throughout the tridosha system. Vata is associated with qualities such as dryness, lightness, coldness, and mobility. Pitta is characterised by heat, sharpness, and transformation. Kapha is associated with heaviness, stability, moisture, and cohesion. These qualities are used to interpret diverse observations relating to bodily functions, food, behaviour, and environmental conditions."
            },
            {
                type: "paragraph",
                text: "This approach raises a broader question about the organisation of human knowledge. How do people recognise similarities between experiences that belong to apparently different categories? How does a single descriptive quality acquire meaning across sensory, physiological, psychological, and environmental domains? One possible comparison is synesthesia, a phenomenon in which a particular stimulus elicits an additional experience, such as the perception of colour in response to specific letters or sounds. However, a resemblance between the cross-domain associations of the tridosha system and synesthetic experiences does not establish a shared neurological mechanism."
            },
            {
                type: "quote",
                text: "The purpose of this article is not to propose synesthesia as the origin of Ayurvedic theory, but to examine what this comparison reveals about different ways of organising and interpreting experience."
            },
            {
                type: "heading",
                text: "2. Synesthesia: A Perceptual Phenomenon"
            },
            {
                type: "paragraph",
                text: "Synesthesia is characterised by associations in which a specific stimulus, often called an inducer, elicits an additional experience, known as a concurrent. In grapheme-colour synesthesia, for example, particular letters or numbers are associated with particular colours. In sound-colour synesthesia, certain sounds may evoke colour experiences. Research reviews identify characteristics such as automaticity and consistency as important features of many forms of synesthesia, although the phenomenon encompasses considerable variation."
            },
            {
                type: "paragraph",
                text: "The distinction between synesthesia and ordinary association is important. A person may deliberately associate red with anger or describe a musical composition as warm. Such expressions do not, by themselves, indicate synesthesia. A synesthetic experience involves a more specific and characteristic relationship between a stimulus and an additional experience. The tridosha system operates differently. Its associations are taught through a shared body of concepts, terminology, textual traditions, and interpretive practices. A practitioner can learn that heat is a quality associated with Pitta without experiencing heat as an additional sensory response whenever encountering a particular taste, emotion, or environmental condition. Synesthesia concerns the structure of an individual's experience; the tridosha system concerns the classification and interpretation of observations within a traditional medical framework."
            },
            {
                type: "heading",
                text: "3. The Tridosha System as a Cross-Domain Framework"
            },
            {
                type: "paragraph",
                text: "The tridosha model organises a range of observations through recurring qualities. Within Ayurvedic theory, these qualities contribute to the interpretation of bodily functions, food, environmental influences, and patterns of health and illness."
            },
            {
                type: "subheading",
                text: "3.1 Vata: Mobility and Variability"
            },
            {
                type: "paragraph",
                text: "Vata is traditionally associated with air and space and is described through qualities including dryness, lightness, coldness, subtlety, and mobility. Within Ayurvedic interpretation, these qualities may be used to understand diverse phenomena involving movement, irregularity, dryness, and variability. Examples include certain patterns of bowel function, skin dryness, restlessness, and responses to environmental conditions. These observations are not interchangeable, nor do they necessarily share a single biomedical cause. Their relationship within the Ayurvedic framework arises from a common conceptual vocabulary."
            },
            {
                type: "subheading",
                text: "3.2 Pitta: Heat and Transformation"
            },
            {
                type: "paragraph",
                text: "Pitta is traditionally associated with fire and water and is described through qualities including heat, sharpness, intensity, and fluidity. It is linked in Ayurvedic theory to transformation, particularly in relation to digestion and metabolism. The language of heat and sharpness may be applied to tastes, bodily sensations, and certain descriptions of emotional or behavioural tendencies. However, the presence of one such feature does not establish a Pitta imbalance or a specific medical condition. The important point is that the framework uses recurring qualities to interpret different categories of observation."
            },
            {
                type: "subheading",
                text: "3.3 Kapha: Stability and Cohesion"
            },
            {
                type: "paragraph",
                text: "Kapha is traditionally associated with earth and water and is described through qualities such as heaviness, stability, softness, moisture, and cohesion. Within the Ayurvedic framework, these qualities are used to interpret aspects of bodily structure, lubrication, and stability, as well as certain patterns of activity and response. Again, these are traditional conceptual associations rather than evidence that the listed experiences arise from one identical physiological mechanism."
            },
            {
                type: "heading",
                text: "4. Is This Synesthesia, or a Different Form of Cognition?"
            },
            {
                type: "paragraph",
                text: "The resemblance between synesthesia and the tridosha system becomes clearer when the distinction between experiencing an association and conceptualising one is considered. Synesthesia involves a characteristic relationship between a stimulus and an additional subjective experience. The tridosha system, by contrast, establishes relationships through learned concepts and a shared interpretive framework."
            },
            {
                type: "paragraph",
                text: "Two other concepts from cognitive science offer useful, though still provisional, comparisons. Embodied cognition examines how bodily experience, perception, and action contribute to cognitive processes. Conceptual metaphor describes how one domain of experience can structure our understanding of another (for example, expressions such as 'a heated argument' use physical temperature to describe emotional intensity). These concepts offer ways to investigate how people understand abstract experiences through familiar bodily qualities without presuming identical physiological constructs."
            },
            {
                type: "heading",
                text: "5. Historical Context: Elemental Qualities and Ayurvedic Thought"
            },
            {
                type: "paragraph",
                text: "The tridosha framework developed within a wider intellectual and medical tradition. The Charaka Samhita and Sushruta Samhita preserve substantial bodies of Ayurvedic knowledge, but the history of the system cannot be reduced to the work of a single individual. The pancha mahabhuta (five-element framework) of earth, water, fire, air, and space provides a conceptual vocabulary for describing substances and their qualities (guna). Diverse phenomena are interpreted through a shared set of principles rather than through wholly independent descriptive systems."
            },
            {
                type: "heading",
                text: "6. Contemporary Relevance and Scientific Boundaries"
            },
            {
                type: "paragraph",
                text: "The cross-domain structure of the tridosha system may be of interest to researchers studying traditional knowledge, cognitive classification, and systems-level approaches to health. Contemporary healthcare investigates interactions among physiological processes, behaviour, psychological states, diet, and environmental exposures. Ayurveda also approaches health through relationships among the body, mind, diet, and environment, but it does so through its own historical concepts and methods. The similarity in overall orientation does not establish equivalence between the two systems; traditional qualities assigned to a dosha should not automatically be equated with particular hormones, neural pathways, or immune mechanisms."
            },
            {
                type: "heading",
                text: "7. Conclusion"
            },
            {
                type: "paragraph",
                text: "The tridosha system offers an example of a traditional framework that organises diverse observations through a shared vocabulary of qualities. Its associations across sensory, bodily, psychological, and environmental domains invite comparison with the study of synesthesia and other forms of cross-domain cognition. However, synesthesia describes a particular form of subjective experience, whereas the tridosha system is a learned and historically transmitted framework. Concepts such as embodied cognition and conceptual metaphor provide additional perspectives for investigating how bodily experiences contribute to the organisation of knowledge."
            }
        ]
    }
];
