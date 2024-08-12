import React from 'react';

const Page = () => {
  return (
    <div className="bg-custom-blue border-2 border-blue-500 rounded-lg p-4">
      <figure className="md:flex bg-white-150 rounded-xl p-8 md:p-0 dark:bg-white-400">
        <img className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto border-4 border-white" src="/img.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              <i> "Hi, I’m from Rahim Yar Khan and have just begun my journey in the BSCS program at KFUEIT. I’m excited to explore the world of computer science and eager to learn and grow in this field." </i>
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-yellow-500 dark:text-yellow-400"><b>muhammad faizan akram</b></div>
            <div className="text-red-700 dark:text-red-500">
              BSCS, KFUEIT
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default Page;
