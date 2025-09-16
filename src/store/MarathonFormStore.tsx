import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  password: "",
  confirmPassword: "",
  coupon: "",
  discount: 0,
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
  setPassword: (_password) =>
    set(() => ({
      password: _password,
    })),

  setConfirmPassword: (_conpassword) =>
    set(() => ({
      confirmPassword: _conpassword,
    })),

  setCoupon: (_coupon) =>
    set(() => ({
      coupon: _coupon,
    })),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้

  discountCupon: (plan: string, coupon: string) => {
    let price = 0;
    switch (plan) {
      case "funrun":
        price = 500;
        break;
      case "mini":
        price = 800;
        break;
      case "half":
        price = 1200;
        break;
      case "full":
        price = 1500;
        break;
      default:
        price = 0;
    }

    if (coupon === "CMU2025") {
      price = price * 0.7; // Apply 30% discount
    }
    set({ discount: price });
  },

  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
      password: "",
      confirmPassword: "",
      coupon: "",
      discount: 0,
    }),
}));
