import { ArrowRightIcon, CubeIcon, PaletteIcon, RocketLaunchIcon } from '@phosphor-icons/react/dist/ssr'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8 flex flex-col items-center justify-center space-y-12">
      <div className="fixed top-8 right-8">
        <ModeToggle />
      </div>

      {/* Header Section */}
      <section className="text-center space-y-4 max-w-2xl">
        <div className="inline-flex items-center justify-center p-3 bg-zinc-900 dark:bg-zinc-100 rounded-2xl shadow-xl mb-4">
          <RocketLaunchIcon size={32} className="text-white dark:text-black" weight="duotone" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Next.js 16 + Tailwind v4
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          A high-performance web starter template featuring shadcn-ui (v4), Phosphor Icons, and strict ESLint configuration.
        </p>
      </section>

      {/* Verification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="mb-2 p-2 bg-blue-50 dark:bg-blue-900/30 w-fit rounded-lg">
              <CubeIcon size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Next.js 16</CardTitle>
            <CardDescription>Powered by App Router and Server Components.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Leverage the latest framework features for optimized performance and developer experience.
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="mb-2 p-2 bg-emerald-50 dark:bg-emerald-900/30 w-fit rounded-lg">
              <PaletteIcon size={24} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <CardTitle>Tailwind v4</CardTitle>
            <CardDescription>Modern styling with zero-config engine.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Experience the lightning-fast CSS processing of Tailwind's next-generation compiler.
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="mb-2 p-2 bg-amber-50 dark:bg-amber-900/30 w-fit rounded-lg">
              <CubeIcon size={24} className="text-amber-600 dark:text-amber-400" />
            </div>
            <CardTitle>Type Safety</CardTitle>
            <CardDescription>Strict TypeScript & ESLint.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Maintain high code quality with @antfu/eslint-config and full TypeScript integration.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
          Get Started
          <ArrowRightIcon className="ml-2" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full px-8 border-zinc-300 dark:border-zinc-700">
          View Components
        </Button>
      </div>

      <footer className="text-zinc-500 dark:text-zinc-500 text-sm pt-8 border-t border-zinc-200 dark:border-zinc-800 w-full max-w-5xl text-center">
        Ready to build something amazing? Start with
        {' '}
        <code>pnpm dev</code>
        .
      </footer>
    </main>
  )
}
