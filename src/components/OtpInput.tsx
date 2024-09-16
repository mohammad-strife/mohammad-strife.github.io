// import { zodResolver } from "@hookform/resolvers/zod";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { z } from "zod";


// import { BsClock } from "react-icons/bs";

// const FormSchema = z.object({
//   pin: z.number().min(4, {
//     message: "Your password must be 4 characters.",
//   }),
// });

// type FormField = z.infer<typeof FormSchema>;

// export const OtpInput = ({ setStep }: any) => {
//   const { register, handleSubmit } = useForm<FormField>({
//     resolver: zodResolver(FormSchema),
//   });



//   return (

//   );
// };

// <Form {...form}>
//   <form
//     onSubmit={form.handleSubmit(onSubmit)}
//     className=" mx-auto space-y-6"
//   >
//     <FormField
//       control={form.control}
//       name="pin"
//       render={({ field }) => (
//         <FormItem>
//           <FormControl>
//             <InputOTP maxLength={4} {...field}>
//               <InputOTPGroup className="mx-auto gap-4">
//                 <InputOTPGroup>
//                   <InputOTPSlot index={0} />
//                 </InputOTPGroup>
//                 <InputOTPGroup>
//                   <InputOTPSlot index={1} />
//                 </InputOTPGroup>
//                 <InputOTPGroup>
//                   <InputOTPSlot index={2} />
//                 </InputOTPGroup>
//                 <InputOTPGroup>
//                   <InputOTPSlot index={3} />
//                 </InputOTPGroup>
//               </InputOTPGroup>
//             </InputOTP>
//           </FormControl>
//           <FormDescription className="flex justify-end items-center">
//             <span> تا دریافت مجدد کد</span>
//             <BsClock className="text-orange-500 ml-2" />
//           </FormDescription>
//         </FormItem>
//       )}
//     />
//     <div className="flex justify-center">
//       <Button
//         className="w-1/2 bg-btnOrange hover:bg-btnOrange text-black"
//         type="submit"
//       >
//         ادامه
//       </Button>
//     </div>
//   </form>
// </Form>
