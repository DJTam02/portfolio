import { Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";
import Image from "next/image";

export const LowFidelity = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
      <SectionHeader
        title="Low/Mid-Fidelity Wireframes 🖋️"
        description={
          <>
            With flows validated, I moved into low and mid-fidelity{" "}
            <i className="font-instrument">explorations</i>.
          </>
        }
      />
      <Flex direction="col" className="gap-2 laptop:gap-3">
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          I cycled through multiple rounds of lo-fi and mid-fi wireframes,
          exploring different layouts and interaction patterns before committing
          to a direction. Rather than designing in isolation, I treated this
          phase as a continuous conversation. I shared work early and often with
          both the product team and engineers.
        </Text>
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          Two constraints shaped every wireframing decision:
        </Text>
        <ol className="list-decimal font-alegreya text-sm tablet:text-[16px] laptop:text-[18px] pl-3 tablet:pl-4 laptop:pl-5">
          <li>
            <b>Feasibility over ambition:</b> I checked in with engineers
            continuously to ensure every interaction I explored could
            realistically be built within our timeline and budget. If it
            couldn&apos;t be built in three weeks, it didn&apos;t make it past
            lo-fi.
          </li>
          <li>
            <b>Discoverability as a design constraint:</b> I constantly asked
            myself if a scientist who had never used AI before would understand
            what Plato could do for them within seconds of interacting with it.
            If the answer was no, the layout wasn&apos;t working.
          </li>
        </ol>
      </Flex>
      <Image
        src="/images/scispot/low-fi.png"
        alt="Low/Mid-Fidelity Wireframes"
        width={2834}
        height={1492}
        className="w-full h-auto bg-no-repeat bg-cover"
      />
    </Flex>
  );
};
