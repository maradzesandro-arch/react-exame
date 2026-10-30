
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
    name: yup
        .string()
        .required("სახელის შეყვანა სავალდებულოა"),

    email: yup
        .string()
        .email("შეიყვანეთ სწორი ელფოსტის მისამართი")
        .required("ელფოსტის შეყვანა სავალდებულოა"),

    password: yup
        .string()
        .min(6, "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს")
        .required("პაროლის შეყვანა სავალდებულოა"),
});

export default function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        console.log("რეგისტრაცია განხორციელდა");
        console.log("სახელი:", data.name);
        console.log("ელფოსტა:", data.email);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>მკითხველის რეგისტრაცია</h2>

            <div>
                <label>სახელი:</label>
                <input
                    type="text"
                    placeholder="შეიყვანეთ სახელი"
                    {...register("name")}
                />
                {errors.name && (
                    <p style={{ color: "red" }}>
                        {errors.name.message}
                    </p>
                )}
            </div>


            <div>
                <label>ელფოსტა:</label>
                <input
                    type="email"
                    placeholder="შეიყვანეთ ელფოსტა"
                    {...register("email")}
                />
                {errors.email && (
                    <p style={{ color: "red" }}>
                        {errors.email.message}
                    </p>
                )}
            </div>


            <div>
                <label>პაროლი:</label>
                <input
                    type="password"
                    placeholder="შეიყვანეთ პაროლი"
                    {...register("password")}
                />
                {errors.password && (
                    <p style={{ color: "red" }}>
                        {errors.password.message}
                    </p>
                )}
            </div>

            <button type="submit">
                რეგისტრაცია
            </button>
        </form>
    );
};


