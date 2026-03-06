import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-5xl">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider">// contact</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Let's <span className="text-gradient">connect</span>
        </h2>
        <p className="text-muted-foreground max-w-md mb-10 leading-relaxed">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@kierenpinto.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
            <Mail size={18} />
            email
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
            <Github size={18} />
            github
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
            <Linkedin size={18} />
            linkedin
          </a>
        </div>
      </div>

      <div className="max-w-5xl mt-24 pt-8 border-t border-border">
        <p className="font-mono text-muted-foreground text-xs">
          © 2026 Kieren Pinto. Built with care.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
