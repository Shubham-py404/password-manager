const contact = () => {

  return (

    <div className="contact-container mx-auto w-full max-w-2xl bg-gradient-to-br from-[#181818] to-[#232526] rounded-2xl shadow-xl/30 shadow-blue-400 p-4 flex flex-col gap-5 mb-18 mt-8">
      <h2 className="text-3xl font-bold text-white  text-center tracking-wide">Connect with Me</h2>
      <div className="flex flex-col gap-3">
        {/* GitHub Card */}
        <div className="flex items-center gap-6 bg-[#23272f] hover:bg-[#2d333b] transition-colors duration-200 rounded-xl p-5 shadow-lg group">
          <div className="bg-[#181818] rounded-full p-3 shadow-md group-hover:scale-105 transition-transform duration-200">
            <svg height="40" fill="#fff" aria-hidden="true" viewBox="0 0 24 24" width="40">
              <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
            </svg>
          </div>
          <div className="flex-1">
            <a
              href="https://github.com/Shubham-py404"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200"
            >
              Shubham-py404
            </a>
            <div className="text-sm text-gray-400">GitHub</div>
          </div>
          <a
            href="https://github.com/Shubham-py404"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto p-2 rounded-full hover:bg-[#232526]/40 transition-colors"
            aria-label="Open GitHub"
          >
           <lord-icon
              src="https://cdn.lordicon.com/gsjfryhc.json"
              trigger="morph"
              state="morph-link"
              colors="primary:#ffffff,secondary:#16c72e"
              className="text-white h-8"
            ></lord-icon>
          </a>
        </div>


        {/* Instagram Card */}
        <div className="flex items-center gap-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 transition-colors duration-200 rounded-xl p-5 shadow-lg group">
          <div className="bg-white bg-opacity-10 rounded-full p-3 shadow-md group-hover:scale-105 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 50 50">
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </div>
          <div className="flex-1">
            <a
              href="https://www.instagram.com/not_shubham1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-white hover:text-pink-200 transition-colors duration-200"
            >
              not_shubham1
            </a>
            <div className="text-sm text-gray-200">Instagram</div>
          </div>
          <a
            href="https://www.instagram.com/not_shubham1/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Open Instagram"
          >
            <lord-icon
              src="https://cdn.lordicon.com/gsjfryhc.json"
              trigger="morph"
              state="morph-link"
              colors="primary:#ffffff,secondary:#16c72e"
              className="text-white h-8"
            ></lord-icon>
          </a>
        </div>


        {/* Twitter/X Card */}
        <div className="flex items-center gap-6 bg-[#1a1a1a] hover:bg-[#222] transition-colors duration-200 rounded-xl p-5 shadow-lg group">
          <div className="bg-[#222] rounded-full p-3 shadow-md group-hover:scale-105 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="#fff" height="40" viewBox="0 0 50 50">
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </div>
          <div className="flex-1">
            <a
              href="https://x.com/Shubham29427230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200"
            >
              Shubham Bansal
            </a>
            <div className="text-sm text-gray-400">Twitter / X</div>
          </div>
          <a
            href="https://x.com/Shubham29427230"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto p-2 rounded-full hover:bg-[#222]/40 transition-colors"
            aria-label="Open Twitter/X"
          >
            <lord-icon
              src="https://cdn.lordicon.com/gsjfryhc.json"
              trigger="morph"
              state="morph-link"
              colors="primary:#ffffff,secondary:#16c72e"
              className="text-white h-8"
            ></lord-icon>
          </a>
        </div>

        {/* LinkedIn Card */}
         <div className="flex items-center gap-6 bg-[#1a1a1a] hover:bg-[#222] transition-colors duration-200 rounded-xl p-5 shadow-lg group">
          <div className="bg-[#222] rounded-full p-3 shadow-md group-hover:scale-105 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
              <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path>
              <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
              <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
              <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
            </svg>
          </div>
          <div className="flex-1">
            <a
              href="https://www.linkedin.com/in/shubham-bansal-64b58027a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200"
            >
              Shubham Bansal
            </a>
            <div className="text-sm text-gray-400">LinkedIn</div>
          </div>
          <a
            href="https://www.linkedin.com/in/shubham-bansal-64b58027a/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto p-2 rounded-full hover:bg-[#222]/40 transition-colors"
            aria-label="Open LinkedIn"
          >
            <lord-icon
              src="https://cdn.lordicon.com/gsjfryhc.json"
              trigger="morph"
              state="morph-link"
              colors="primary:#ffffff,secondary:#16c72e"
              className="text-white h-8"
            ></lord-icon>
          </a>
        </div>
      </div>
    </div>
  )
}     

export default contact
