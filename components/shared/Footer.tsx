import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="border-t">
      <div
        className="flex-center wrapper flex-between flex 
      flex-col gap-4 p-5 text-center sm:flex-row"
      >
        <Link href="/">Vortex Events</Link>
        <p>2024 Vortex Events. All Rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
