import { client } from "@/api/fetchClient";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "@/components/ui/link";
import { TextField } from "@/components/ui/text-field";
import { useLocation, useParams } from "@tanstack/react-router";

export function Auth() {
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    client.POST("/api/auth/register", {
      body: {
        email: data.email as string,
        username: data.username as string,
        password: data.password as string,
      },
    });

    console.log(">>>>>>>>>>>>", data);
  }

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Form onSubmit={onSubmit} className="flex flex-col gap-y-4">
        <TextField name="email" label="Email" placeholder="Email" />
        <TextField name="password" label="Password" placeholder="Password" />
        <Button type="submit" className="self-end">
          Login
        </Button>
      </Form>
      <div>
        {isLogin && (
          <Link href={{ to }} className="w-full">
            Register
          </Link>
        )}
        {!isLogin && (
          <Link href="/login" className="w-full">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
