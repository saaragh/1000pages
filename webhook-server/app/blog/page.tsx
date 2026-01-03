import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Blog - 1000pages',
  description: 'Explore articles about AI-powered web development, automation, and building websites with AI agents.',
  openGraph: {
    title: 'Blog - 1000pages',
    description: 'Explore articles about AI-powered web development, automation, and building websites with AI agents.',
    url: 'https://1000pages.navan.ai/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Blog</h1>
            <p className="hero-subtitle">
              Insights on AI-powered web development and automation
            </p>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <a href="/blog/building-websites-ai-agents" className="cta-link">
              Building Websites Using AI Agents
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
