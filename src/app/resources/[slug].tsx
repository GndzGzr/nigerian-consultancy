import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRecentPosts } from '@/data/blogPosts';
import { ConsultButton } from '@/components/core/ButtonWIcon';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getPostBySlug(params.slug);
  const recentPosts = getRecentPosts(3);

  if (!post) {
    notFound();
  }

  // Simple markdown-like content rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="font-serif gradient-text mb-6 mt-8 first:mt-0">{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="font-serif gradient-text mb-4 mt-6">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="font-serif gradient-text mb-3 mt-5">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-sans font-bold mb-3">{line.replace(/\*\*/g, '')}</p>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="font-sans mb-2 ml-4">{line.replace('- ', '')}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="font-sans mb-4">{line}</p>;
    });
  };

  return (
    <div>
      {/* Blog Post Header Section */}
      <div className="container scheme-dark py-24 relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          quality={100}
          className="object-cover opacity-30"
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <Link href="/resources" className="text-gold hover:text-neutral-white transition-colors">
              ← Back to Resources
            </Link>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <span className="bg-gold text-nigeria-green-darkest px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            {post.featured && (
              <span className="bg-lima text-nigeria-green-darkest px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            )}
          </div>
          <h1 className="font-serif text-neutral-white mb-6">{post.title}</h1>
          <div className="flex justify-center items-center gap-6 text-neutral-lighter">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Blog Post Body Section */}
      <div className="container scheme-light py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="child p-8 rounded-lg">
              <div className="font-sans s1 text-neutral-dark mb-8 italic border-l-4 border-nigeria-green pl-6">
                {post.excerpt}
              </div>
              <div className="blog-content">
                {renderContent(post.content)}
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-neutral-lighter">
                <h4 className="font-serif gradient-text mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-nigeria-green text-neutral-white px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container scheme-light-alt py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="child p-8 rounded-lg">
            <h2 className="font-serif gradient-text mb-8">What Our Clients Say About This Topic</h2>
            <blockquote className="font-sans s1 italic text-neutral-dark mb-6">
              The guidance provided in this blog post was exactly what I needed for my visa application. 
              The step-by-step approach made the complex process much more manageable.
            </blockquote>
            <div className="flex justify-center items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/avatar.jpg"
                  alt="Client testimonial"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="text-left">
                <div className="font-serif gradient-text">Sarah Okonkwo</div>
                <div className="font-sans t text-nigeria-green">Successful Applicant</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container scheme-dark py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-neutral-white mb-8">Need Personalized Assistance?</h2>
          <p className="font-sans s1 text-neutral-lighter mb-8 max-w-2xl mx-auto">
            While our blog provides comprehensive information, every visa case is unique. 
            Contact us for personalized guidance tailored to your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ConsultButton />
            <button className="secondary-btn px-6 py-3 rounded-full font-sans">
              Download Complete Guide
            </button>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="child p-6 rounded-lg">
              <div className="text-gold font-serif h5 mb-2">Expert Consultation</div>
              <p className="font-sans t text-neutral-lighter">Get personalized advice from certified consultants</p>
            </div>
            <div className="child p-6 rounded-lg">
              <div className="text-gold font-serif h5 mb-2">Document Review</div>
              <p className="font-sans t text-neutral-lighter">Professional review of your application documents</p>
            </div>
            <div className="child p-6 rounded-lg">
              <div className="text-gold font-serif h5 mb-2">Application Support</div>
              <p className="font-sans t text-neutral-lighter">End-to-end assistance throughout the process</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container scheme-light py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif gradient-text text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="child p-6 rounded-lg">
              <h3 className="font-serif gradient-text mb-3">How accurate is the information in this blog post?</h3>
              <p className="font-sans">
                All information is regularly updated and verified by our certified visa consultants. 
                However, visa requirements can change, so we recommend consulting with our experts for the most current information.
              </p>
            </div>
            <div className="child p-6 rounded-lg">
              <h3 className="font-serif gradient-text mb-3">Can I apply using only the information from this blog?</h3>
              <p className="font-sans">
                While our blogs provide comprehensive guidance, we recommend professional consultation to ensure 
                your specific circumstances are properly addressed and your application is optimized for success.
              </p>
            </div>
            <div className="child p-6 rounded-lg">
              <h3 className="font-serif gradient-text mb-3">Do you offer services mentioned in this blog post?</h3>
              <p className="font-sans">
                Yes, we offer all the services and assistance mentioned in our blog posts. 
                Contact us to discuss how we can help with your specific visa application needs.
              </p>
            </div>
            <div className="child p-6 rounded-lg">
              <h3 className="font-serif gradient-text mb-3">How often is this information updated?</h3>
              <p className="font-sans">
                We review and update our blog posts regularly to reflect current visa policies and requirements. 
                This post was last updated on {new Date(post.publishDate).toLocaleDateString()}.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="container scheme-light-alt py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif gradient-text text-center mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
              <Link key={relatedPost.id} href={`/resources/${relatedPost.slug}`} className="group">
                <div className="child p-0 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-nigeria-green text-neutral-white px-2 py-1 rounded text-xs">
                        {relatedPost.category}
                      </span>
                      <span className="font-sans t text-neutral-dark">{relatedPost.readTime}</span>
                    </div>
                    <h3 className="font-serif gradient-text mb-3 group-hover:text-nigeria-green transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="font-sans t text-neutral-dark">{relatedPost.excerpt.substring(0, 100)}...</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
