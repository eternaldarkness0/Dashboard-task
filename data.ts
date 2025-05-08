export interface WorkQueueItem {
    initials: string;
    name: string;
};

export const workQueue: WorkQueueItem[] = [
    { initials: "SM", name: "Sam Masters" },
    { initials: "AW", name: "Annalise Willis" },
    { initials: "PD", name: "Patrick Devenport" },
    { initials: "AK", name: "Ana Killian" },
    { initials: "AK", name: "Ana Killian" },
    { initials: "ME", name: "Me" }
];

export interface Client {
    name: string;
    line: string;
};

export const clients = [
    { name: "NAMEX Tech Solutions", line: "Cyber Liability" },
    { name: "Maritime Logistics Corp", line: "Marine Cargo" },
    { name: "GreenField Energy Ltd", line: "Environmental" },
    { name: "NorthStar Financial Group", line: "D&O Liability" },
    { name: "Alliance Healthcare Systems", line: "Medical Malpractice" },
    { name: "QuantumTech Industries", line: "Product Liability" }
];

export interface WorkQueueData {
    originator: {
        name: string;
        initials: string;
    };
    client: string;
    line: string;
    type: string;
    status: string;
    created: string;
};

export const workQueueData: WorkQueueData[] = [
    {
    originator: { name: "Sam Masters", initials: "SM" },
    client: "NAMEX Tech Solutions",
    line: "Cyber Liability",
    type: "Underwriter Referral",
    status: "New",
    created: "04/16/2025"
    },
    {
    originator: { name: "Annalise Willis", initials: "AW" },
    client: "Maritime Logistics Corp",
    line: "Marine Cargo",
    type: "Underwriter Referral",
    status: "New",
    created: "04/20/2025"
    },
    {
    originator: { name: "Patrick Devenport", initials: "PD" },
    client: "GreenField Energy Ltd",
    line: "Environmental",
    type: "Loss Control Request",
    status: "New",
    created: "04/16/2025"
    },
    {
    originator: { name: "Ana Killian", initials: "AK" },
    client: "NorthStar Financial Group",
    line: "D&O Liability",
    type: "Underwriter Referral",
    status: "Pending Review",
    created: "04/22/2025"
    },
    {
    originator: { name: "Ana Killian", initials: "AK" },
    client: "Alliance Healthcare Systems",
    line: "Medical Malpractice",
    type: "Email",
    status: "Completed",
    created: "04/28/2025"
    },
    {
    originator: { name: "Me", initials: "ME" },
    client: "QuantumTech Industries",
    line: "Product Liability",
    type: "Email",
    status: "Completed",
    created: "04/20/2025"
    }
];

export interface DataProps {
    portfolioLossRatio: {
        value: number;
        target: number;
        difference: number;
        status: string;
    };
    renewalRetention: {
        value: number;
        targetRange: number[];
        status: string;
    };
    newBusinessTarget: {
        current: number;
        target: number;
    };
    annualGwpTarget: {
        current: number;
        target: number;
    };
};

export interface DataAcc {
    name: string;
    type: string;
    line: string;
    broker: string;
    renewal: string;
    premium: string;
    rated: string;
    loss: string;
    appetite: string;
    status: string;
    triage: string;
    win: string;
    winDots: number;
};

export const dataAccounts: DataAcc[] = [
    {
        name: 'NAMEX Tech Solutions',
        type: 'Large Enterprise',
        line: 'D&O Liability',
        broker: 'Willis Towers',
        renewal: '04/16/2025',
        premium: '$2.3M',
        rated: '$2.8M',
        loss: '32%',
        appetite: 'HIGH',
        status: 'Active',
        triage: '180',
        win: 'Very Strong',
        winDots: 4
        },
        {
        name: 'Alliance Healthcare Systems',
        type: 'Mid-Market',
        line: 'Medical Malpractice',
        broker: 'Aon Risk',
        renewal: '06/30/2025',
        premium: '$1.7M',
        rated: '$1.9M',
        loss: '38%',
        appetite: 'MEDIUM',
        status: 'Under review',
        triage: '165',
        win: 'Strong',
        winDots: 4
        },
        {
        name: 'Maritime Logistics Corp',
        type: 'Shipping/Logistics',
        line: 'Marine Cargo',
        broker: 'Marsh McLennan',
        renewal: '09/05/2025',
        premium: '$875K',
        rated: '$920K',
        loss: '25%',
        appetite: 'HIGH',
        status: 'Active',
        triage: '182',
        win: 'Very Strong',
        winDots: 4
        },
        {
        name: 'GreenField Energy Ltd',
        type: 'Energy Sector',
        line: 'Environmental Liability',
        broker: 'Aon Risk',
        renewal: '07/22/2025',
        premium: '$1.2M',
        rated: '$1.4M',
        loss: '67%',
        appetite: 'CAUTIOUS',
        status: 'Under review',
        triage: '158',
        win: 'Medium',
        winDots: 4
        }
    ];

export interface IncreasingData {
        label: string;
        value: number;
        line: number;
    }
export interface DecreasingData {
        label: string;
        value: number;
        line: number;
    }
export interface RecommendationsData {
        title: string;
        desc: string;
    }


