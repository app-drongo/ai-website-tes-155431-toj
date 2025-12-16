'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const DEFAULT_REVIEWS = {
  sectionTitle: 'What Our Customers Say',
  sectionSubtitle: 'Join thousands of satisfied customers who have transformed their business operations with Tes',
  reviews: [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechFlow Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 5,
      review: 'Tes has completely transformed how we manage our workflows. The automation features saved us 40+ hours per week, and the intuitive interface made adoption seamless across our entire team.',
      featured: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'GrowthLab Inc',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 5,
      review: 'The ROI was immediate. Within the first month, we saw a 60% improvement in process efficiency. The customer support team is exceptional - always responsive and helpful.',
      featured: false,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'InnovateCorp',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 5,
      review: 'What impressed me most is how quickly our team adapted to Tes. The learning curve was minimal, and the productivity gains were substantial. Highly recommend for any growing business.',
      featured: false,
    },
    {
      id: 4,
      name: 'David Park',
      role: 'CTO',
      company: 'ScaleUp Dynamics',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 5,
      review: 'The enterprise-grade security and seamless integrations made Tes the perfect choice for our organization. It scales beautifully as we grow.',
      featured: false,
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'VP of Operations',
      company: 'Efficient Systems',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      rating: 5,
      review: 'Tes eliminated the chaos in our project management. The real-time collaboration features and automated reporting have been game-changers for our remote team.',
      featured: false,
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Founder',
      company: 'StartupBoost',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 5,
      review: 'As a startup, we needed something powerful yet affordable. Tes delivered on both fronts. The value we get for the price is unmatched in the market.',
      featured: false,
    },
  ],
  stats: {
    totalReviews: '2,500+',
    averageRating: '4.9',
    satisfactionRate: '98%',
  },
} as const;

type ReviewsProps = Partial<typeof DEFAULT_REVIEWS>;

export default function Reviews(props: ReviewsProps) {
  const config = { ...DEFAULT_REVIEWS, ...props };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  const featuredReview = config.reviews.find((review) => review.featured);
  const regularReviews = config.reviews.filter((review) => !review.featured);

  return (
    <section id="reviews" className="bg-muted/30 text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                <span data-editable="stats.totalReviews">{config.stats.totalReviews}</span>
              </div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-2xl font-bold text-primary">
                  <span data-editable="stats.averageRating">{config.stats.averageRating}</span>
                </span>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                <span data-editable="stats.satisfactionRate">{config.stats.satisfactionRate}</span>
              </div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Featured Review */}
        {featuredReview && (
          <div
            className={`mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <Avatar className="h-16 w-16 md:h-20 md:w-20">
                      <AvatarImage
                        src={featuredReview.avatar}
                        alt={featuredReview.name}
                        data-editable-src={`reviews[${featuredReview.id - 1}].avatar`}
                      />
                      <AvatarFallback>
                        {featuredReview.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">{renderStars(featuredReview.rating)}</div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Featured
                      </Badge>
                    </div>
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                      <span data-editable={`reviews[${featuredReview.id - 1}].review`}>
                        {featuredReview.review}
                      </span>
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">
                        <span data-editable={`reviews[${featuredReview.id - 1}].name`}>
                          {featuredReview.name}
                        </span>
                      </div>
                      <div className="text-muted-foreground">
                        <span data-editable={`reviews[${featuredReview.id - 1}].role`}>
                          {featuredReview.role}
                        </span>
                        {' at '}
                        <span data-editable={`reviews[${featuredReview.id - 1}].company`}>
                          {featuredReview.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Regular Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularReviews.map((review, idx) => (
            <Card
              key={review.id}
              className={`bg-card hover:shadow-lg transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={review.avatar}
                      alt={review.name}
                      data-editable-src={`reviews[${review.id - 1}].avatar`}
                    />
                    <AvatarFallback>
                      {review.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      <span data-editable={`reviews[${review.id - 1}].name`}>
                        {review.name}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`reviews[${review.id - 1}].role`}>
                        {review.role}
                      </span>
                      {' at '}
                      <span data-editable={`reviews[${review.id - 1}].company`}>
                        {review.company}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">{renderStars(review.rating)}</div>
                <blockquote className="text-muted-foreground leading-relaxed">
                  <span data-editable={`reviews[${review.id - 1}].review`}>
                    {review.review}
                  </span>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}