import { Flex, Navigation } from "./ui-components";
import { TVBackground } from "./components";

export default function Home() {
  return (
    <Flex direction="col">
      <Flex direction="col" className="laptop:h-screen laptop:min-h-216">
        <Navigation />
        <TVBackground />
      </Flex>
    </Flex>
  );
}
