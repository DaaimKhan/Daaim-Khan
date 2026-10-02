import "./globals.css";
import { SITE } from "../lib/data";

export const metadata = {

    metadataBase: new URL(SITE.url),

    title: { 
        default: "Mohd. Daaim Khan – Full Stack Web Developer | Dashboards, LMS & PHP/React Apps", 
        template: "%s | Mohd. Daaim Khan" 
    },
    description: "Mohd. Daaim Khan is a full stack web developer in Delhi building custom websites, admin dashboards, LMS and student portals with PHP, CodeIgniter, React and WordPress. See live project previews.",
    
    authors: [
        { 
            name: SITE.name 
        }
    ], 

    alternates: { 
        canonical: "/" 
    },

    robots: { 
        index: true, 
        follow: true, 
        googleBot: { 
            index: true, 
            follow: true, 
            "max-image-preview": "large" 
        } 
    },

    openGraph: { 
        type: "website", 
        url: SITE.url, 
        siteName: "Mohd. Daaim Khan", 
        title: "Mohd. Daaim Khan – Full Stack Web Developer", 
        description: "Custom websites, admin dashboards, LMS and student portals with PHP, CodeIgniter & React.", 
        locale: "en_IN" 
    },

    twitter: { 
        card: "summary_large_image", 
        title: "Mohd. Daaim Khan – Full Stack Web Developer", 
        description: "Custom websites, dashboards, LMS & portals from Delhi, India." 
    }
};

export const viewport = { 
    width: "device-width", 
    initialScale: 1, 
    themeColor: "#07070c" 
};

const init = `try{var t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({ children }) { 

    return (
    <html lang="en-IN" suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{ __html: init }} />
        </head>
        <body>{children}</body>
    </html>
    ) 
    
}
