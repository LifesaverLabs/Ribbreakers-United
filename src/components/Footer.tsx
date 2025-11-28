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
            <p className="text-cream/60">
              © {new Date().getFullYear()} Ribbreakers United. Advocating for universal CPR training 
              and awareness that quality CPR often results in rib fractures—a sign you're doing it right.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
