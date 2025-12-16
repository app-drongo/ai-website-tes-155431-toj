'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  sectionTitle: 'Choose Your Plan',
  sectionSubtitle: 'Flexible pricing that scales with your business needs',
  billingToggle: {
    monthly: 'Monthly',
    yearly: 'Yearly',
  },
  yearlyDiscount: 'Save 20%',
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 29,
      yearlyPrice: 23,
      currency: '$',
      period: 'per user/month',
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic automation',
        'Email support',
        'Mobile app access',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=starter',
      popular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Advanced features for growing businesses',
      monthlyPrice: 79,
      yearlyPrice: 63,
      currency: '$',
      period: 'per user/month',
      features: [
        'Up to 25 team members',
        '100GB storage',
        'Advanced automation',
        'Priority support',
        'API access',
        'Custom integrations',
        'Analytics dashboard',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=professional',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      monthlyPrice: 199,
      yearlyPrice: 159,
      currency: '$',
      period: 'per user/month',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Custom automation',
        '24/7 dedicated support',
        'Advanced security',
        'SSO integration',
        'Custom onboarding',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact?plan=enterprise',
      popular: false,
    },
  ],
  guarantee: '30-day money-back guarantee',
  additionalInfo: 'All plans include free onboarding and migration assistance',
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
            >
              <span data-editable="billingToggle.monthly">{config.billingToggle.monthly}</span>
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              role="switch"
              aria-checked={isYearly}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
            >
              <span data-editable="billingToggle.yearly">{config.billingToggle.yearly}</span>
            </span>
            {isYearly && (
              <Badge variant="secondary" className="ml-2">
                <span data-editable="yearlyDiscount">{config.yearlyDiscount}</span>
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={plan.id}
              className={`relative bg-card text-card-foreground transition-all duration-300 hover:shadow-lg ${
                plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <h3 className="text-xl font-semibold mb-2">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    <span data-editable={`plans[${idx}].currency`}>{plan.currency}</span>
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    <span data-editable={`plans[${idx}].period`}>{plan.period}</span>
                  </span>
                </div>
                <Button
                  onClick={() => handlePlanSelect(plan.ctaHref)}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  data-editable-href={`plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                >
                  <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                </Button>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                          {feature}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="guarantee">{config.guarantee}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            <span data-editable="additionalInfo">{config.additionalInfo}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
