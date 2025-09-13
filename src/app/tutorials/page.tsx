
"use client";

import * as React from "react";
import { Header } from "@/components/header";
import { tutorialItems } from "@/lib/placeholder-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { ScrollAnimationWrapper } from "@/components/scroll-animation";
import { ContactSection } from "@/components/sections/contact";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const ITEMS_PER_PAGE = 6;

const categories = ["All", ...Array.from(new Set(tutorialItems.map(item => item.category)))];

export default function TutorialsPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredItems = React.useMemo(() => {
    let items = tutorialItems;

    // Filter by category
    if (selectedCategory !== "All") {
      items = items.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      items = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return items;
  }, [selectedCategory, searchQuery]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);
  
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[300px] w-full bg-animated-blur -z-10" />
            <ScrollAnimationWrapper>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Tutorials & Articles
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A collection of articles and tutorials I've written about software development, cloud, and more.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
          
          <ScrollAnimationWrapper>
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
                <Input
                  type="search"
                  placeholder="Search tutorials..."
                  className="pl-12 w-full h-14 bg-background/30 backdrop-blur-xl border border-white/20 rounded-xl shadow-primary/20 shadow-[0_0_25px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-center flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollAnimationWrapper>

          {currentItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((item, index) => (
                <ScrollAnimationWrapper key={item.id} animation="slide-up" delay={index * 100}>
                  <Link href={`/tutorials/${item.id}`} className="block h-full group">
                    <Card className="overflow-hidden transition-all duration-300 flex flex-col shadow-lg hover:shadow-2xl bg-card dark:bg-slate-900/50 dark:border-white/20 h-full">
                      <CardHeader className="p-0">
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-ai-hint={item.imageHint}
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <span className="text-sm font-semibold text-primary mb-2">{item.category}</span>
                        <CardTitle className="text-card-foreground dark:text-white text-xl font-bold">{item.title}</CardTitle>
                        <CardDescription className="mt-2 text-muted-foreground dark:text-slate-300 flex-grow">{item.description}</CardDescription>
                        <div className="p-0 h-auto mt-4 self-start text-primary font-semibold flex items-center">
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollAnimationWrapper>
              ))}
            </div>
          ) : (
             <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No tutorials found for your search.</p>
            </div>
          )}
          
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}

        </div>
      </main>
      <ContactSection />
      <footer className="py-8 bg-slate-900">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Zulfikar Achyar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

    