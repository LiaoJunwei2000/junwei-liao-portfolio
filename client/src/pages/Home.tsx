/**
 * Design Philosophy: Academic Minimalism
 * - Clean information hierarchy with ample whitespace
 * - Deep blue accent color for emphasis
 * - Inter font family for modern readability
 * - Single column layout with max-width 720px
 * - Timeline visualization for career progression
 */

import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container max-w-[720px] pt-16 pb-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/10">
            <img
              src="/images/avatar.jpg"
              alt="Junwei Liao"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold text-foreground tracking-tight">
            Junwei Liao
          </h1>

          {/* Tagline */}
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Talent Acquisition Specialist at Huawei | NUS SoC '23 | SM2 Scholarship Recipient
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href="mailto:liaojunwei1208@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/junwei-liao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="container max-w-[720px]" />

      {/* About Section */}
      <section className="container max-w-[720px] py-12">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            I am currently working as a Talent Acquisition Specialist at Huawei's Asia-Pacific Recruitment Platform, 
            focusing on campus recruitment for top-tier STEM PhD students. I have developed and maintained a comprehensive 
            talent map covering over 1,000 CS, AI, and EE-related PhD candidates in Singapore.
          </p>
          <p>
            I graduated from the National University of Singapore with a Bachelor's degree in Information Systems (Honours), 
            specializing in Digital Product and Platform Management. I am a proud recipient of the Science & Technology 
            Undergraduate Scholarship and a member of the SM2 Scholarship Batch 22nd.
          </p>
          <p>
            My professional journey includes experience in financial consulting, where I advised over 100 clients on health 
            and wealth protection planning, and achieved recognition through multiple awards including Quality Club 2025 and 
            FASTRACK 2024.
          </p>
        </div>
      </section>

      <Separator className="container max-w-[720px]" />

      {/* Experience Section */}
      <section className="container max-w-[720px] py-12">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {/* Timeline Item 1 */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl font-semibold">Talent Acquisition Specialist</h3>
                <span className="text-sm text-muted-foreground">Jul 2025 - Present</span>
              </div>
              <p className="text-base font-medium text-primary">Huawei</p>
              <p className="text-sm text-muted-foreground">Singapore · On-site</p>
              <ul className="mt-3 space-y-2 text-foreground/80">
                <li>• Campus recruitment across bachelor, master and PhD students</li>
                <li>• Focus on top-tier STEM PhD students</li>
                <li>• Developed and maintained a comprehensive talent map covering 1000+ CS, AI, and EE-related PhD candidates</li>
                <li>• Strengthened Huawei's employer brand by engaging with academic networks</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Technical Recruiting
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary/60"></div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl font-semibold">Financial Consultant</h3>
                <span className="text-sm text-muted-foreground">Apr 2025 - Jul 2025</span>
              </div>
              <p className="text-base font-medium text-primary">finexis advisory Pte Ltd</p>
              <p className="text-sm text-muted-foreground">Singapore · Hybrid</p>
              <ul className="mt-3 space-y-2 text-foreground/80">
                <li>• Sales and Financial Planning</li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary/40"></div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl font-semibold">Financial Consultant</h3>
                <span className="text-sm text-muted-foreground">Sep 2023 - Mar 2025</span>
              </div>
              <p className="text-base font-medium text-primary">Prudential Assurance Company Singapore</p>
              <p className="text-sm text-muted-foreground">Singapore · Hybrid</p>
              <ul className="mt-3 space-y-2 text-foreground/80">
                <li>• Advised 100+ clients on their Health and Wealth Protection Planning</li>
                <li>• Collected $100,000+ Annualized Premium</li>
              </ul>
              <div className="mt-3 space-y-1">
                <p className="text-sm font-medium text-foreground">Awards:</p>
                <p className="text-sm text-foreground/80">• Quality Club 2025</p>
                <p className="text-sm text-foreground/80">• FASTRACK 2024</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Business Development
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Sales
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="container max-w-[720px]" />

      {/* Education Section */}
      <section className="container max-w-[720px] py-12">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <h3 className="text-xl font-semibold">National University of Singapore</h3>
                <span className="text-sm text-muted-foreground">Aug 2019 - May 2023</span>
              </div>
              <p className="text-base font-medium text-primary">Bachelor's degree, Information Systems</p>
              <p className="text-sm text-foreground/80">Grade: Honours</p>
              <p className="text-sm text-foreground/80">Specialization: Digital Product and Platform Management</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Product Management
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <h3 className="text-xl font-semibold">National University of Singapore</h3>
                <span className="text-sm text-muted-foreground">Jul 2018 - Jun 2019</span>
              </div>
              <p className="text-base font-medium text-primary">SM2 Bridging Course</p>
            </div>
          </Card>
        </div>
      </section>

      <Separator className="container max-w-[720px]" />

      {/* Certifications Section */}
      <section className="container max-w-[720px] py-12">
        <h2 className="text-3xl font-bold mb-8">Licenses & Certifications</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">M5, M8, M8A, M9, M9A, HI</h3>
              <p className="text-sm font-medium text-primary">Singapore College Of Insurance</p>
              <p className="text-sm text-muted-foreground">Issued Jul 2023</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Certified Scrum Product Owner (CSPO)</h3>
              <p className="text-sm font-medium text-primary">Scrum Alliance</p>
              <p className="text-sm text-muted-foreground">Issued Jun 2023 · Expired Jun 2025</p>
              <p className="text-sm text-muted-foreground">Credential ID: 1792846</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Product Management
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Agile
                </span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Separator className="container max-w-[720px]" />

      {/* Honors & Awards Section */}
      <section className="container max-w-[720px] py-12">
        <h2 className="text-3xl font-bold mb-8">Honors & Awards</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Science & Technology Undergraduate Scholarship</h3>
              <p className="text-sm font-medium text-primary">National University of Singapore</p>
              <p className="text-sm text-muted-foreground">Issued Jun 2019</p>
              <p className="text-sm text-foreground/80 mt-3">
                Full scholarship awarded by National University of Singapore to the top students from top high schools in China.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">SM2 Scholarship Batch 22nd</h3>
              <p className="text-sm text-foreground/80 mt-3">
                Member of the prestigious SM2 Scholarship program, which selects outstanding students from China 
                for undergraduate studies in Singapore.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container max-w-[720px] py-8 mt-12 border-t">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2026 Junwei Liao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
