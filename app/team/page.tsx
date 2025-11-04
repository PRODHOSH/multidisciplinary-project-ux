"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Team() {
  const team = [
    {
      name: "Sarah Chen",
      role: "Lead Hardware Engineer",
      bio: "Expert in IoT systems and embedded development",
      email: "sarah@smartplant.io",
      social: { linkedin: "#", github: "#" },
    },
    {
      name: "Marcus Johnson",
      role: "Full Stack Developer",
      bio: "Specializes in cloud architecture and backend systems",
      email: "marcus@smartplant.io",
      social: { linkedin: "#", github: "#" },
    },
    {
      name: "Priya Patel",
      role: "UI/UX Designer",
      bio: "Creates intuitive interfaces for complex systems",
      email: "priya@smartplant.io",
      social: { linkedin: "#", github: "#" },
    },
    {
      name: "David Rodriguez",
      role: "Sustainability Consultant",
      bio: "Focused on environmental impact and efficiency",
      email: "david@smartplant.io",
      social: { linkedin: "#", github: "#" },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate engineers and designers building the future of sustainable gardening
            </p>
          </div>
        </div>
      </section>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Team Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <a href={`mailto:${member.email}`} className="text-primary hover:underline truncate">
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20 bg-secondary/10 rounded-2xl p-8 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  Everything we build is designed to minimize environmental impact and promote sustainable practices.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push boundaries to create smarter, more efficient solutions for gardening challenges.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We believe in collaboration and building a community of gardeners passionate about sustainability.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions about our Smart Plant Health Monitoring System? Want to collaborate or discuss
                  partnerships? We'd love to hear from you.
                </p>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Email</p>
                    <a href="mailto:contact@smartplant.io" className="text-primary hover:underline">
                      contact@smartplant.io
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Phone</p>
                    <p className="text-foreground">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Location</p>
                    <p className="text-foreground">123 Innovation Drive, Tech City, TC 12345</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-3">Follow Us</p>
                    <div className="flex gap-4">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
