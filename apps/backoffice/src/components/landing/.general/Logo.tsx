import React from "react";

interface Props {
  mobileMenuOpen: boolean;
}

export default function Logo({ mobileMenuOpen }: Props) {
  return (
    <>
      <img
        alt="Logo"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        className="h-8 w-auto"
      />
      {!mobileMenuOpen && (
        <span className="hidden md:flex pl-2 text-base font-bold leading-6 text-gray-900">
          Untitled UI
        </span>
      )}
    </>
  );
}
