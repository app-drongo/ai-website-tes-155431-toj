'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Zap, Users, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_CTA = {
  sectionTitle: 'Ready to Transform Your Business?',
  sectionSubtitle: 'Join thousands of companies already using Tes to streamline their operations and boost productivity.',
  primaryCtaText: 'Start Free Trial',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Schedule Demo',
  secondaryCtaHref: '/demo',
  urgencyText: 'No credit card required • 14-day free trial',
  features: [
    'Setup in under 5 minutes',
    'Cancel anytime',
    'Full feature access',
    '24/7 support included'
  ],
  testimonialQuote: '"Tes helped us increase productivity by 300% in just 3 months."',
  testimonialAuthor: 'Sarah Johnson, CEO at TechFlow',
  backgroundPattern: true,
  showStats: true,
  stats: [
    { icon: Users, value: '10,000+', label: 'Active Users' },
    { icon: Zap, value: '99.9%', label: 'Uptime' },
    { icon: Shield, value: 'SOC 2', label: 'Compliant' }
  ]
} as const;

type CallToActionProps = Partial<typeof DEFAULT_CTA>;

export default function CallToAction(props: CallToActionProps) {
  const config = { ...DEFAULT_CTA, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="cta" className="bg-gradient-to-br from-primary/5 via-background to-accent/5 text-foreground py-20 relative overflow-hidden">
      {/* Background Pattern */}
      {config.backgroundPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px, 30px 30px'
          }} />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div
            className={`mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span data-editable="sectionTitle">{config.sectionTitle}</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
            </p>
          </div>

          {/* Main CTA Card */}
          <Card
            className={`bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl mb-12 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <CardContent className="p-8 md:p-12">
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  onClick={handlePrimaryClick}
                  data-editable-href="primaryCtaHref"
                  data-href={config.primaryCtaHref}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all"
                >
                  <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleSecondaryClick}
                  data-editable-href="secondaryCtaHref"
                  data-href={config.secondaryCtaHref}
                  className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold shadow-sm hover:shadow-md transition-all"
                >
                  <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                </Button>
              </div>

              {/* Urgency Text */}
              <p className="text-sm text-muted-foreground mb-8">
                <span data-editable="urgencyText">{config.urgencyText}</span>
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {config.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-left">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      <span data-editable={`features[${idx}]`}>{feature}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="border-t border-border/50 pt-8">
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  <span data-editable="testimonialQuote">{config.testimonialQuote}</span>
                </blockquote>
                <cite className="text-sm font-medium text-foreground">
                  <span data-editable="testimonialAuthor">{config.testimonialAuthor}</span>
                </cite>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          {config.showStats && (
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {config.stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
