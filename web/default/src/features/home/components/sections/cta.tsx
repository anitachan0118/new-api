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
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

interface CTAProps { className?: string; isAuthenticated?: boolean }

export function CTA(props: CTAProps) {
  const { t } = useTranslation()
  if (props.isAuthenticated) return null
  return (
    <section className='border-t border-slate-100 px-6 py-20 md:py-28'>
      <div className='mx-auto max-w-xl text-center'>
        <h2 className='text-2xl font-bold tracking-tight text-slate-900 md:text-3xl'>
          {t('Ready to simplify')}<br />
          <span className='bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent'>{t('your AI integration?')}</span>
        </h2>
        <p className='text-muted-foreground mx-auto mt-4 max-w-md text-sm leading-relaxed'>
          {t('Deploy your own gateway and start routing requests through your configured upstream services.')}
        </p>
        <div className='mt-8 flex items-center justify-center gap-3'>
          <Button className='h-10 rounded-lg bg-slate-900 px-5 text-sm font-medium text-white hover:bg-slate-800' render={<Link to='/sign-up'/>}>{t('Get Started')}<ArrowRight className='ml-1.5 size-4'/></Button>
          <Button variant='outline' className='h-10 rounded-lg border-slate-200 bg-white px-5 text-sm font-medium shadow-sm hover:bg-slate-50' render={<Link to='/pricing'/>}>{t('View Pricing')}</Button>
        </div>
      </div>
    </section>
  )
}
