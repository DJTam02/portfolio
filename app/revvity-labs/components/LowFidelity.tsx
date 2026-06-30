import { Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import Image from "next/image";

export const LowFidelity = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Low-Fidelity Wireframes 🖋️"
        description={
          <>
            Using{" "}
            <span className="italic font-instrument">validated workflows</span>,
            I began sketching layouts and interaction patterns.
          </>
        }
      />
      <Flex direction="col" className="gap-2 laptop:gap-3">
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          In low-fidelity, speed was essential. A few constraints shaped this
          phase:
        </Text>
        <ol className="list-decimal font-alegreya text-sm tablet:text-[16px] laptop:text-[18px] pl-3 tablet:pl-4 laptop:pl-5">
          <li>
            <b>Feasibility first:</b> we synced continuously with AI engineers
            to ensure every interaction we explored could feasibly be built
            within the sprint.
          </li>
          <li>
            <b>Design system only:</b> relying exclusively on existing tokens
            and reusable components kept implementation fast and consistent.
          </li>
        </ol>
      </Flex>
      <Image
        src="/images/revvity-labs/wireframes.png"
        alt="Low-Fidelity Wireframes"
        width={2854}
        height={1668}
        className="w-full h-auto bg-no-repeat bg-cover"
      />
    </Flex>
  );
};
