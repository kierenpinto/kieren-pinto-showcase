const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <p className="font-mono text-primary text-sm mb-4 tracking-wider">// about</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
          Building things that <span className="text-gradient">matter</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-muted-foreground leading-relaxed">
            I'm a software developer who believes in writing code that is as elegant as it is functional. 
            I focus on modern web technologies, creating applications that are fast, accessible, and a joy to use.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether it's building full-stack applications, designing APIs, or optimizing performance — I bring 
            attention to detail and a passion for clean architecture to every project I work on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
