import logoLC from '../../assets/images/logo-lc.png'

export default function Footer() {
  return (
    <footer className='bg-[#D9E3FC] pt-4 mt-5'>
      <div className="lg:pb-24 pb-16 mx-auto">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-0 gap-y-6">
          <div className="mr-0 lg:mr-16">
            <img src={logoLC} alt="Logo" />
            <p className=''>
            Language Center UPN “Veteran” Jawa Timur merupakan unit pelaksana teknis di bidang pengembangan pembelajaran dan layanan kebahasaan yang mempunyai tugas melaksanakan pengembangan pembelajaran, peningkatan kemampuan, dan pelayanan uji kemampuan bahasa.
            </p>
          </div>
          <div className="">
            <h2 className="title-font font-semibold text-2xl mb-5">Unit Pelaksana</h2>
            <nav className="list-none list-footer space-y-5">
              <li>
                <a href="">UPT - Telematika</a>
              </li>
              <li>
                <a href="">UPT - Perpustakaan</a>
              </li>
              <li>
                <a href="">UPT - Poliklinik</a>
              </li>
              <li>
                <a href="">UPT - Pusat Bahasa</a>
              </li>
            </nav>
          </div>
          <div className="">
            <h2 className="title-font font-semibold text-2xl mb-5">Unit Pelaksana</h2>
            <nav className="list-none list-footer space-y-5">
              <li>
                <a href="">UPT - Telematika</a>
              </li>
              <li>
                <a href="">UPT - Perpustakaan</a>
              </li>
              <li>
                <a href="">UPT - Poliklinik</a>
              </li>
              <li>
                <a href="">UPT - Pusat Bahasa</a>
              </li>
            </nav>
          </div>
          <div className="">
            <h2 className="title-font font-semibold text-2xl mb-5">Unit Pelaksana</h2>
            <nav className="list-none list-footer space-y-5">
              <li>
                <a href="">UPT - Telematika</a>
              </li>
              <li>
                <a href="">UPT - Perpustakaan</a>
              </li>
              <li>
                <a href="">UPT - Poliklinik</a>
              </li>
              <li>
                <a href="">UPT - Pusat Bahasa</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-color mx-auto">
        <div className="">              
          <hr />
        </div>
        <p className="p-6 items-center text-base justify-center text-center">© 2023 All rights reserved. Pusat Bahasa UPN “Veteran” Jawa Timur
        </p>
      </div>
    </footer>
  );
}
