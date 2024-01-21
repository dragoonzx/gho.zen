'use client';

import Image from 'next/image';
import { ConnectKitButton } from 'connectkit';

export default function Home() {
  return (
    <main className="relative flex flex-col grow">
      <nav className="flex absolute z-50 top-6 w-full">
        <div className="px-8 w-full flex justify-between items-center container mx-auto">
          <a href="/" className="text-xl font-bold">
            GHO.ZEN
          </a>
          <ConnectKitButton />
        </div>
      </nav>
      <main className="relative flex flex-col grow">
        <div className="h-[80vh] overflow-hidden min-h-[600px] bg-[#171715] z-10">
          <div className="p-10 w-full h-full mx-auto flex flex-col justify-center gap-10 container">
            <div className="relative w-full">
              <h1 className="w-full text-7xl">
                <span className="block">Your pay widget</span>
                <span className="block">in one button</span>
              </h1>
            </div>
            <div>
              <button className="rounded-full bg-[#f7f7f7] text-[#0b0b0b] text-md border px-8 py-4 flex items-center space-x-2">
                <svg
                  viewBox="0 0 190 143"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-[19px] w-[25px] rotate-90 fill-vodka dark:fill-violet "
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M69.012 0h51.856l16.29 27.068h-67.85v.002c-23.695 0-42.904 19.694-42.904 43.986 0 24.066 18.85 43.618 42.24 43.982h87.646l-26.398-43.979h33.004l26.399 43.979h.303v27.028H69.308v.047c-.844 0-1.684-.016-2.52-.047h-3.066v-.181C28.057 138.969 0 108.371 0 71.056 0 31.915 30.87.164 69.012.001V0ZM79.21 51.016c0 7.475-5.91 13.535-13.202 13.535-7.29 0-13.201-6.06-13.201-13.535 0-7.475 5.91-13.535 13.201-13.535 7.292 0 13.202 6.06 13.202 13.535Zm-13.202 51.017c7.292 0 13.202-6.06 13.202-13.535 0-7.475-5.91-13.535-13.202-13.535-7.29 0-13.201 6.06-13.201 13.535 0 7.475 5.91 13.535 13.201 13.535Z"
                  ></path>
                </svg>
                <span>PAY WITH GHO</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex -mt-10 pt-10 text-[#0b0b0b] h-20 overflow-hidden whitespace-nowrap bg-[#e6fd3a] relative justify-center">
          <a target="_blank" className="flex items-center">
            <div className="text-sm">BETA ON SEPOLIA TESTNET</div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className=" ml-1 rounded-full p-[1px] text-[#f7f7f7] bg-[#0b0b0b]"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
            </svg>
          </a>
        </div>
      </main>
    </main>
  );
}
