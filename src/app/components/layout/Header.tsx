import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-center p-4 mt-6">
      <Image
        src="/sheAfricaLogo.png" // Direct path from "public/"
        alt="SheClusive Africa"
        width={150}
        height={50}
      />
    </header>
  );
};
