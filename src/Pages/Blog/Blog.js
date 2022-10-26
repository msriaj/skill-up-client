import React from "react";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold  sm:text-4xl text-center">
          Blogs
        </h2>

        <div className="space-y-4 pt-5 font-semibold">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              what is cors?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Cross-origin resource sharing is a mechanism that allows
              restricted resources on a web page to be requested from another
              domain outside the domain from which the first resource was
              served. A web page may freely embed cross-origin images,
              stylesheets, scripts, iframes, and video
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500 dark:text-gray-400">
              Firebase helps you develop high-quality apps, grow your user base,
              and earn more money. Each feature works independently, and they
              work even better together. <br /> Auth0, MongoDB, Passport, Okta,
              and Firebase are the most popular alternatives and competitors to
              Firebase Authentication.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How does the private route work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in)
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is Node.js? How does Node work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Node.js is a JavaScript runtime environment that achieves low
              latency and high throughput by taking a “non-blocking” approach to
              serving requests. In other words, Node.js wastes no time or
              resources on waiting for I/O requests to return
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
