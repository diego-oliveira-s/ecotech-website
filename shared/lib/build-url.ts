import { useT } from "next-i18next/client";

export function useBuildUrl() {
  const { i18n } = useT();

  return (path: string) => {
    return `/${i18n.language}${path}`;
  };
}
