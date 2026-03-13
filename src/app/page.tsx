"use client";

import { motion } from "framer-motion";
import {
  Combine,
  ShieldCheck,
  AlertTriangle,
  Wand2,
  Download,
  FileJson,
  Lock,
  CheckCircle2,
  Github,
  Mail,
  ChevronRight,
  Zap,
  Eye,
  Layers,
  Files,
  Settings,
  Cpu,
  ExternalLink,
  Heart,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Components
function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 neu-badge text-xs font-medium text-secondary ${className}`}>
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
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="neu-card p-8 transition-soft hover:scale-[1.02]"
    >
      <div className={`neu-icon w-14 h-14 mb-6 ${color}`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed">{description}</p>
    </motion.div>
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
    <motion.div
      variants={fadeInUp}
      className="neu-raised p-6 text-center transition-soft hover:scale-[1.02]"
    >
      <div className="neu-icon w-12 h-12 mx-auto mb-4 text-blue-500">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-secondary">{label}</div>
    </motion.div>
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
    <div className="relative flex gap-6">
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
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="neu-raised px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="neu-icon w-10 h-10 text-blue-500">
                <Combine className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-primary">ACL Merger</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-secondary hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-secondary hover:text-primary transition-colors">How It Works</a>
              <a href="#download" className="text-sm text-secondary hover:text-primary transition-colors">Download</a>
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
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge className="!text-blue-600">
                <Zap className="w-3.5 h-3.5" />
                Now Available for Windows
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary"
            >
              Merge ACL Files
              <br />
              <span className="text-blue-500">With Confidence</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Professional Windows application for merging ACL files from Microsoft products. 
              Detect conflicts, auto-correct issues, and streamline your access control management.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a 
                href="/ACLMerger.exe"
                download
                className="inline-flex items-center justify-center gap-2 font-medium neu-button-primary px-8 py-4 text-base"
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
            </motion.div>

            {/* App Preview Card */}
            <motion.div
              variants={fadeInUp}
              className="mt-16"
            >
              <div className="neu-card p-2 max-w-4xl mx-auto">
                <div className="neu-pressed p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400 neu-flat" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400 neu-flat" />
                      <div className="w-3 h-3 rounded-full bg-green-400 neu-flat" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-muted">ACL File Merger</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 space-y-3">
                      <div className="neu-raised p-4 flex items-center gap-4">
                        <div className="neu-icon w-10 h-10 text-blue-500">
                          <FileJson className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-primary">permissions.json</div>
                          <div className="text-xs text-muted">2.4 MB</div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="neu-raised p-4 flex items-center gap-4">
                        <div className="neu-icon w-10 h-10 text-blue-500">
                          <FileJson className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-primary">access-control.json</div>
                          <div className="text-xs text-muted">1.8 MB</div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="neu-raised p-4 flex items-center gap-4 border border-yellow-200">
                        <div className="neu-icon w-10 h-10 text-blue-500">
                          <FileJson className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-primary">legacy-acl.json</div>
                          <div className="text-xs text-muted">3.1 MB</div>
                        </div>
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="neu-pressed p-4 text-center">
                        <div className="text-2xl font-bold text-blue-500">3</div>
                        <div className="text-xs text-muted">Files Ready</div>
                      </div>
                      <div className="neu-pressed p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-500">2</div>
                        <div className="text-xs text-muted">Conflicts</div>
                      </div>
                      <div className="neu-pressed p-4 text-center">
                        <div className="text-2xl font-bold text-green-500">12</div>
                        <div className="text-xs text-muted">Auto-Fixed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <StatCard value="10K+" label="Downloads" icon={Download} />
            <StatCard value="99.9%" label="Accuracy" icon={CheckCircle2} />
            <StatCard value="50ms" label="Processing" icon={Zap} />
            <StatCard value="24/7" label="Support" icon={ShieldCheck} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="!text-blue-600 mb-4">
                <Layers className="w-3.5 h-3.5" />
                Powerful Features
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-primary mb-4"
            >
              Everything You Need
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-secondary max-w-2xl mx-auto"
            >
              Streamline your ACL file management with our comprehensive suite of tools
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <FeatureCard
              icon={Combine}
              title="Smart Merging"
              description="Intelligently merge multiple ACL files with automatic conflict detection and resolution strategies."
              color="text-blue-500"
            />
            <FeatureCard
              icon={AlertTriangle}
              title="Conflict Detection"
              description="Advanced algorithms identify and highlight permission conflicts before they become security risks."
              color="text-yellow-500"
            />
            <FeatureCard
              icon={Wand2}
              title="Auto-Correction"
              description="Automatically fix common ACL issues and standardize permissions across all your files."
              color="text-green-500"
            />
            <FeatureCard
              icon={Eye}
              title="Visual Preview"
              description="Preview merged results with an intuitive visual interface before applying changes."
              color="text-purple-500"
            />
            <FeatureCard
              icon={Lock}
              title="Security First"
              description="Built-in security checks ensure your merged ACLs maintain proper access controls."
              color="text-red-500"
            />
            <FeatureCard
              icon={Files}
              title="Batch Processing"
              description="Process hundreds of files simultaneously with our optimized multi-threaded engine."
              color="text-cyan-500"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 lg:py-32 bg-secondary-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Badge className="!text-blue-600 mb-4">
                  <Settings className="w-3.5 h-3.5" />
                  Simple Process
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold text-primary mb-6"
              >
                How It Works
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-secondary mb-10"
              >
                Get started in minutes with our simple 4-step process
              </motion.p>

              <div className="space-y-0">
                <StepCard
                  step={1}
                  title="Import Your Files"
                  description="Drag and drop your ACL files or select them from your file system. Supports JSON, XML, and CSV formats."
                  icon={FileJson}
                />
                <StepCard
                  step={2}
                  title="Review Conflicts"
                  description="Our intelligent scanner identifies all conflicts and potential issues, presenting them in an easy-to-understand format."
                  icon={AlertTriangle}
                />
                <StepCard
                  step={3}
                  title="Auto-Correction"
                  description="Choose from multiple correction strategies or let our AI-powered engine suggest the best fixes automatically."
                  icon={Wand2}
                />
                <StepCard
                  step={4}
                  title="Export Results"
                  description="Download your merged, corrected ACL file in your preferred format, ready for deployment."
                  icon={Download}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="neu-card p-8">
                <div className="space-y-4">
                  <div className="neu-raised p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="neu-icon w-12 h-12 text-blue-500">
                        <FileJson className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">Import Complete</div>
                        <div className="text-xs text-muted">3 files loaded</div>
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
                        <div className="text-sm font-medium text-primary">2 Conflicts Found</div>
                        <div className="text-xs text-muted">Requires attention</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted" />
                  </div>

                  <div className="neu-raised p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="neu-icon w-12 h-12 text-blue-500">
                        <Wand2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">Auto-Correction</div>
                        <div className="text-xs text-muted">12 issues fixed</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>

                  <div className="neu-pressed p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="neu-icon w-12 h-12 text-green-500">
                        <Download className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">Ready to Export</div>
                        <div className="text-xs text-muted">Merged_ACL.json (4.2 MB)</div>
                      </div>
                    </div>
                    <a 
                      href="/ACLMerger.exe"
                      download
                      className="inline-flex items-center justify-center gap-2 font-medium neu-button-primary px-4 py-2 text-sm"
                    >
                      Export
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="neu-card p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="neu-icon w-16 h-16 mx-auto mb-6 text-blue-500">
                <Cpu className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Ready to Streamline Your
                <br />
                ACL Management?
              </h2>
              <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
                Download ACL File Merger today and experience the easiest way to manage your access control files.
              </p>
              <a 
                href="/ACLMerger.exe"
                download
                className="inline-flex items-center justify-center gap-2 font-medium neu-button-primary px-8 py-4 text-base"
              >
                <Download className="w-5 h-5" />
                Download for Windows
              </a>
              <p className="mt-6 text-sm text-muted">
                Free for personal use. Pro plans available for teams.
              </p>
            </div>
          </motion.div>
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
                  <span className="font-bold text-xl text-primary">ACL Merger</span>
                </div>
                <p className="text-secondary text-sm max-w-sm leading-relaxed">
                  Professional Windows application for merging ACL files from Microsoft products. 
                  Built with security and simplicity in mind.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#features" className="text-secondary hover:text-primary transition-colors">Features</a></li>
                  <li><a href="#download" className="text-secondary hover:text-primary transition-colors">Download</a></li>
                  <li><a href="#" className="text-secondary hover:text-primary transition-colors">Changelog</a></li>
                  <li><a href="#" className="text-secondary hover:text-primary transition-colors">Roadmap</a></li>
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
                © 2026 ACL File Merger. All rights reserved.
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
