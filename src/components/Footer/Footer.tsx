export default function Footer() {
  return (
    <footer className="my-5 text-sm md:text-base">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
        <div className="">
          <div className="flex items-center">
            <img
              className="sm:m-1 md:m-1 md:mb-2 md:ml-0 md:mr-2 md:w-[3em]  sm:w-[2.5em] hp:w-[2.2em] hp:m-1 hp:mr-2"
              src="logo.svg"
              alt="logo"
            />
            <div className="flex flex-col">
              <h1 className="font-bold xl:text-xl md:text-base sm:text-base hp:text-base">
                Language Center
              </h1>
              <p className="sm:text-xs xl:text-base hp:text-xs">
                UPN VETERAN JAWA TIMUR
              </p>
            </div>
          </div>
          <div className="text-justify">
            Language Center UPN “Veteran” Jawa Timur merupakan unit pelaksana
            teknis di bidang pengembangan pembelajaran dan layanan kebahasaan
            yang mempunyai tugas melaksanakan pengembangan pembelajaran,
            peningkatan kemampuan, dan pelayanan uji kemampuan bahasa.
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xl font-semibold">Unit Pelaksana</div>
          <div>
            <ul className="space-y-3">
              <li>UPT - Telematika</li>
              <li>UPT - Perputakaan</li>
              <li>UPT - Poliklinik</li>
              <li>UPT - Pusat Bahasa</li>
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xl font-semibold">Biro</div>
          <div>
            <ul className="space-y-3">
              <li>Biro Admininstrasi Akademik</li>
              <li>Biro Rencana Anggaran Keuangan</li>
              <li>Biro Biro Adminintrasi Umum</li>
              <li>Biro Kerjasama Kemahasiswaan</li>
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xl font-semibold">Institusi</div>
          <div>
            <ul className="space-y-3">
              <li>BPM</li>
              <li>LPPM</li>
              <li>BUU</li>
              <li>Sekretariat Umum</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <hr className="h-px my-5 bg-black border-0 dark:bg-gray-700" />
        <p className="text-center">
          © 2023 All rights reserved. Pusat Bahasa UPN “Veteran” Jawa Timur
        </p>
      </div>
    </footer>
  );
}
