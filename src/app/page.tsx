import Container from "@/components/Container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import Hero from "@/components/Hero";
import Photos from "@/components/Photos";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  return (
    <main>
      <Hero />
      <Container className="mt-16 md:mt-20">
        <div className="max-w-xl mx-auto grid grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 ">
          <div>article</div>
          <div></div>
        </div>
      </Container>
    </main>
  );
}
