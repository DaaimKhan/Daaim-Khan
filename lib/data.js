export const SITE = { 
    url: "https://daaimkhan.dev", 
    name: "Mohd. Daaim Khan", 
    email: "daaimkhan86@gmail.com", 
    linkedin: "https://www.linkedin.com/in/mohd-daaim-khan-86a7b8238", 
    github: "https://github.com/DaaimKhan", 
    whatsapp: "+919568400743" 
};

export const projects = [
    { 
        id: "languagewala-learning-platform", 
        n: "Languagewala", 
        u:"languagewala.in",
        cat: "Course / Learning Platform", 
        k: "site", 
        a: "#8b5cf6", 
        out: "A database-driven language learning platform with course discovery, enrolment and learner progress.", 
        stack: [
            "PHP", 
            "React", 
            "MySQL"
        ], 
        nav: ["Home", "Courses", "Pricing", "Login"], 
        h: "Learn a language, your way", 
        cta: "Enrol now", 
        rows: [
            ["German A1", "12 lessons"], ["French B1", "18 lessons"], ["Spanish A2", "15 lessons"]
        ], 
        f: ["All", "Beginner"], 
        st: ["Open", "Enrolled", "Active"] 
    },

    {
        id:"data-breach-times-attorney-platform",
        u:"databreachtimes.com",
        n:"Data Breach Times",
        cat:"Legal Lead & Attorney Management Platform",
        k:"dash",
        a:"#10b981",
        out:"A WordPress website with a CodeIgniter admin panel where attorneys apply, get approved, and receive location-based cases they can mark Interested or Not Interested. Cases with no response are automatically routed to nearby attorneys.",
        stack:["WordPress","CodeIgniter 4","MySQL"],
        nav:["Overview","Attorneys","Cases","Routing"],
        kpi:["Cases","Interested","Re-routed"],
        v:[1284,310,96],
        rows:[
            ["Case #2041","Delhi area"],["Case #2042","Nearby area"],["Case #2043","Awaiting reply"]
        ],
        f:["7 days","30 days"],
        st:["New","Interested","Re-routed"]
    },

    { 
        id: "student-portal-system", 
        n: "Student Portal", 
        cat: "Student Management Portal", 
        u:"languagewala.in/student-portal", 
        k: "dash", 
        a: "#8b5cf6", 
        out: "A portal for attendance, progress and student records with role-based panels.", 
        stack: ["PHP", "React", "MySQL"], 
        nav: ["Dashboard", "Attendance", "Progress", "Fees"], 
        kpi: ["Students", "Present", "Pending"], 
        v: [540, 498, 22], 
        rows: [
            ["Aarav S.", "Class 8"], ["Meera K.", "Class 9"], ["Imran A.", "Class 7"]
        ], 
        f: ["Today", "Month"], 
        st: ["Absent", "Present", "Late"] 
    },

    { 
        id: "school-website-development", 
        n: "School Website", 
        cat: "Institutional Website", 
        u:"schools.languagewala.in",
        k: "site", 
        a: "#10b981", 
        out: "A responsive school website with admissions enquiry, contact flow and clear navigation.", 
        stack: ["WordPress", "PHP", "Responsive UI"], 
        nav: ["About", "Academics", "Admissions", "Contact"], 
        h: "Admissions open this session", 
        cta: "Apply now", 
        rows: [
            ["Primary", "Grades 1–5"], ["Middle", "Grades 6–8"], ["Senior", "Grades 9–12"]
        ], 
        f: ["All", "Boarding"], 
        st: ["Open", "Applied", "Review"] 
    },

    { 
        id: "nursery-connect-web-app", 
        n: "Nursery Connect", 
        cat: "Business Web Application", 
        u:"nurseryconnect.in",
        k: "site", 
        a: "#8b5cf6", 
        out: "A searchable, filterable listing application with detail panels, built on a database.", 
        stack: ["PHP", "MySQL", "JavaScript"], 
        nav: ["Browse", "Nurseries", "Plants", "Contact"], 
        h: "Find the right nursery, fast", 
        cta: "View details", 
        rows: [
            ["Green Valley", "Delhi NCR"], ["Bloom House", "Noida"], ["Leaf & Co.", "Gurugram"]
        ], 
        f: ["All", "Nearby"], 
        st: ["Listed", "Saved", "Contacted"] 
    },

    { 
        id: "languagewala-admin-analytics", 
        n: "Languagewala Admin", 
        cat: "Admin Dashboard / Analytics", 
        u:"admin.languagewala.in/portal/",
        k: "dash", 
        a: "#10b981", 
        out: "An admin dashboard with KPIs, charts, date filters and data tables for platform operations.", 
        stack: ["React", "Chart.js", "PHP"], 
        nav: ["Analytics", "Users", "Courses", "Orders"], 
        kpi: ["Users", "Orders", "Active"], 
        v: [3200, 740, 1180], 
        rows: [
            ["Order #881", "Paid"], ["Order #882", "Pending"], ["Order #883", "Paid"]
        ], 
        f: ["7 days", "30 days"], 
        st: ["Pending", "Paid", "Refund"] 
    },

    {
        id:"linguapol-student-portal",
        u:"linguapol.com/student-system",
        n:"Linguapol Student Portal",
        cat:"Student Portal + Payments",
        k:"site",
        a:"#8b5cf6",
        out:"A student portal with OTP sign-up and login, course purchase through Razorpay, invoices, mandatory profile completion and certificates on course completion.",
        stack:["PHP","Firebase","Razorpay"],
        nav:["Courses","My Learning","Invoices","Profile"],
        h:"Continue your learning",
        cta:"Pay with Razorpay",
        rows:[
            ["German A1","Course details"],["French B1","Course details"],["Spanish A2","Course details"]
        ],
        f:["All","Enrolled"],st:["Unpaid","Paid","Completed"]
    },

    {
        id:"linguapol-admin-panel",
        u:"admin.linguapol.com",
        n:"Linguapol Admin Panel",
        cat:"Admin Panel",
        k:"dash",
        a:"#10b981",
        out:"An admin panel to manage students, courses, payments and certificates for the Linguapol platform.",
        stack:["PHP","Firebase","JavaScript"],
        nav:["Dashboard","Students","Courses","Payments"],
        kpi:["Students","Payments","Certificates"],
        v:[320,210,64],
        rows:[
            ["Student #101","Profile done"],["Student #102","Payment done"],["Student #103","Course done"]
        ],
        f:["7 days","30 days"],st:["Pending","Paid","Issued"]
    },
];

