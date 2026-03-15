"use client";

import { useEffect } from "react";
import {
  Combine,
  ShieldCheck,
  AlertTriangle,
  Download,
  FileText,
  BookOpen,
  CheckCircle2,
  Github,
  Mail,
  ChevronRight,
  Zap,
  Eye,
  Layers,
  Settings,
  FolderOpen,
  Archive,
  ExternalLink,
  Heart,
  Monitor,
} from "lucide-react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(".reveal, .reveal-zoom, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Components
function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-4 py-1.5 neu-badge text-xs font-medium text-secondary ${className}`}
    >
      {children}
    </span>
  );
}

function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  if (variant === "primary") {
    return (
      <button
        className={`inline-flex items-center justify-center gap-2 font-medium neu-button-primary ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-medium text-secondary neu-button hover:text-primary ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="neu-card p-8 card-hover reveal-zoom">
      <div className={`neu-icon w-14 h-14 mb-6 ${color}`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
}) {
  return (
    <div className="neu-raised p-6 text-center card-hover reveal-zoom">
      <div className="neu-icon w-12 h-12 mx-auto mb-4 text-blue-500 pulse-anim">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-secondary">{label}</div>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
  icon: Icon,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="relative flex gap-6 reveal">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full neu-raised flex items-center justify-center text-blue-500 font-bold text-lg">
          {step}
        </div>
        {step < 4 && (
          <div className="w-0.5 flex-1 neu-pressed mt-4 min-h-[60px]" />
        )}
      </div>
      <div className="flex-1 pb-10">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-5 h-5 text-blue-500" />
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
        </div>
        <p className="text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Main Page Component
export default function Home() {
  useScrollReveal();
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="neu-raised px-6 py-3 flex items-center justify-between nav-enter">
            <div className="flex items-center gap-3">
              <div className="neu-icon w-10 h-10 text-blue-500">
                <Combine className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xl text-primary">
                  MSWORD ACL Merger
                </span>
                <div className="text-[10px] text-muted font-medium tracking-wide -mt-0.5">
                  by UIFlexer
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm text-secondary hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm text-secondary hover:text-primary transition-colors"
              >
                How It Works
              </a>
              <a
                href="#download"
                className="text-sm text-secondary hover:text-primary transition-colors"
              >
                Download
              </a>
            </div>
            <a
              href="/ACLMerger.exe"
              download
              className="inline-flex items-center justify-center gap-2 font-medium neu-button-primary px-4 py-2 text-sm"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        {/* Decorative floating orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-8 hero-badge">
              <Badge className="!text-blue-600">
                <Zap className="w-3.5 h-3.5" />
                Free Windows App — v1.0
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary hero-title">
              Merge Word AutoCorrect
              <br />
              <span className="text-blue-500">Lists Effortlessly</span>
            </h1>

            <p className="text-lg text-secondary mb-10 max-w-2xl mx-auto leading-relaxed hero-desc">
              Professional Windows application for merging Microsoft Word
              AutoCorrect List (.acl) files. Combine entries from multiple
              users, detect conflicts, and deploy your merged list directly to
              your Office installation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-buttons">
              <a
                href="/ACLMerger.exe"
                download
                className="inline-flex items-center justify-center gap-2 font-medium neu-button-primary px-8 py-4 text-base shimmer-btn"
              >
                <Download className="w-5 h-5" />
                Download for Windows
              </a>
              <a
                href="https://github.com/huzaifawaqar77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-medium text-secondary neu-button hover:text-primary px-8 py-4 text-base"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>

            {/* App Preview Card */}
            <div className="mt-16 hero-preview">
              <div className="neu-card p-2 max-w-4xl mx-auto">
                <div className="neu-pressed p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400 neu-flat" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400 neu-flat" />
                      <div className="w-3 h-3 rounded-full bg-green-400 neu-flat" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-muted">
                        UIFlexer MSWORD ACLMerger
                      </span>
                    </div>
                  </div>

                  {/* Source Files Panel */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 space-y-3">
                      {/* Group header */}
                      <div className="neu-flat px-4 py-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="text-xs font-semibold text-primary">
                          MSO1033 — English (United States)
                        </span>
                        <span className="ml-auto text-xs text-muted">
                          2 file(s) — 2,850 entries
                        </span>
                      </div>
                      <div className="neu-raised p-3 flex items-center gap-3 ml-4">
                        <div className="neu-icon w-9 h-9 text-blue-500">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-primary">
                            user1/MSO1033.acl
                          </div>
                          <div className="text-xs text-muted">
                            1,509 entries
                          </div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="neu-raised p-3 flex items-center gap-3 ml-4">
                        <div className="neu-icon w-9 h-9 text-blue-500">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-primary">
                            user2/MSO1033.acl
                          </div>
                          <div className="text-xs text-muted">
                            1,341 entries
                          </div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="text-xs text-blue-500 font-medium ml-4 px-1">
                        Merged: 1,867 entries, 50 conflict(s)
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="neu-pressed p-4 text-center">
                        <div className="text-2xl font-bold text-blue-500">
                          2,850
                        </div>
                        <div className="text-xs text-muted">Total Entries</div>
                      </div>
                      <div className="neu-pressed p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-500">
                          50
                        </div>
                        <div className="text-xs text-muted">Conflicts</div>
                      </div>
                      <div className="neu-pressed p-4 text-center">
                        <div className="text-2xl font-bold text-green-500">
                          1,867
                        </div>
                        <div className="text-xs text-muted">Merged</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger-4">
            <StatCard value="10K+" label="Downloads" icon={Download} />
            <StatCard value="50K+" label="Entries Supported" icon={BookOpen} />
            <StatCard value="50ms" label="Merge Speed" icon={Zap} />
            <StatCard
              value="100%"
              label="Privacy — Offline"
              icon={ShieldCheck}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <div className="mb-4">
              <Badge className="!text-blue-600 mb-4">
                <Layers className="w-3.5 h-3.5" />
                Powerful Features
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              A complete toolkit for managing Microsoft Word AutoCorrect List
              files — merge, review, and deploy with ease
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-3">
            <FeatureCard
              icon={Combine}
              title="Smart Entry Merging"
              description="Intelligently merge AutoCorrect entries from multiple .acl files, combining unique entries without duplicates."
              color="text-blue-500"
            />
            <FeatureCard
              icon={AlertTriangle}
              title="Conflict Detection"
              description="Identify duplicate or contradictory AutoCorrect entries across all your .acl files before merging."
              color="text-yellow-500"
            />
            <FeatureCard
              icon={Monitor}
              title="Deploy to Office"
              description="Copy your merged .acl and Normal.dotm files directly to your Microsoft Office installation with one click."
              color="text-green-500"
            />
            <FeatureCard
              icon={Eye}
              title="Visual Entry Preview"
              description="Browse and review every AutoCorrect entry before and after merging with a clear, searchable table view."
              color="text-purple-500"
            />
            <FeatureCard
              icon={BookOpen}
              title="Normal.dotm Support"
              description="Handles AutoText entries, Quick Parts, custom styles, and macros stored in Normal.dotm for a complete Word experience."
              color="text-red-500"
            />
            <FeatureCard
              icon={Archive}
              title="Automatic Backups"
              description="Creates timestamped backups of existing .acl and Normal.dotm files before replacing them — never lose your data."
              color="text-cyan-500"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-24 lg:py-32 bg-secondary-section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="mb-4">
                <Badge className="!text-blue-600 mb-4">
                  <Settings className="w-3.5 h-3.5" />
                  Simple Process
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                How It Works
              </h2>
              <p className="text-lg text-secondary mb-10">
                Get started in minutes with our simple 4-step process
              </p>

              <div className="space-y-0 stagger-steps">
                <StepCard
                  step={1}
                  title="Browse & Load Files"
                  description="Click Browse Files to select individual .acl files, or Browse Folder to load all .acl files from a directory — including multiple language files like MSO1033.acl."
                  icon={FolderOpen}
                />
                <StepCard
                  step={2}
                  title="Review Entries & Conflicts"
                  description="Inspect all loaded AutoCorrect entries in the table. Duplicate or conflicting entries are flagged so you can decide how to resolve them."
                  icon={Eye}
                />
                <StepCard
                  step={3}
                  title="Merge"
                  description="Hit Merge to combine all entries into a single deduplicated AutoCorrect list ready for use in Microsoft Word."
                  icon={Combine}
                />
                <StepCard
                  step={4}
                  title="Export or Deploy"
                  description="Export the merged .acl file, or use Deploy to Office to copy it directly to your Word AppData directory — backups are created automatically."
                  icon={Download}
                />
              </div>
            </div>

            <div className="reveal-right">
              <div className="neu-card p-8">
                <div className="space-y-4">
                  <div className="neu-raised p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="neu-icon w-12 h-12 text-blue-500">
                        <FolderOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">
                          2 Files Loaded
                        </div>
                        <div className="text-xs text-muted">
                          MSO1033.acl — 2,850 total entries
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>

                  <div className="neu-raised p-5 flex items-center justify-between border border-yellow-200">
                    <div className="flex items-center gap-4">
                      <div className="neu-icon w-12 h-12 text-yellow-500">
                        <AlertTriangle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">
                          50 Conflicts Detected
                        </div>
                        <div className="text-xs text-muted">
                          Duplicate AutoCorrect entries
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted" />
                  </div>

                  <div className="neu-raised p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="neu-icon w-12 h-12 text-blue-500">
                        <Combine className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">
                          Merge Complete
                        </div>
                        <div className="text-xs text-muted">
                          1,867 unique entries
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>

                  <div className="neu-pressed p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="neu-icon w-12 h-12 text-green-500">
                        <Monitor className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">
                          Ready to Deploy
                        </div>
                        <div className="text-xs text-muted">
                          MSO1033.acl → %AppData%\Microsoft\Office
                        </div>
                      </div>
                    </div>
                    <a
                      href="/ACLMerger.exe"
                      download
                      className="inline-flex items-center justify-center gap-2 font-medium neu-button-primary px-4 py-2 text-sm"
                    >
                      Deploy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neu-card p-12 lg:p-16 text-center relative overflow-hidden reveal-zoom">
            <div className="relative z-10">
              <div className="neu-icon w-16 h-16 mx-auto mb-6 text-blue-500 float-anim">
                <Combine className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Unify Your Word AutoCorrect
                <br />
                <span className="text-blue-500">Across Every Machine</span>
              </h2>
              <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
                Download MSWORD ACL Merger today and take full control of your
                Microsoft Word AutoCorrect entries — merge, manage, and deploy
                in minutes.
              </p>
              <a
                href="/ACLMerger.exe"
                download
                className="inline-flex items-center justify-center gap-2 font-medium neu-button-primary px-8 py-4 text-base shimmer-btn"
              >
                <Download className="w-5 h-5" />
                Download for Windows
              </a>
              <p className="mt-6 text-sm text-muted">
                Free to download. Works on Windows 10 &amp; 11 with Microsoft
                Word installed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neu-card p-8 mb-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="neu-icon w-10 h-10 text-blue-500">
                    <Combine className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-primary">
                      MSWORD ACL Merger
                    </div>
                    <div className="text-xs text-muted">by UIFlexer</div>
                  </div>
                </div>
                <p className="text-secondary text-sm max-w-sm leading-relaxed">
                  Professional Windows application for merging Microsoft Word
                  AutoCorrect List (.acl) files. Merge, manage, and deploy your
                  personalized Word AutoCorrect entries with ease.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#features"
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#download"
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      Download
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      Changelog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-4">Connect</h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/huzaifawaqar77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-circle w-10 h-10 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:huzaifawaqar77@gmail.com"
                    className="neu-circle w-10 h-10 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* UIFlexer Attribution */}
          <div className="neu-raised p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted">
                © 2026 UIFlexer™ · MSWORD ACL Merger · All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-secondary">Built with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span className="text-secondary">by</span>
                <a
                  href="https://uiflexer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-badge px-3 py-1.5 text-blue-600 font-medium hover:scale-105 transition-transform inline-flex items-center gap-1"
                >
                  UIFlexer.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
