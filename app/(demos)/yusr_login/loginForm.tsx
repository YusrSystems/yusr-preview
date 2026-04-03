"use client"

import { Button, Card, CardContent, Checkbox, cn, Field, FieldDescription, FieldGroup, PasswordField, TextField } from "@yusr_systems/ui";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">)
{
  return (
    <div className={ cn("flex flex-col gap-6", className) } { ...props }>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">أهلا بك مجددًا</h1>
                <p className="text-muted-foreground text-balance">سجل الدخول إلى حسابك</p>
              </div>

              <TextField
                label="البريد الإلكتروني"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />

              <TextField
                label="اسم المستخدم"
                id="username"
                type="text"
                placeholder="أدخل اسم المستخدم"
                required
              />

              <PasswordField
                label="كلمة المرور"
                id="password"
                placeholder="••••••••"
                required
              />

              <div className="flex items-center gap-3">
                <Checkbox
                  id="rememberMe"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  تذكرني
                </label>
              </div>

              <Field>
                <Button type="button">
                  تسجيل الدخول
                </Button>
              </Field>
              <FieldDescription className="text-center">
                لا تملك حسابًا بعد؟ <a href="#">سجل معنا</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholder.svg" alt="placeholder"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
