/**
 * TODOs:
 * 1. create open graph image components
 * 2. create loading components
 * 3. create not found components
 * 4. create better ui (such as, mobile, desktop, laptop and web mockup)
 */

// import * as Product from "@/registry/bricks/components/product";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as FlipCard from "@/registry/bricks/components/flip-card";

export default function Page() {
  // const product: Product.TProduct = {
  //   id: "12434412vczx213",
  //   name: "A shirt",
  //   slug: "a-shirt",
  //   price: 10,
  // };

  return (
    <div>
      <main className="p-20">
        {/* <Product.Root product={product}>
          <h1>
            <Product.Name />
          </h1>
          <p>
            <Product.Price />
          </p>
        </Product.Root> */}

        <FlipCard.Root>
          <FlipCard.Container className="w-full max-w-sm">
            <FlipCard.FrontCard>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Login to your account</CardTitle>
                  <CardDescription>
                    Enter your email below to login to your account
                  </CardDescription>
                  <CardAction>
                    <Button variant="link">Sign Up</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
                          <a
                            href="a"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                          >
                            Forgot your password?
                          </a>
                        </div>
                        <Input id="password" type="password" required />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </CardFooter>
              </Card>
            </FlipCard.FrontCard>

            <FlipCard.BackCard>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Login to your account</CardTitle>
                  <CardDescription>
                    Enter your email below to login to your account
                  </CardDescription>
                  <CardAction>
                    <Button variant="link">Sign Up</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
                          <a
                            href="a"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                          >
                            Forgot your password?
                          </a>
                        </div>
                        <Input id="password" type="password" required />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </CardFooter>
              </Card>
            </FlipCard.BackCard>
          </FlipCard.Container>
        </FlipCard.Root>
      </main>
    </div>
  );
}
