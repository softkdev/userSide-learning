import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("ضروری"),
  password: Yup.string().required("ضروری"),
});

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .required("ضروری")
    .min(5, "نام کاربری باید حداقل 5 حرف باشد")
    .max(16, "نام کاربری باید حداکثر 16 حرف باشد"),
  password: Yup.string()
    .required("ضروری")
    .min(8, "رمز عبور باید حداقل 8 حرف باشد")
    .max(30, "رمز عبور باید حداکثر 30 حرف باشد"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "رمز عبور یکسان نیست!")
    .required("ضروری"),
  email: Yup.string().email("ایمیل وارد شده صحیح نیست!").required("ضروری"),
  phone_number: Yup.string()
    .min(11, "شماره همراه صحیح نیست")
    .max(11, "شماره همراه صحیح نیست")
    .required("ضروری"),
});
