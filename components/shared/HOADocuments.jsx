import React from "react";

const HOADocuments = () => {
  return (
    <div>
      <section class="text-gray-600">
        <div class="container mx-auto flex flex-wrap px-5 py-24">
          <div class="-m-4 flex flex-wrap">
            <div class="p-4 md:w-full lg:w-1/2">
              <div class="flex flex-col rounded-lg border-2 border-gray-200/50 p-8 sm:flex-row">
                <div class="mb-4 inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500 sm:mb-0 sm:mr-8">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="size-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="grow">
                  <h2 class="mb-3 text-lg font-medium text-gray-900">
                    Shooting Stars
                  </h2>
                  <p class="text-base leading-relaxed">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 inline-flex items-center text-green-500">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="ml-2 size-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-full lg:w-1/2">
              <div class="flex flex-col rounded-lg border-2 border-gray-200/50 p-8 sm:flex-row">
                <div class="mb-4 inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500 sm:mb-0 sm:mr-8">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="size-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="grow">
                  <h2 class="mb-3 text-lg font-medium text-gray-900">
                    The Catalyzer
                  </h2>
                  <p class="text-base leading-relaxed">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 inline-flex items-center text-green-500">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="ml-2 size-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HOADocuments;
