import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Who should take an Online Course?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Students join our online courses for a variety of reasons and
                  come from diverse backgrounds, professions, and age groups.
                  With online courses, you can Advance your skill-set or begin a
                  career change. Take the next step in your formal education.
                  Ease the transition before entering a full-time academic
                  program. Enjoy learning a new topic. Whatever the reason, our
                  online courses are a flexible way of learning about the art
                  world without disrupting your daily life.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do I select a course?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Visit the course catalog to browse our offerings. In addition
                  to searching by course duration and availability, you can also
                  search by subject to ensure you find a course that reflects
                  your interests. Though it is not required, we encourage those
                  who have not studied art before to consider taking an art
                  history course first to get a solid grounding in the
                  discipline before exploring more specific disciplines. Our art
                  history courses are the perfect first step before moving on to
                  art market courses.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                I am a high school student, can I join?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Courses are open to all students 18 years or older. If you are
                  under 18 years old, please contact us
                  (online@sothebysinstitute.com) to discuss further.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Can I take more than one course at a time?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  If you are new to online learning, we recommend that you begin
                  with one course. As our courses are offered frequently
                  throughout the year, you can always come back and continue
                  your studies with one or more topics.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
