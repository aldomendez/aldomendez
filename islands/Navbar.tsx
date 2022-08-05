/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'
import {useState} from 'preact/hooks'


export default function Counter() {
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
    <nav class={tw`bg-white shadow`}>
      <div class={tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div class={tw`flex justify-between h-16`}>
          <div class={tw`flex`}>
            <div class={tw`-ml-2 mr-2 flex items-center md:hidden`}>
              {/* <!-- Mobile menu button --> */}
              <button type="button" class={tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`} aria-controls="mobile-menu" aria-expanded="false">
                <span class={tw`sr-only`}>Open main menu</span>
                {/* <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                <svg class={tw`block h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
                <svg class={tw`hidden h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class={tw`flex-shrink-0 flex items-center`}>
              <img class={tw`block lg:hidden h-8 w-auto`} src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              <img class={tw`hidden lg:block h-8 w-auto`} src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
            </div>
            <div class={tw`hidden md:ml-6 md:flex md:space-x-8`}>
              {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
              <a href="#" class={tw`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}> Dashboard </a>
              <a href="#" class={tw`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}> Team </a>
              <a href="#" class={tw`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}> Projects </a>
              <a href="#" class={tw`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}> Calendar </a>
            </div>
          </div>
          <div class={tw`flex items-center`}>
            <div class={tw`flex-shrink-0`}>
              <button type="button" class={tw`relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                {/* <!-- Heroicon name: solid/plus-sm --> */}
                <svg class={tw`-ml-1 mr-2 h-5 w-5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
                <span>New Job</span>
              </button>
            </div>
            <div class={tw`hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center`}>
              <button type="button" class={tw`bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                <span class={tw`sr-only`}>View notifications</span>
                {/* <!-- Heroicon name: outline/bell --> */}
                <svg class={tw`h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* <!-- Profile dropdown --> */}
              <div class={tw`ml-3 relative`}>
                <div>
                  <button type="button" class={tw`bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`} id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class={tw`sr-only`}>Open user menu</span>
                    <img class={tw`h-8 w-8 rounded-full`} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>

                {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
                <div class={tw`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                  {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                  <a href="#" class={tw`block px-4 py-2 text-sm text-gray-700`} role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                  <a href="#" class={tw`block px-4 py-2 text-sm text-gray-700`} role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                  <a href="#" class={tw`block px-4 py-2 text-sm text-gray-700`} role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div class={tw`md:hidden`} id="mobile-menu">
        <div class={tw`pt-2 pb-3 space-y-1`}>
          {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
          <a href="#" class={tw`bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}>Dashboard</a>
          <a href="#" class={tw`border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}>Team</a>
          <a href="#" class={tw`border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}>Projects</a>
          <a href="#" class={tw`border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}>Calendar</a>
        </div>
        <div class={tw`pt-4 pb-3 border-t border-gray-200`}>
          <div class={tw`flex items-center px-4 sm:px-6`}>
            <div class={tw`flex-shrink-0`}>
              <img class={tw`h-10 w-10 rounded-full`} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div class={tw`ml-3`}>
              <div class={tw`text-base font-medium text-gray-800`}>Tom Cook</div>
              <div class={tw`text-sm font-medium text-gray-500`}>tom@example.com</div>
            </div>
            <button type="button" class={tw`ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
              <span class={tw`sr-only`}>View notifications</span>
              {/* <!-- Heroicon name: outline/bell --> */}
              <svg class={tw`h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
          <div class={tw`mt-3 space-y-1`}>
            <a href="#" class={tw`block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6`}>Your Profile</a>
            <a href="#" class={tw`block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6`}>Settings</a>
            <a href="#" class={tw`block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6`}>Sign out</a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )

}