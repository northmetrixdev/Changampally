/**
 * @file config/testimonials.ts
 * Dedicated configuration file for verified social media testimonials.
 * Updated with official Changampally Remedium Instagram Reels in 9:16 aspect ratio.
 */

export type SocialPlatform = "instagram" | "facebook" | "youtube" | "other";

export interface TestimonialItem {
  id: string;
  platform: SocialPlatform;
  author: string;
  authorHandle?: string;
  authorRole?: string;
  condition?: string;
  avatarUrl?: string | null;
  text: string;
  postUrl: string;
  reelCode?: string;
  embedUrl?: string | null;
  thumbnail?: string | null;
  date?: string;
  verified?: boolean;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "reel-medulloblastoma",
    platform: "instagram",
    author: "Mother of Pediatric Patient",
    authorHandle: "@changampally_remedium",
    authorRole: "Pediatric Cancer Care",
    condition: "Stage 4 Medulloblastoma",
    avatarUrl: "/assets/Changampally Remedium_logo.png",
    text: "A heartfelt patient testimonial from the mother of a young boy diagnosed with Stage 4 Medulloblastoma. She shares her son’s journey through integrative care and chemotherapy side-effect management under the care of Dr. Jannathul Firdouse.",
    postUrl: "https://www.instagram.com/reel/DcijKniogdn/?obrf=aHQwNDNlMmN1dTZh",
    reelCode: "DcijKniogdn",
    embedUrl: "https://www.instagram.com/reel/DcijKniogdn/embed/",
    thumbnail: null,
    date: "Verified Reel",
    verified: true,
  },
  {
    id: "reel-molly-jacob",
    platform: "instagram",
    author: "Molly Jacob",
    authorHandle: "@changampally_remedium",
    authorRole: "Inpatient Healing",
    condition: "Integrative Healthcare",
    avatarUrl: "/assets/Changampally Remedium_logo.png",
    text: "Nothing makes us happier than seeing our patients healthy and satisfied. Hear what Molly Jacob has to say about compassionate care, expert treatment, and patient trust at Changampally Remedium.",
    postUrl: "https://www.instagram.com/reel/DWtDN-sTbzV/?exln=MXRmMHozZmR5cHpjNA==",
    reelCode: "DWtDN-sTbzV",
    embedUrl: "https://www.instagram.com/reel/DWtDN-sTbzV/embed/",
    thumbnail: null,
    date: "Verified Reel",
    verified: true,
  },
  {
    id: "reel-sarah-acl",
    platform: "instagram",
    author: "Sarah Ahammed",
    authorHandle: "@changampally_remedium",
    authorRole: "Sports Medicine Patient",
    condition: "ACL Injury Recovery",
    avatarUrl: "/assets/Changampally Remedium_logo.png",
    text: "Here’s what Sarah Ahammed, who was admitted to our hospital for an ACL injury, has to say about her recovery journey combining Ayurvedic therapies and specialised sports physiotherapy.",
    postUrl: "https://www.instagram.com/reel/Dc-7Bs3z-og/?mdxt=ZHJlY2hsODByeDRh",
    reelCode: "Dc-7Bs3z-og",
    embedUrl: "https://www.instagram.com/reel/Dc-7Bs3z-og/embed/",
    thumbnail: null,
    date: "Verified Reel",
    verified: true,
  },
  {
    id: "reel-ali-khan-stroke",
    platform: "instagram",
    author: "Mr. Ali Khan",
    authorHandle: "@changampally_remedium",
    authorRole: "Andaman & Nicobar Islands",
    condition: "Post-Stroke Rehabilitation",
    avatarUrl: "/assets/Changampally Remedium_logo.png",
    text: "Mr. Ali Khan shares his family’s experience at Changampally Remedium, Edappal, where his wife received rehabilitation following a stroke—restoring mobility, functional recovery, and quality of life.",
    postUrl: "https://www.instagram.com/reel/DeZZj6xz2ls/?srtk=MW52dGs2MTBjczc4bQ==",
    reelCode: "DeZZj6xz2ls",
    embedUrl: "https://www.instagram.com/reel/DeZZj6xz2ls/embed/",
    thumbnail: null,
    date: "Verified Reel",
    verified: true,
  },
  {
    id: "reel-hyder-ali",
    platform: "instagram",
    author: "Hyder Ali",
    authorHandle: "@changampally_remedium",
    authorRole: "Hospital Guest",
    condition: "Personalised Inpatient Care",
    avatarUrl: "/assets/Changampally Remedium_logo.png",
    text: "Here’s what our guest Hyder Ali has to say about his experience at Changampally Remedium Integrated Healthcare, highlighting our patient-centred care combining classical Ayurveda and modern medicine.",
    postUrl: "https://www.instagram.com/reel/Ddq2fA3zUee/?vrfl=MWtyNGdjbDh5NDQzMA==",
    reelCode: "Ddq2fA3zUee",
    embedUrl: "https://www.instagram.com/reel/Ddq2fA3zUee/embed/",
    thumbnail: null,
    date: "Verified Reel",
    verified: true,
  },
];
