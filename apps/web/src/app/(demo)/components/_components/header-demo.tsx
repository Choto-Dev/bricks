import { Brain } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as Header from "@/registry/bricks/components/header";

export function HeaderDemo0() {
  return (
    <div>
      <Header.Root>
        <Header.Container>
          <Header.Group align="left" className="gap-10">
            <Header.Logo>
              <Link href={""} className="block">
                <Brain />
              </Link>
            </Header.Logo>

            <Header.Nav className="gap-7">
              <Header.NavItem asChild>
                <Link href={""} className="hover:underline">
                  Home
                </Link>
              </Header.NavItem>
              <Header.NavItem asChild>
                <Link href={""} className="hover:underline">
                  Docs
                </Link>
              </Header.NavItem>
              <Header.NavItem asChild>
                <Link href={""} className="hover:underline">
                  Bricks
                </Link>
              </Header.NavItem>
            </Header.Nav>
          </Header.Group>

          <Header.Group align="right">
            <Button>Click Here</Button>
          </Header.Group>
        </Header.Container>
      </Header.Root>
    </div>
  );
}
