"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Zap, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ZakariaProfile() {
  const [mounted, setMounted] = useState(false)
  const [activeButton, setActiveButton] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const contactInfo = {
    name: "Zakaria El Hichami",
    title: "Digital Architect & Future Creator",
    phone: "+212639054780",
    email: "Elhichamizakaria45@gmail.com",
    instagram: "zakaria_elhichami",
    snapchat: "https://www.snapchat.com/@zakariaelhich25",
  }

  const socialLinks = [
    {
      id: "phone",
      name: "Neural Call",
      href: `tel:${contactInfo.phone}`,
      gradient: "from-emerald-400 via-cyan-400 to-blue-500",
      icon: <Phone className="w-5 h-5" />,
      description: "Direct Neural Link",
      glow: "shadow-emerald-500/50",
    },
    {
      id: "whatsapp",
      name: "Quantum Chat",
      href: `https://wa.me/${contactInfo.phone.replace("+", "")}`,
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      ),
      description: "Encrypted Messaging",
      glow: "shadow-green-500/50",
    },
    {
      id: "instagram",
      name: "Holo Gallery",
      href: `https://instagram.com/${contactInfo.instagram}`,
      gradient: "from-purple-400 via-pink-500 to-red-500",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      description: "Visual Matrix",
      glow: "shadow-purple-500/50",
    },
    {
      id: "snapchat",
      name: "Snap Portal",
      href: contactInfo.snapchat,
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
        </svg>
      ),
      description: "Temporal Sharing",
      glow: "shadow-yellow-500/50",
    },
    {
      id: "email",
      name: "Data Stream",
      href: `mailto:${contactInfo.email}`,
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      icon: <Mail className="w-5 h-5" />,
      description: "Secure Transmission",
      glow: "shadow-blue-500/50",
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Card */}
      <Card className="relative z-10 w-full max-w-sm mx-auto bg-black/40 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden">
        {/* Holographic Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse"></div>

        {/* Header Section */}
        <div className="relative p-6 text-center border-b border-cyan-500/20">
          {/* Status Indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <Wifi className="w-4 h-4 text-cyan-400" />
          </div>

          {/* Profile Image with Holographic Effect */}
          <div className="relative mb-4">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 relative">
              <img src="/zakaria-photo.jpg" alt="Zakaria El Hichami" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
              <Zap className="w-3 h-3 text-black" />
            </div>
          </div>

          {/* Name and Title with Glitch Effect */}
          <h1 className="text-xl font-bold text-white mb-1 tracking-wide">{contactInfo.name}</h1>
          <p className="text-cyan-300 text-sm font-mono">{contactInfo.title}</p>

          {/* Phone Display */}
          <div className="mt-4 inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 font-mono text-sm">{contactInfo.phone}</span>
          </div>
        </div>

        {/* Contact Links */}
        <div className="p-6 space-y-3">
          {socialLinks.map((link, index) => (
            <Button
              key={link.id}
              asChild
              className={`w-full h-14 bg-gradient-to-r ${link.gradient} border-0 shadow-lg ${link.glow} hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
              onMouseEnter={() => setActiveButton(link.id)}
              onMouseLeave={() => setActiveButton(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 relative z-10"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                {/* Icon Container */}
                <div className="flex-shrink-0 w-8 h-8 bg-black/20 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  {link.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1 text-left">
                  <div className="font-bold text-white text-sm tracking-wide">{link.name}</div>
                  <div className="text-xs text-white/80 font-mono">{link.description}</div>
                </div>

                {/* Pulse Effect */}
                {activeButton === link.id && (
                  <div className="absolute right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                )}
              </a>
            </Button>
          ))}
        </div>

        {/* Footer with Scan Lines Effect */}
        <div className="px-6 pb-6">
          <div className="text-center text-xs text-cyan-400 border-t border-cyan-500/20 pt-4 font-mono relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
            {">>> NEURAL LINK ESTABLISHED <<<"}
          </div>
        </div>
      </Card>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400"></div>
    </div>
  )
}
