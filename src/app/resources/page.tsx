import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, getFeaturedPosts, getRecentPosts, getAllCategories } from '@/data/blogPosts';

export default function Resources() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts();
  const categories = getAllCategories();

  return (
    <div className="">
      {/* Featured Blog List Header */}
      <div className="container scheme-dark py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-neutral-white mb-8">Visa Resources & Expert Guides</h1>
            <p className="font-sans s1 text-neutral-lighter max-w-3xl mx-auto">
              A section that highlights featured blog posts to draw attention to important or trending content.
            </p>
          </div>

          {/* Featured Posts */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/resources/${post.slug}`} className="group">
                <div className="child p-0 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="relative h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-nigeria-green-darkest px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-neutral-lighter">
                      <span className="text-gold">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <h3 className="font-serif text-neutral-white mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-sans t text-neutral-lighter mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-sans t text-neutral-lighter">By {post.author}</span>
                      <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Blog List Section */}
      <div className="container scheme-light py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <div className="mb-12">
                <h2 className="font-serif gradient-text mb-8">Latest Articles</h2>
                <p className="font-sans s1">
                  A comprehensive list of blog posts, organized by date or category, showing titles, excerpts, and metadata.
                </p>
              </div>

              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/resources/${post.slug}`} className="group">
                    <article className="child p-6 rounded-lg hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className="relative h-48 md:h-32">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-nigeria-green text-neutral-white px-2 py-1 rounded text-sm">
                              {post.category}
                            </span>
                            <span className="font-sans t text-neutral-dark">{post.readTime}</span>
                            <span className="font-sans t text-neutral-dark">
                              {new Date(post.publishDate).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="font-serif gradient-text mb-3 group-hover:text-nigeria-green transition-colors">
                            {post.title}
                          </h3>
                          <p className="font-sans text-neutral-dark mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-sans t text-neutral">By {post.author}</span>
                            <div className="flex gap-2">
                              {post.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="bg-neutral-lighter text-neutral-dark px-2 py-1 rounded text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Categories */}
                <div className="child p-6 rounded-lg">
                  <h3 className="font-serif gradient-text mb-6">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const count = blogPosts.filter(post => post.category === category).length;
                      return (
                        <div key={category} className="flex justify-between items-center py-2 border-b border-neutral-lighter">
                          <span className="font-sans">{category}</span>
                          <span className="bg-nigeria-green text-neutral-white px-2 py-1 rounded-full text-xs">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="child p-6 rounded-lg">
                  <h3 className="font-serif gradient-text mb-6">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.slice(0, 3).map((post) => (
                      <Link key={post.id} href={`/resources/${post.slug}`} className="group">
                        <div className="flex gap-3">
                          <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-sans font-semibold text-sm group-hover:text-nigeria-green transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="font-sans t text-neutral-dark text-xs mt-1">
                              {new Date(post.publishDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="child p-6 rounded-lg bg-gradient-to-br from-nigeria-green to-nigeria-green-dark">
                  <h3 className="font-serif text-neutral-white mb-4">Stay Updated</h3>
                  <p className="font-sans t text-neutral-lighter mb-4">
                    Get the latest visa updates and travel tips delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 rounded border border-neutral-lighter focus:outline-none focus:border-gold"
                    />
                    <button className="w-full primary-btn py-2 rounded font-sans">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
