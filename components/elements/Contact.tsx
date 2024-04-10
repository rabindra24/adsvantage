"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Wrapper from "../custom/Wrapper";
import Link from "next/link";
import CustomeButton from "../custom/CustomeButton";
import GradientCircles from "./GradientCircles";
interface FormTypes {
  username: string;
  email: string;
  query: string;
  budget: string;
}

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  query: z.string(),
  budget: z.string(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      query: "",
      budget: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res: any) => {
        console.log(res);
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id="contact">
      <Wrapper className="">
        <h3 className="text-primary text-center text-md uppercase mb-2">
          Contact us
        </h3>
        <h4 className="text-gray-200 text-center font-bold md:text-4xl text-3xl  mb-10">
          Let&apos;s Bring Your Dream to Reality
        </h4>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-[700px] mx-auto space-y-3 relative z-10"
            id="contact"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl className="bg-transparent border-primary backdrop-filter backdrop-blur-lg bg-gray-200 bg-opacity-10 ">
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Query</FormLabel>
                  <FormControl className="bg-transparent border-primary backdrop-filter backdrop-blur-lg bg-gray-200 bg-opacity-10 ">
                    <Input placeholder="What is your requirement" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl className="bg-transparent border-primary backdrop-filter backdrop-blur-lg bg-gray-200 bg-opacity-10 ">
                    <Input placeholder="Email..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem className="bg-transparent">
                  <FormLabel>Budget</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="bg-transparent border-primary backdrop-filter backdrop-blur-lg bg-gray-200 bg-opacity-10 ">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a range " />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Less than 10,000">
                        Less Then 10,000
                      </SelectItem>
                      <SelectItem value="> 10,000">More Then 10,000</SelectItem>
                      <SelectItem value="> 20,000">More Then 20,000</SelectItem>
                      <SelectItem value="> 30,000">More Then 30,000</SelectItem>
                      <SelectItem value="> 50,000">More Then 40,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Let&apos;s Connect</Button>
          </form>
        </Form>
        <GradientCircles />
      </Wrapper>{" "}
    </div>
  );
};

export default Contact;
