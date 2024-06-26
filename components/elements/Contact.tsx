"use client";
import React, { useState } from "react";
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
import GradientCircles from "./GradientCircles";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  query: z.string(),
  budget: z.string(),
});

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const { toast } = useToast();
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
      setSubmit(true);
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res: any) => {
        console.log(res);
        setSubmit(false);
        toast({
          title: "Form Submited Succesfully",
          description: "We Will Connect with You 😉",
        });
      });
    } catch (error) {
      alert(error);
      setSubmit(false);
      toast({
        variant : 'destructive',
        title: "Something Went wrong",
        description: "We Will Connect with You 😉",
      });
    }
  };

  return (
    <div id="contact">
      <Wrapper className="">
        <h2 className="text-primary text-center text-md uppercase mb-2">
          Contact us
        </h2>
        <h3 className="text-gray-200 text-center font-bold md:text-4xl text-3xl  mb-10">
          Let&apos;s Bring Your Dream to Reality
        </h3>

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
                <FormItem className="bg-transparent" >
                  <FormLabel>Budget</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    
                  >
                    <FormControl className="bg-transparent border-primary backdrop-filter backdrop-blur-lg bg-gray-200 bg-opacity-10 " >
                      <SelectTrigger aria-label="budget-trigger" aria-labelledby="choose-budget">
                        <SelectValue placeholder="Select a range " aria-label="budget-range"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent aria-label="select-budget">
                      <SelectItem aria-label="Less than 10,000" value="Less than 10,000">
                        Less Then 10,000
                      </SelectItem>
                      <SelectItem aria-label="> 10,000" value="> 10,000">More Then 10,000</SelectItem>
                      <SelectItem aria-label="> 20,000" value="> 20,000">More Then 20,000</SelectItem>
                      <SelectItem aria-label="> 30,000" value="> 30,000">More Then 30,000</SelectItem>
                      <SelectItem aria-label="> 50,000" value="> 50,000">More Then 40,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex pt-3">
              <Button type="submit" className={`${submit && "hidden"}`}>
                Let&apos;s Connect
              </Button>
              <Button disabled className={`px-10 ${!submit && "hidden"}`}>
                <Loader2 className="animate-spin" aria-label="loader"/>
              </Button>
            </div>
          </form>
        </Form>
        <GradientCircles />
      </Wrapper>
    </div>
  );
};

export default Contact;
