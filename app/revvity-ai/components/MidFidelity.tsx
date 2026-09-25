import { Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import Image from "next/image";

export const MidFidelity = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Mid-Fidelity Wireframes 🖋️"
        description={
          <>
            With no time for lo-fi, I went straight to{" "}
            <i className="font-instrument">mid</i> and{" "}
            <i className="font-instrument">high fidelity</i>.
          </>
        }
      />
      <Flex direction="col" className="gap-2 laptop:gap-3">
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          I leveraged RevvityAI&apos;s existing <b>design system</b> to build
          mid and high-fidelity wireframes directly. Using established patterns
          and components helped me move fast without sacrificing consistency.
        </Text>
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          There was one deliberate <b>tradeoff</b>. Working within the design
          system meant less time exploring visual direction and more time
          focused on what actually mattered at this stage: interaction patterns,
          information hierarchy, and how the interface would hold up as agent
          count grew.
        </Text>
      </Flex>
      <Image
        src="/images/revvity-ai/mid-fi.png"
        alt="Mid-Fidelity Wireframes"
        width={2978}
        height={1932}
        className="w-full h-auto bg-no-repeat bg-cover"
      />
    </Flex>
  );
};
