type ConditionalRendererProps = {
  if: boolean;
  then?: React.ReactNode;
  otherwise?: React.ReactNode;
  children?: React.ReactNode;
};

export default function ConditionalRenderer({
  if: condition,
  then,
  otherwise,
  children,
}: ConditionalRendererProps) {
  return condition ? then ?? children : otherwise ?? null;
}
