export function FletFooter() {
    return (
        <footer className="bg-gray-800 text-white py-8 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Left side - Legal Links */}
            <div className="mb-6 md:mb-0">
                <h4 className="font-bold text-lg mb-2">Legal</h4>
              <ul className="text-gray-300">
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Términos y condiciones
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Ofrecer mis servicios
                  </a>
                </li>
              </ul>
            </div>
    
            {/* Center - Vacancies */}
            <div className="mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Vacantes</h4>
              <ul className="text-gray-300">
                  <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Aviso de privacidad
                  </a>
                </li>
              </ul>
            </div>
    
            {/* Center - Map */}
            <div className="w-40 h-40 md:w-52 md:h-52 mb-6 md:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.983197689889!2d-89.63700879576409!3d21.03335829409738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56743a7c275ee1%3A0x87f18884e967dd09!2sC.%2024%20443%2C%20Xcumpich%2C%2097204%20M%C3%A9rida%2C%20Yuc.!5e0!3m2!1ses-419!2smx!4v1737953294121!5m2!1ses-419!2smx"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
    
            {/* Right side - Contact Info and Socials */}
            <div className="flex flex-col items-start md:items-end text-gray-300 ">
                <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                  <span > C. 24 443, Xcumpich, 97204 Mérida, Yuc.</span>
              </div>
                <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25a2.25 2.25 0 00-2.25 2.25v15a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25V3.75a2.25 2.25 0 00-2.25-2.25H10.5zm0 12.5V15m0 0l3-3m-3 3l-3-3" />
                </svg>
                  <span >9993098011</span>
              </div>
              <div className="flex space-x-4 mt-2">
                  <a href="#" className="hover:text-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  className="w-5 h-5">
                          <path d="M9 8h-3v4h3v12h5v-12h3.672l.834-4h-4.506v-2.5c0-1.099.522-2.5 2.671-2.5h1.829v-4h-3.5c-4.422 0-6.5 2.5-6.5 5.438v2.062z"/>
                      </svg>
                  </a>
                <a href="#" className="hover:text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  className="w-5 h-5">
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-6 11.5v-3.75c0-.699-.562-1.25-1.25-1.25-.687 0-1.25.551-1.25 1.25V15.5h-2.5v-6.5h2.5v1.25c.358-.529 1.006-1.25 2.047-1.25 1.59 0 2.186 1.302 2.186 3.366v3.134H14z"/>
                    </svg>
                </a>
                  <a href="#" className="hover:text-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  className="w-5 h-5">
                        <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.889 18.5H6V9.5h2.889v9zm5.222 0h-2.889V9.5h2.889v9zm5.222 0h-2.889v-5c0-1.5-1.2-2.2-2-2.2h-.095v-.007c-.088-.009-.166-.009-.242-.007l.002.007V9.5h-2.889v9h2.889v-5.108c0-1.02.643-1.5 1.5-1.5h.143c.833 0 1.5.533 1.5 1.5v5.108z"/>
                      </svg>
                    </a>
                    <a href="#" className="hover:text-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  className="w-5 h-5">
                        <path d="M20.496 4.447c-.71-2.154-2.734-3.835-5.01-4.295C13.56-.26 12 .571 12 2.296v.547c0 .393-.25.714-.616.846-3.048.663-5.695 3.14-6.374 5.91-1.17 4.75-1.125 9.43 1.11 13.433 1.734 3.137 4.568 5.38 7.797 6.055 2.15.472 4.11-.152 5.74-1.637 2.39-2.277 3.304-5.266 2.918-8.05l-.054-.219c.124-.133.236-.27.336-.41.123-.173.245-.351.36-.539.108-.18.21-.365.29-.556.08-.19.148-.384.199-.582.051-.197.088-.396.112-.597.023-.201.036-.404.036-.61V2.677c0-.168-.011-.334-.03-.496-.194-1.698-1.345-3.146-2.925-3.734zM11 14.5c-2.38 0-4.22-1.74-4.22-4.16 0-2.42 1.84-4.16 4.22-4.16 2.37 0 4.22 1.74 4.22 4.16 0 2.41-1.84 4.16-4.22 4.16zM14.36 8.806c-.21-.05-.41-.15-.58-.29-1.05-.91-2.72-1.67-4.02-1.67-1.14 0-2.2.4-2.93.82-1.07.6-1.75 1.7-1.75 2.82 0 .86.36 1.59.99 2.15.58.51 1.37.84 2.27.84 2.01 0 3.75-.98 4.32-2.54.08-.26.08-.54-.02-.79z"/>
                      </svg>
                    </a>
              </div>
            </div>
          </div>
        </footer>
      );
    };