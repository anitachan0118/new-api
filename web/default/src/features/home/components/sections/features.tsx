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
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'
import { Zap, Shield, Globe, Code, Gauge, DollarSign, Users, HeartHandshake } from 'lucide-react'

const features = [
  {
    id: 'fast', title: 'Lightning Fast', icon: <Zap className='size-4 text-blue-500' />, span: 'md:col-span-2',
    desc: 'Optimized network architecture ensures millisecond response times',
    visual: <div className='mt-4 grid grid-cols-3 gap-2'>{['OpenAI','Claude','Gemini','DeepSeek','Qwen','Llama'].map(n=><div key={n} className='flex items-center justify-center rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-500'>{n}</div>)}</div>
  },
  {
    id: 'secure', title: 'Secure & Reliable', icon: <Shield className='size-4 text-emerald-500' />, span: 'md:col-span-1',
    desc: 'Enterprise-grade security with comprehensive permission management',
    visual: <div className='mt-4 flex items-center justify-center'><div className='relative'><div className='flex size-16 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50'><Shield className='size-7 text-emerald-500/70' strokeWidth={1.5}/></div><div className='absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-emerald-500'><svg className='size-2.5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}><path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5'/></svg></div></div></div>
  },
  {
    id: 'global', title: 'Global Coverage', icon: <Globe className='size-4 text-violet-500' />, span: 'md:col-span-1',
    desc: 'Multi-region deployment for stable global access',
    visual: <div className='mt-4 space-y-2'>{['Load Balancing','Rate Limiting','Cost Tracking'].map((step,i)=><div key={step} className='flex items-center gap-2'><div className={`flex size-6 items-center justify-center rounded-full text-[10px] font-bold ${i===1?'border border-blue-200 bg-blue-50 text-blue-500':'border border-slate-100 bg-slate-50 text-slate-400'}`}>{i+1}</div><div className='h-px flex-1 bg-slate-100'/><span className='text-xs text-slate-500'>{step}</span></div>)}</div>
  },
  {
    id: 'developer', title: 'Developer Friendly', icon: <Code className='size-4 text-amber-500' />, span: 'md:col-span-2',
    desc: 'Compatible API routes for common AI application workflows',
    visual: <div className='mt-4 flex items-center gap-3'><div className='flex -space-x-2'>{['API','SDK','CLI','Docs'].map(n=><div key={n} className='flex size-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-slate-50 to-slate-100 text-[9px] font-bold text-slate-500'>{n}</div>)}</div><div className='flex items-center gap-1.5 text-xs text-slate-500'><Code className='size-3.5 text-blue-500'/>Multi-protocol Compatible</div></div>
  },
]

const additionalFeatures = [
  { icon: <Gauge className='size-5' strokeWidth={1.5} />, title: 'High Performance', desc: 'Support for high concurrency with automatic load balancing' },
  { icon: <DollarSign className='size-5' strokeWidth={1.5} />, title: 'Transparent Billing', desc: 'Pay-as-you-go with real-time usage monitoring' },
  { icon: <Users className='size-5' strokeWidth={1.5} />, title: 'Team Collaboration', desc: 'Multi-user management with flexible permission allocation' },
  { icon: <HeartHandshake className='size-5' strokeWidth={1.5} />, title: 'Open Source', desc: 'Community driven, self-hosted, and extensible' },
]

export function Features() {
  const { t } = useTranslation()
  const localizedFeatures = features.map(f=>({...f,title:t(f.title),desc:t(f.desc)}))
  const localizedExtra = additionalFeatures.map(f=>({...f,title:t(f.title),desc:t(f.desc)}))

  return (
    <section className='relative z-10 px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 max-w-lg'>
          <p className='text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase'>{t('Core Features')}</p>
        </AnimateInView>
        <div className='grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 md:grid-cols-3'>
          {localizedFeatures.map((f,i)=>(
            <AnimateInView key={f.id} delay={i*100} animation='scale-in' className={`bg-white p-7 transition-colors duration-300 md:p-8 ${f.span}`}>
              <div className='mb-3 flex items-center gap-2.5'><div className='flex size-6 items-center justify-center'>{f.icon}</div><h3 className='text-sm font-semibold text-slate-900'>{f.title}</h3></div>
              <p className='text-sm leading-relaxed text-slate-500'>{f.desc}</p>
              {f.visual}
            </AnimateInView>
          ))}
        </div>
        <div className='mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12'>
          {localizedExtra.map((f,i)=>(
            <AnimateInView key={f.title} delay={i*100} animation='fade-up' className='flex flex-col items-center text-center'>
              <div className='mb-3 flex size-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-500'>{f.icon}</div>
              <h3 className='mb-1.5 text-sm font-semibold text-slate-900'>{f.title}</h3>
              <p className='max-w-[200px] text-xs leading-relaxed text-slate-500'>{f.desc}</p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