export const services = [
    ["Business & marketing websites", "Fast, conversion-focused websites for growing businesses.", "school-website-development"], 
    ["Custom admin dashboards", "KPIs, charts, tables and role-based control panels.", "languagewala-admin-analytics"], 
    ["LMS & student portals", "Learning platforms and student management systems.", "student-portal-system"], 
    ["PHP / CodeIgniter applications", "Structured, maintainable custom back-ends.", "dbt-claims-case-management"], 
    ["React-based interfaces", "Responsive, state-driven front-ends.", "languagewala-learning-platform"], 
    ["WordPress & WooCommerce", "Custom themes, plugins and online stores.", "school-website-development"], 
    ["Database-driven web apps", "MySQL-backed apps built around your workflow.", "nursery-connect-web-app"], 
    ["API & third-party integrations", "Payments, OTP, CRM and external services.", "dbt-claims-case-management"], 
    ["Maintenance & improvements", "Bug fixing, upgrades and ongoing support.", "languagewala-learning-platform"]
];

export const stack = ["PHP", "CodeIgniter 4", "Laravel", "CakePHP", "React.js", "Next.js", "MySQL", "WordPress", "WooCommerce", "Chart.js", "REST APIs", "Razorpay", "PhonePe", "Cashfree", "Firebase", "Google Cloud Console"];

export const process = [
    ["Discover", "We define goals, users and scope clearly."], 
    ["Design & plan", "Structure, flows and a visual direction you approve."], 
    ["Build", "Clean, maintainable code with regular updates."], 
    ["Launch & support", "Testing, deployment and post-launch improvements."]
];

export const principles = [
    ["Fast by default", "Lightweight code, optimised assets, mobile-first."], 
    ["Maintainable", "Structured code your team can extend."], 
    ["Clear communication", "Straight updates, no surprises."], 
    ["Accessible & SEO-ready", "Semantic HTML, metadata and clean URLs."]
];
