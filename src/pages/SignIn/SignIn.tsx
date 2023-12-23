import { PageLayouting } from "../../hocs";
import { memo, useState } from "react";
import {
  ActivePageTitle,
  AuthButtonContainer,
  AuthContainer,
  AuthInputsContainer,
  AuthTitleTextContainer,
  Button,
} from "../../components";
import { useForm } from "react-hook-form";
import { Alert, TextField } from "@mui/material";

const SignInPage = () => {
  const [isError, setIsError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    getValues,
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    reValidateMode: "onSubmit",
  });

  const onSubmit = async () => {
    const login = getValues("login");
    const password = getValues("password");

    const values = { login, password, };

    if (
      Object.entries(values).some((item) => {
        if (!item[1]) {
          setError(item[0], { message: "Необходимо заполнить поле" });
          return true;
        }
        return false;
      })
    ) {
      return;
    }
    
   /*  try {
      await SignIn({ login, password });
    } catch {
      setIsError(true);
    } */
  };

  return (
    <AuthContainer>
      {isError && (
        <Alert severity="error" onClick={() => setIsError(false)}>
          Что-то пошло не так
        </Alert>
      )}
      <AuthTitleTextContainer>
        <ActivePageTitle route={"/SignIn"}>Регистрация</ActivePageTitle>/
        <ActivePageTitle route={"/signIn"}>Вход</ActivePageTitle>
      </AuthTitleTextContainer>
      <AuthInputsContainer>
        <TextField
          label={"Введите логин"}
          fullWidth
          error={!!errors.login}
          helperText={errors.login?.message}
          {...register("login", { required: true })}
        />
        <TextField
          label={"Введите пароль"}
          fullWidth
          type={"password"}
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", { required: true })}
        />

      </AuthInputsContainer>
      <AuthButtonContainer>
        <Button onClick={handleSubmit(onSubmit)}>Зарегистрироваться</Button>
      </AuthButtonContainer>
    </AuthContainer>
  );
};

export default PageLayouting(memo(SignInPage));
