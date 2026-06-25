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
import { PublicLayout } from '@/components/layout'

const userGuideItems = [
  {
    title: '注册与登录',
    desc: '支持账号密码登录和第三方 OAuth 登录（GitHub、Discord 等），提供密码重置和新用户注册流程。',
  },
  {
    title: '个人设置',
    desc: '修改用户名和密码，绑定邮箱地址，启用两步验证，注册 Passkey 实现无密码登录，绑定第三方账号。',
  },
  {
    title: '令牌管理',
    desc: '创建新令牌，配置令牌权限，设置额度限制，配置模型访问限制，设置 IP 白名单。',
  },
  {
    title: '使用 API',
    desc: '在线 Playground 测试工具，获取 API 地址，提供 Python、cURL 等代码示例，兼容 OpenAI / Claude / Gemini 格式。',
  },
  {
    title: '聊天应用集成',
    desc: '一键配置导入，支持 Lobe Chat、AI as Workspace、AMA 问天、OpenCat 等应用集成。',
  },
  {
    title: '使用记录',
    desc: '查看调用日志，支持搜索和筛选，提供统计图表和额度消耗分析，追踪每次 API 调用的模型、Token 消耗和额度扣除。',
  },
  {
    title: '配额与充值',
    desc: '支持在线支付充值、兑换码充值、邀请返利机制，查看充值记录。支持兑换码、EPay、Stripe 等多种支付方式。',
  },
  {
    title: '订阅计划',
    desc: '查看订阅套餐，购买订阅，管理自动续费。适用于有稳定使用需求的用户周期性购买套餐。',
  },
  {
    title: '定价',
    desc: '查看模型价格，搜索特定模型，了解计费规则。全站模型定价和计费方式说明。',
  },
  {
    title: '任务',
    desc: '查看任务列表和任务详情，管理任务进度，查看和管理异步生成任务的状态和结果。',
  },
]

export function Docs() {
  return (
    <PublicLayout>
      <div className='mx-auto max-w-4xl px-6 py-16 md:py-24'>
        {/* Header */}
        <div className='mb-16'>
          <p className='text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase'>
            功能指南
          </p>
          <h1 className='text-3xl font-bold tracking-tight text-slate-900 md:text-4xl'>
            用户指南
          </h1>
          <p className='text-muted-foreground mt-4 leading-relaxed'>
            Wwfn-API
            是一个统一的 AI
            网关平台，将多个上游服务商的接口聚合为标准化的 OpenAI
            兼容 API，通过一个地址即可访问数十种模型。本指南分为用户指南和管理员指南两部分，帮助不同角色的用户快速上手。
          </p>
        </div>

        {/* Role description */}
        <div className='mb-16 grid gap-6 md:grid-cols-3'>
          {[
            {
              role: '普通用户',
              color: 'border-blue-200 bg-blue-50',
              desc: '注册后的默认角色。可创建令牌、调用 API、查看个人用量、充值和订阅。',
            },
            {
              role: '管理员',
              color: 'border-violet-200 bg-violet-50',
              desc: '由超级管理员提升。除用户权限外，可管理渠道、用户、兑换码、日志、模型和分组。',
            },
            {
              role: '超级管理员',
              color: 'border-amber-200 bg-amber-50',
              desc: '最高权限角色。在管理员能力之上，拥有全局系统设置、自定义 OAuth 和性能监控等权限。',
            },
          ].map((item) => (
            <div
              key={item.role}
              className={`rounded-xl border p-6 ${item.color}`}
            >
              <h3 className='mb-2 text-base font-semibold text-slate-900'>
                {item.role}
              </h3>
              <p className='text-sm leading-relaxed text-slate-600'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* User Guide Items */}
        <div className='space-y-8'>
          {userGuideItems.map((item) => (
            <div
              key={item.title}
              className='border-b border-slate-100 pb-8 last:border-0'
            >
              <h2 className='mb-2 text-lg font-semibold text-slate-900'>
                {item.title}
              </h2>
              <p className='leading-relaxed text-slate-500'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PublicLayout>
  )
}
