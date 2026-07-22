import { Flex, Navigation, Footer } from "@/app/ui-components";

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({
  children,
}: AboutLayoutProps) {
  return (
    <Flex direction="col">
      <Navigation />
      {children}
      <Footer />
    </Flex>
  );
}
