import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto mt-16 py-10 px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