export const increasing: IncreasingData[] = [
{ label: "Brokers relationship", value: 28, line: 100 },
{ label: "Loss history", value: 22, line: 85 },
{ label: "Industry growth", value: 16, line: 70 },
{ label: "Multiline opportunity", value: 11, line: 55 },
];

export const decreasing: DecreasingData[] = [
{ label: "Premium pricing", value: -24, line: 100 },
{ label: "Total exposure", value: -18, line: 85 },
{ label: "Loss ratio trend", value: -13, line: 70 },
{ label: "Market competition", value: -5, line: 55 },
];

export const recommendations: RecommendationsData[] = [
{
    title: "Offer 5% premium discount in exchange for 3-year commitment",
    desc: "Historical win rate increases 24% with multi-year commitments. Current pricing is 12% above market average. This approach would strengthen retention while maintaining adequate profitability.",
},
{
    title: "Propose risk control services for cargo handling procedures",
    desc: "Can potentially reduce loss ratio by 15-20% based on similar maritime accounts in your portfolio. Specific focus on loading/unloading operations would address the most frequent claim scenarios.",
},
];

export interface MessageCardType {
    status?: string;
    title: string;
    sender: string;
    date: string;
    message: string;
    attachments: number;
};

export const messageCards: MessageCardType[] = [
{
    status: "NEW",
    title: "Policy Renewal - Auto Insurance 5/15/25",
    sender: "Michael Roberts",
    date: "Apr 5",
    message:
    "Hello Arthur, I'm reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review coverage options before proceeding with the renewal? I've attached the current policy details and premium breakdown for your reference.",
    attachments: 3,
},
{
    status: "Responded",
    title: "Fwd: New Submission - BPM Real Estate - EFF 4/1/24",
    sender: "Joshua Dunmire",
    date: "Mar 25",
    message:
    "Arthur, attached please find our submission for the above mentioned applicant. We have...",
    attachments: 0,
},
{
    status: "NEW",
    title: "New Quote Request - Workers Comp Insurance",
    sender: "Sarah Chen",
    date: "Apr 5",
    message:
    "Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I've completed the initial risk assessment based...",
    attachments: 3,
},
{
    title: "New Business: BPM Real Estate Group, LLC",
    sender: "Isabel Kreller",
    date: "Feb 28",
    message:
    "Hello Arthur, I am pleased to present you with a submission on this client's upco...",
    attachments: 5,
},
];

export interface PolicyData {
    line: string;
    id: string;
    effDate: string;
    expDate: string;
    status: string;
    expiringTech: string;
    expiringPremium: string;
    renewalToTech: string;
    renewalTech: string;
    renewalPremium: string;
    rateChange: string;
    lossRatio: string;
    iconColor: string;
    statusDot: string;
    lossColor: string;
    textColor: string;
    rateClass: string;
};


export const policies: PolicyData[] = [
    {
    line: "Marine Cargo",
    id: "17030212",
    effDate: "6/30/2026",
    expDate: "6/30/2027",
    status: "Active",
    expiringTech: "$587,500",
    expiringPremium: "$605,000",
    renewalToTech: "$610,000",
    renewalTech: "$620,000",
    renewalPremium: "$625,000",
    rateChange: "3.3%",
    lossRatio: "22%",
    iconColor: "bg-blue-500",
    statusDot: "bg-green-400",
    lossColor: "bg-green-500",
    textColor: 'white',
    rateClass: ""
},
{
    line: "General Liability",
    id: "4631092",
    effDate: "6/30/2026",
    expDate: "6/30/2027",
    status: "Active",
    expiringTech: "$160,000",
    expiringPremium: "$165,000",
    renewalToTech: "$170,000",
    renewalTech: "$172,500",
    renewalPremium: "$175,000",
    rateChange: "6.1%",
    lossRatio: "55%",
    iconColor: "bg-green-500",
    statusDot: "bg-green-400",
    lossColor: "bg-yellow-300",
    textColor: 'black',
    rateClass: "text-red-500 font-semibold"
},
{
    line: "Workers Comp",
    id: "9182371",
    effDate: "Pending",
    expDate: "Pending",
    status: "Pending",
    expiringTech: "$0",
    expiringPremium: "$0",
    renewalToTech: "$73,500",
    renewalTech: "$75,000",
    renewalPremium: "$75,000",
    rateChange: "N/A",
    lossRatio: "N/A",
    iconColor: "bg-purple-500",
    statusDot: "bg-yellow-300",
    lossColor: "",
    textColor: 'white',
    rateClass: ""
},
{
    line: "Umbrella",
    id: "5274936",
    effDate: "13/03/2026",
    expDate: "13/03/2027",
    status: "Active",
    expiringTech: "$245,000",
    expiringPremium: "$250,000",
    renewalToTech: "$267,500",
    renewalTech: "$270,000",
    renewalPremium: "$275,000",
    rateChange: "10.0%",
    lossRatio: "78%",
    iconColor: "bg-red-500",
    statusDot: "bg-green-400",
    lossColor: "bg-red-500",
    textColor: 'white',
    rateClass: "text-red-500 font-semibold"
}
];