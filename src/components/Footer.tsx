const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ribbreakers United
          </h3>
          <p className="text-cream/80 text-lg mb-6 max-w-2xl mx-auto">
            Uniting the CPR community worldwide to normalize life-saving chest compressions 
            and overcome bystander hesitation.
          </p>
          <div className="border-t border-primary-foreground/20 pt-6 mt-6">
            <p className="text-cream/80 text-sm mb-3">
              An Initiative of <strong>Lifesaver Labs</strong> and <strong>Naybor SOS</strong> / Neighbor 112/911/119/15/etc.
            </p>
            <p className="text-cream/70 text-sm mb-3">
              All content is dedicated to the public domain under{" "}
              <a 
                href="https://creativecommons.org/publicdomain/zero/1.0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-primary-foreground transition-colors"
              >
                Creative Commons CC0 1.0 Universal
              </a>
              . Free to rebuild, remix, improve, branch, and fork.
            </p>
            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} Lifesaver Labs. Advocating for universal CPR training 
              and awareness that quality CPR often results in rib fractures—a sign you're doing it right.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
