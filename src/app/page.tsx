import { ArrowRightIcon, CubeIcon, PaletteIcon, RocketLaunchIcon } from '@phosphor-icons/react/dist/ssr'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8 flex flex-col items-center justify-center space-y-12">
      <div className="fixed top-8 right-8 flex items-center gap-2">
        <LanguageSwitcher />
        <ModeToggle />
      </div>

      {/* Header Section */}
      <section className="text-center space-y-4 max-w-2xl">
        <div className="inline-flex items-center justify-center p-3 bg-zinc-900 dark:bg-zinc-100 rounded-2xl shadow-xl mb-4">
          <RocketLaunchIcon size={32} className="text-white dark:text-black" weight="duotone" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          {t('title')}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          {t('description')}
        </p>
      </section>

      {/* Verification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="mb-2 p-2 bg-blue-50 dark:bg-blue-900/30 w-fit rounded-lg">
              <CubeIcon size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>{t('cards.nextjs.title')}</CardTitle>
            <CardDescription>{t('cards.nextjs.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {t('cards.nextjs.content')}
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="mb-2 p-2 bg-emerald-50 dark:bg-emerald-900/30 w-fit rounded-lg">
              <PaletteIcon size={24} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <CardTitle>{t('cards.tailwind.title')}</CardTitle>
            <CardDescription>{t('cards.tailwind.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {t('cards.tailwind.content')}
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="mb-2 p-2 bg-amber-50 dark:bg-amber-900/30 w-fit rounded-lg">
              <CubeIcon size={24} className="text-amber-600 dark:text-amber-400" />
            </div>
            <CardTitle>{t('cards.typesafety.title')}</CardTitle>
            <CardDescription>{t('cards.typesafety.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {t('cards.typesafety.content')}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
          {t('cta.getStarted')}
          <ArrowRightIcon className="ml-2" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full px-8 border-zinc-300 dark:border-zinc-700">
          {t('cta.viewComponents')}
        </Button>
      </div>

      <footer className="text-zinc-500 dark:text-zinc-500 text-sm pt-8 border-t border-zinc-200 dark:border-zinc-800 w-full max-w-5xl text-center">
        {t.rich('footer.text', {
          code: chunks => <code>{chunks}</code>,
        })}
      </footer>
    </main>
  )
}
