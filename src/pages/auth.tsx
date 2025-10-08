import { useLoginUser, useRegisterUser } from "@/api/endpoints/auth/mutations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Form } from "@/components/ui/form";
import { Link } from "@/components/ui/link";
import { TextField } from "@/components/ui/text-field";
import { useLocation, useNavigate } from "@tanstack/react-router";

export function Auth() {
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  return (
    <Container constrained className="flex h-full flex-col justify-center items-center">
      <Card className="w-full max-w-sm">
        <Card.Header>
          <Card.Title>{isLogin ? "Login" : "Create an account"}</Card.Title>
        </Card.Header>
        <Card.Content>{isLogin ? <LoginForm /> : <RegisterForm />}</Card.Content>
        <Card.Footer>
          {isLogin && (
            <Link href={{ to: "/register" }} className="w-full">
              Create an account
            </Link>
          )}
          {!isLogin && (
            <Link href={{ to: "/login" }} className="w-full">
              Already have an account? Login
            </Link>
          )}
        </Card.Footer>
      </Card>
    </Container>
  );
}

// #region RegisterForm
function RegisterForm() {
  const navigate = useNavigate();
  const { mutate: registerUser } = useRegisterUser();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    registerUser(
      {
        email: data.email as string,
        username: data.username as string,
        password: data.password as string,
      },
      {
        onSuccess: () => {
          navigate({ to: "/" });
        },
      }
    );
  }

  return (
    <Form onSubmit={onSubmit} className="flex flex-col gap-y-4">
      <TextField name="email" label="Email" placeholder="Email" />
      <TextField name="username" label="Username" placeholder="Username" />
      <TextField name="password" label="Password" placeholder="Password" />
      <Button type="submit" className="self-end">
        Register
      </Button>
    </Form>
  );
}

// #region LoginForm
function LoginForm() {
  const { mutate } = useLoginUser();
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    mutate(
      {
        email: data.email as string,
        password: data.password as string,
      },
      {
        onSuccess: () => {
          navigate({ to: "/" });
        },
      }
    );
  }
  return (
    <Form onSubmit={onSubmit} className="flex flex-col gap-y-4">
      <TextField name="email" label="Email" placeholder="Email" />
      <TextField name="password" label="Password" placeholder="Password" />
      <Button type="submit" className="self-end">
        Login
      </Button>
    </Form>
  );
}
