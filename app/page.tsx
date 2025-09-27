import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  Code,
  Settings,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Announcing our latest WordPress plugin suite
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              WordPress Plugins for{" "}
              <span className="text-accent">Modern Websites</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              Build exceptional WordPress experiences with our suite of
              professional plugins. Built for developers and agencies who demand
              high-performance websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary h-10 cursor-pointer">
                Explore Plugins
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer hover:bg-black"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              Our Plugin Suite
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Professional WordPress plugins designed to enhance your
              website&apos;s functionality and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>ClarifyBuilder</CardTitle>
                <CardDescription>
                  Advanced page builder with drag-and-drop functionality for
                  creating stunning layouts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Visual drag-and-drop editor
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Pre-built templates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Mobile responsive
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>ClarifyForms</CardTitle>
                <CardDescription>
                  Powerful form builder with advanced validation and integration
                  capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Advanced form fields
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Email integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Spam protection
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card> */}

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-muted-foreground" />
                </div>
                <CardTitle>Coming Soon</CardTitle>
                <CardDescription>
                  More innovative plugins are in development to expand your
                  WordPress toolkit.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-muted-foreground mr-2" />
                    Performance optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-muted-foreground mr-2" />
                    SEO enhancements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-muted-foreground mr-2" />
                    Security features
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  disabled
                >
                  Stay Tuned
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              Why Choose ClarifyThemes?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              We&apos;re committed to delivering exceptional WordPress plugins
              that developers and agencies trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-muted-foreground text-pretty">
                Intuitive interfaces designed for both beginners and
                professionals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Future-Proof</h3>
              <p className="text-muted-foreground text-pretty">
                Built with modern standards and regular updates for WordPress
                compatibility.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Trusted by Developers
              </h3>
              <p className="text-muted-foreground text-pretty">
                Used by thousands of developers and agencies worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Support</h3>
              <p className="text-muted-foreground text-pretty">
                Dedicated support team ready to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              What Developers Say
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Join thousands of satisfied developers who trust ClarifyThemes for
              their WordPress projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  &quot;ClarifyBuilder has revolutionized how we create
                  WordPress sites. The drag-and-drop functionality is incredibly
                  intuitive.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-accent">
                      JS
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm text-muted-foreground">
                      Lead Developer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  &quot;ClarifyForms saved us countless hours. The form builder
                  is powerful yet simple to use for complex requirements.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-accent">
                      MJ
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      Agency Owner
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  &quot;The support team is exceptional. They helped us
                  customize the plugins perfectly for our client&lsquo;s
                  needs.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-accent">
                      DW
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">David Wilson</p>
                    <p className="text-sm text-muted-foreground">
                      Freelance Developer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-gray-800 text-primary-foreground pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              Ready to Transform Your WordPress Experience?
            </h2>
            <p className="text-lg text-primary-foreground/80 text-pretty max-w-2xl mx-auto mb-8">
              Join thousands of developers who trust ClarifyThemes for their
              WordPress projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Explore Plugins
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-4 lg:mb-0 lg:w-auto w-full">
                <h3 className="text-xl font-bold">ClarifyThemes</h3>
                <p className="text-primary-foreground/80">
                  Professional WordPress Plugins
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 text-sm lg:w-auto w-full">
                <a
                  href="#products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Products
                </a>
                <a
                  href="#features"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Support
                </a>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/60 text-sm">
                © 2025 ClarifyThemes. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
