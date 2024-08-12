import Wrapper from "@/components/custom/Wrapper";
import { CaseStudy } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CaseStudiesById = ({ params }: { params: any }) => {
  const data = CaseStudy.filter((item) => item.id == params.id);
  const relatedCaseStudies = CaseStudy.filter((item) => item.id !== params.id);

  return (
    <div className="flex flex-col min-h-dvh" data-scroll-container>
      <header className="bg-muted py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {data[0].title}
            </h1>
            <div className="flex items-center space-x-4">
              <Image
                src={`${data[0].image}`}
                width={48}
                height={48}
                alt="Author Avatar"
                className="rounded-full"
                style={{ aspectRatio: "48/48", objectFit: "cover" }}
              />
              <div>
                <p className="text-sm font-medium">{data[0].author}</p>
                <p className="text-sm text-muted-foreground">
                  {data[0].position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Wrapper className="px-5 text-gray-400">
        <div
          dangerouslySetInnerHTML={{ __html: data[0].content }}
          className="markdown-container overflow-x-hidden space-y-4 pt-5"
        ></div>
      </Wrapper>
      <footer className=" py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-gray-300">Other CaseStudies</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {relatedCaseStudies.map((item, idx) => (
                <Link
                  href={`/casestudies/${item.id}`}
                  key={idx}
                  className="group grid h-auto w-full items-start justify-start gap-2 rounded-lg border border-primary p-3  backdrop-filter backdrop-blur-lg bg-gray-200 bg-opacity-10 pb-5"
                  prefetch={false}
                >
                  <Image
                    src="/images/banner.png"
                    alt="Related Post Image"
                    width="240"
                    height="160"
                    className="rounded-lg object-cover w-full max-h-[200px]"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium text-gray-300 group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.shortDesc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudiesById;
