import {
  IconCash,
  IconChatbot,
  IconClock,
  IconDispatch,
  IconDocs,
  IconEld,
  IconRoute,
  IconShield,
} from "@/components/Icons";

const map = {
  dispatch: IconDispatch,
  shield: IconShield,
  cash: IconCash,
  docs: IconDocs,
  route: IconRoute,
  clock: IconClock,
  chatbot: IconChatbot,
  eld: IconEld,
} as const;

export default function ServiceIcon({
  name,
  className,
}: {
  name: keyof typeof map;
  className?: string;
}) {
  const Icon = map[name];
  return <Icon className={className} />;
}
