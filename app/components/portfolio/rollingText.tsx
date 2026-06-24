import { Text } from "@/app/ui-components";

const ROLLING_TEXT =
  "Crafting meaningful experiences through intentional design.";

export const RollingText = () => (
  <div
    aria-hidden
    className="laptop:h-[172px] tablet:h-[120px] hidden tablet:block overflow-hidden bg-[url(/images/tv.png)] bg-[length:120%_auto] bg-bottom bg-no-repeat"
  >
    <div className="flex h-full items-center">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((index) => (
          <Text
            key={index}
            className="shrink-0 whitespace-nowrap px-8 font-rubik-glitch text-[48px] leading-[84%] !text-background not-italic tablet:text-[64px] laptop:text-[80px]"
          >
            {ROLLING_TEXT}
          </Text>
        ))}
      </div>
    </div>
  </div>
);
