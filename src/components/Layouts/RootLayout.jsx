import React from "react";
import Header from "../Header";

function RootLayout({ children }) {
  return (
    <main className="flex flex-col">
      <Header />
      {/* // header that has inside the cart and categories // children */}
      <div className="mt-16">{children}</div>
      {/* // footer that has the copy right */}
    </main>
  );
}

export default RootLayout;
