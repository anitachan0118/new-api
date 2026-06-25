/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSystemConfig } from '@/hooks/use-system-config'
import { Button } from '@/components/ui/button'
import { HeroTerminalDemo } from '../hero-terminal-demo'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { logo } = useSystemConfig()
  const renderDocsButton = () => (
    <Button
      variant='outline'
      className='group h-10 rounded-lg border-slate-200 bg-white px-5 text-sm font-medium shadow-sm hover:bg-slate-50'
      render={<Link to='/docs' />}
    >
      <BookOpen className='mr-1.5 size-4' />
      <span>{t('Docs')}</span>
    </Button>
  )

  return (
    <section className='relative overflow-hidden px-6 pb-20 pt-28 md:pb-28 md:pt-36'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black_20%,transparent_100%)]'
      />

      <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
        <img
          src={logo}
          alt='Logo'
          className='mb-6 size-20 rounded-2xl object-cover shadow-lg ring-1 ring-slate-200/60'
        />

        <h1 className='text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-slate-900'>
          Wwfn-API
        </h1>

        <p className='mt-3 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-transparent'>
          {t('Unified AI API Gateway')}
        </p>

        <p className='text-muted-foreground mt-4 max-w-lg text-[15px] leading-relaxed'>
          {t(
            'Access a vast selection of AI models via a standard, unified API protocol. Power your applications with one integration.'
          )}
        </p>

        <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
          {props.isAuthenticated ? (
            <>
              <Button
                className='group h-10 rounded-lg bg-slate-900 px-5 text-sm font-medium text-white hover:bg-slate-800'
                render={<Link to='/dashboard' />}
              >
                {t('Go to Dashboard')}
                <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              {renderDocsButton()}
            </>
          ) : (
            <>
              <Button
                className='group h-10 rounded-lg bg-slate-900 px-5 text-sm font-medium text-white hover:bg-slate-800'
                render={<Link to='/sign-up' />}
              >
                {t('Get Started')}
                <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              <Button
                variant='outline'
                className='h-10 rounded-lg border-slate-200 bg-white px-5 text-sm font-medium shadow-sm hover:bg-slate-50'
                render={<Link to='/pricing' />}
              >
                {t('View Pricing')}
              </Button>
              {renderDocsButton()}
            </>
          )}
        </div>

        <div className='mt-14 w-full max-w-2xl'>
          <HeroTerminalDemo className='shadow-xl shadow-slate-200/50 ring-1 ring-slate-200' />
        </div>
      </div>
    </section>
  )
}
