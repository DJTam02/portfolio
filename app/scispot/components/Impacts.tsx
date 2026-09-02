import { Callout, Flex, Text } from "@/app/ui-components";
import { SectionHeader } from "@/app/components";

export const Impacts = ({ id }: { id: string }) => {
  return (
    <Flex id={id} direction="col" className="gap-10 laptop:gap-15">
      <Flex direction="col" className="gap-3 tablet:gap-4 laptop:gap-6">
        <SectionHeader
          title="Impacts 📈"
          description={
            <>
              The <i className="font-instrument">results</i> surprised even me.
            </>
          }
        />
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          After launching the beta, the feedback from scientists was immediate
          and telling. Users didn&apos;t just tolerate Plato, they relied on it
          faster than we anticipated. The numbers speak for themselves.
        </Text>
        <Flex direction="row" className="gap-3 tablet:gap-4 laptop:gap-6">
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="tablet:text-[16px] laptop:text-[18px] laptop:font-normal">
              <b>60% reduction</b> in data analysis time.
            </Text>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Text className="tablet:text-[16px] laptop:text-[18px] laptop:font-normal">
              <b>15-20 hrs</b> of weekly routine tasks automated per researcher.
            </Text>
          </Callout>
        </Flex>
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          The qualitative feedback was also just as revealing.
        </Text>
        <Flex direction="row" className="gap-3 tablet:gap-4 laptop:gap-6">
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="tablet:text-[16px] laptop:text-[18px] laptop:font-normal">
                One user noted:
              </Text>
              <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
                &quot;I didn&apos;t expect how quickly I could rely on the
                feature&quot;
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px] laptop:font-normal">
                This was surprising especially given that we were introducing AI
                to a scientist who had never used it before.
              </Text>
            </Flex>
          </Callout>
          <Callout
            style={{ width: "100%", height: "100%" }}
            wrapperClassname="gap-1 tablet:gap-2 !flex-col justify-center laptop:!py-6 tablet:!py-4 tablet:!px-5 !px-4 !py-3"
          >
            <Flex direction="col" className="gap-1 tablet:gap-2">
              <Text className="tablet:text-[16px] laptop:text-[18px] laptop:font-normal">
                Another user said:
              </Text>
              <Text className="text-[18px] laptop:text-2xl font-bold laptop:font-normal">
                &quot;Plato feels like doing the same workflows I was used to,
                but with a little extra help to be more efficient.&quot;
              </Text>
              <Text className="tablet:text-[16px] laptop:text-[18px] laptop:font-normal">
                This was surprising especially given that we were introducing AI
                to a scientist who had never used it before.
              </Text>
            </Flex>
          </Callout>
        </Flex>
        <Text className="tablet:text-[16px] laptop:text-[18px]">
          Overall, the feedback confirmed we reached our goals of making AI feel
          invisible, present without being intrusive, which was what we had set
          out to do.
        </Text>
      </Flex>
    </Flex>
  );
};
