'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'TechFlow',
  tagline: 'Streamline your workflow with intelligent automation and seamless team collaboration',
  description: 'Empowering teams to work smarter, not harder with cutting-edge SaaS solutions.',

  // Company Links
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],

  // Legal Links
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],

  // Social Links
  socialLinks: [
    { platform: 'github', href: 'https://github.com/techflow', label: 'GitHub' },
    { platform: 'twitter', href: 'https://twitter.com/techflow', label: 'Twitter' },
    { platform: 'linkedin', href: 'https://linkedin.com/company/techflow', label: 'LinkedIn' },
  ],

  // Contact Info
  contactEmail: 'hello@techflow.com',
  contactPhone: '+1 (555) 123-4567',
  address: '123 Innovation Drive, Tech Valley, CA 94000',

  // Newsletter
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest updates and insights delivered to your inbox.',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',

  // Copyright
  copyrightText: '© 2024 TechFlow. All rights reserved.',

  // Additional Links
  supportHref: '/support',
  supportText: 'Support Center',
  documentationHref: '/docs',
  documentationText: 'Documentation',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
  };

  return (
    <footer id="footer" className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">
                <span data-editable="companyName">{config.companyName}</span>
              </h3>
              <p className="text-muted-foreground mt-2">
                <span data-editable="tagline">{config.tagline}</span>
              </p>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span data-editable="contactEmail">{config.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span data-editable="contactPhone">{config.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span data-editable="address">{config.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => navigate(link.href)}
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
              <li>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => navigate(config.supportHref)}
                  data-editable-href="supportHref"
                  data-href={config.supportHref}
                >
                  <span data-editable="supportText">{config.supportText}</span>
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => navigate(config.documentationHref)}
                  data-editable-href="documentationHref"
                  data-href={config.documentationHref}
                >
                  <span data-editable="documentationText">{config.documentationText}</span>
                </Button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">
              <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="space-y-2"
              data-form-id="69418f1bd03a9bfec924642e"
            >
              <input
                type="email"
                placeholder={config.newsletterPlaceholder}
                className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                data-editable="newsletterPlaceholder"
              />
              <Button type="submit" size="sm" className="w-full">
                <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyrightText">{config.copyrightText}</span>
          </p>

          <div className="flex items-center gap-6">
            {/* Legal Links */}
            <div className="flex items-center gap-4">
              {config.legalLinks.map((link, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => navigate(link.href)}
                  data-editable-href={`legalLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                </Button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {config.socialLinks.map((social, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 text-muted-foreground hover:text-foreground"
                  onClick={() => window.open(social.href, '_blank')}
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={social.href}
                  aria-label={social.label}
                >
                  {getSocialIcon(social.platform)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
