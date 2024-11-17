import React, { useContext } from "react";
import Container from "./Container";
import { ArticleWithSlug } from "@/lib/article";
import { useRouter } from "next/router";
import { AppContext } from "@/app/providers";

const ArticleLayout = ({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) => {
  let router = useRouter();
  let { previousPathname } = useContext(AppContext);

  return (
    <Container>
      <div>
        <div>{previousPathname && <button></button>}</div>
      </div>
    </Container>
  );
};

export default ArticleLayout;
