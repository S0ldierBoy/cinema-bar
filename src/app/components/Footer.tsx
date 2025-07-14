import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="site-footer">
        <a href="https://github.com/S0ldierBoy/cinema-bar"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="GitHub repository">
          <Github size={'24px'} color={'red'} />
        </a>

      </div>
    </footer>
  );
};

export default Footer;