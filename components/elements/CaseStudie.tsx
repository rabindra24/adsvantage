/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PbVDo34Naoe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CaseStudy } from "@/constant";
import CustomeButton from "../custom/CustomeButton";
const CaseStudie = () =>{

    const {title, shortDesc, content , author , date} = CaseStudy[0];
 
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-center">
      <div className="container px-4 md:px-6">
        <div className=" gap-6  lg:gap-12 ">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Case Study</div>
            <h2 className="text-3xl font-bold text-gray-300 sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
             {shortDesc}
            </p>
            <CustomeButton text="Read More" link="/casestudies" classNames="mt-5"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudie;