import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  return (
    <main className="flex items-center justify-center py-20">
      <p className="text-xl font-semibold"> SUnki's Blog</p>
    </main>
  );
}
