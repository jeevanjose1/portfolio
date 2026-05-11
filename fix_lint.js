const fs = require('fs');

// Fix Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(/Globe, ExternalLink, Send/g, ''); // Adjust this based on exact import if needed
footer = footer.replace(/import \{ Globe, ExternalLink, Send \} from "lucide-react";\n/g, '');
footer = footer.replace(/, Globe, ExternalLink, Send/g, '');
footer = footer.replace(/Globe, ExternalLink, Send, /g, '');
fs.writeFileSync('src/components/Footer.tsx', footer);

// Fix ContactForm.tsx
let contactForm = fs.readFileSync('src/components/contact/ContactForm.tsx', 'utf8');
contactForm = contactForm.replace(/I've received/g, "I&apos;ve received");
contactForm = contactForm.replace(/Let's discuss/g, "Let&apos;s discuss");
fs.writeFileSync('src/components/contact/ContactForm.tsx', contactForm);

// Fix ContactHero.tsx
let contactHero = fs.readFileSync('src/components/contact/ContactHero.tsx', 'utf8');
contactHero = contactHero.replace(/Let's Build/g, "Let&apos;s Build");
contactHero = contactHero.replace(/I'd love/g, "I&apos;d love");
contactHero = contactHero.replace(/I'll respond/g, "I&apos;ll respond");
fs.writeFileSync('src/components/contact/ContactHero.tsx', contactHero);

// Fix ProjectDetails.tsx
let projectDetails = fs.readFileSync('src/components/works/ProjectDetails.tsx', 'utf8');
projectDetails = projectDetails.replace(/Record<string, any>/g, "Record<string, React.ElementType>");
projectDetails = projectDetails.replace(/couldn't keep/g, "couldn&apos;t keep");
projectDetails = projectDetails.replace(/Let's Talk/g, "Let&apos;s Talk");
fs.writeFileSync('src/components/works/ProjectDetails.tsx', projectDetails);

// Fix WorksHero.tsx
let worksHero = fs.readFileSync('src/components/works/WorksHero.tsx', 'utf8');
worksHero = worksHero.replace(/I've Built/g, "I&apos;ve Built");
fs.writeFileSync('src/components/works/WorksHero.tsx', worksHero);

console.log("Lint errors fixed");
