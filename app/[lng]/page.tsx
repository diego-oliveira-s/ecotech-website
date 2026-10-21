"use client";
import { Button } from "@/shared/components/ui/button";
import { useBuildUrl } from "@/shared/lib/build-url";
import { cn } from "cn";
import { useT } from "next-i18next/client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { t } = useT("common");
  const buildUrl = useBuildUrl();

  const navigationLinks = [
    { name: t("home"), href: buildUrl("/") },
    { name: t("blog"), href: buildUrl("/blog") },
  ];

  return (
    <div>
      <header className="max-w-5xl mx-auto p-4 flex flex-col gap-4 md:gap-0">
        <div className="flex flex-col gap-4">
          <Image
            className="dark:invert"
            src="/Logo.png"
            alt="Ecotech logo"
            priority
            width={184}
            height={50}
          />

          <nav className="">
            <ul className={cn("flex flex-col gap-4 items-center md:flex-row")}>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2">
          <Button variant={"ghost"}>{t("login")}</Button>
          <Button>{t("signUp")}</Button>
        </div>
      </header>
    </div>
  );
}
