import type { CSSProperties, ReactNode } from 'react'
import { Check, Lock, Play } from 'lucide-react'
import type { DemoKind } from '../data/cases'

/**
 * Зацикленные CSS-демо ключевой механики кейса. Иллюстрации, а не скриншоты:
 * сама картинка скрыта от скринридера, смысл передаёт figcaption.
 * Тайминги и reduced-motion — в styles/index.css (блок «Демо кейсов»).
 */
export function CaseDemo({ kind, caption }: { kind: DemoKind; caption: string }) {
  const Demo = demos[kind]
  return (
    <figure className="flex min-w-0 flex-col gap-3">
      <div
        className="demo flex min-h-[400px] flex-col gap-4 rounded-2xl border border-line bg-surface p-6"
        aria-hidden="true"
      >
        <Demo />
      </div>
      <figcaption className="text-[14px] text-slate">{caption}</figcaption>
    </figure>
  )
}

/** Моно-подписи: 11px — служебные, 12px — заголовки и пояснения */
const mono = 'font-mono text-[11px] text-slate'
const mono12 = 'font-mono text-[12px] text-slate'
const chip = 'rounded-md bg-paper px-2 py-1 text-ink'

function Head({ left, right }: { left: string; right: string }) {
  return (
    <div className={`flex justify-between gap-3 ${mono12}`}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  )
}

/** Две подписи в одной ячейке грида: одна гаснет, другая проявляется */
function Swap({ from, to }: { from: ReactNode; to: ReactNode }) {
  return (
    <span className="inline-grid">
      <span className="demo-out [grid-area:1/1]">{from}</span>
      <span className="demo-in [grid-area:1/1]">{to}</span>
    </span>
  )
}

function AgentDemo() {
  const fields = [
    ['Сотрудник', 'Иванов', 'demo-s2'],
    ['Маршрут', '→ Иргиз', 'demo-s3'],
    ['Автомобиль', 'Tank500', 'demo-s3'],
    ['Даты', '10–15', 'demo-s4'],
  ]
  return (
    <>
      <Head left="агент · черновик заявки" right="LangGraph → SSE" />
      <div className="demo-s1 rounded-xl border border-line bg-paper px-4 py-3.5">
        «еду с{' '}
        <Swap
          from={<span className="rounded bg-signal/15 px-1">Ивановым</span>}
          to={<span className="rounded bg-ink px-1 font-mono text-[13px] text-paper">[emp_1]</span>}
        />{' '}
        в Иргиз на Tank500 с 10 по 15»
      </div>
      <p className={`demo-s2 ${mono12}`}>имя замаскировано до модели · данные пришли снимком от Next.js</p>
      <div className="grid grid-cols-2 gap-2.5">
        {fields.map(([label, value, step]) => (
          <div key={label} className={`${step} rounded-[10px] border border-line px-3.5 py-3`}>
            <div className="text-[12px] text-slate">{label}</div>
            <div className="font-medium">{value}</div>
          </div>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-3">
        <span className="demo-pulse inline-flex items-center gap-2 rounded-full bg-accent px-[18px] py-3 text-[15px] font-medium text-paper">
          <Check size={16} />
          Подтвердить заявку
        </span>
        <span className="demo-s5 text-[13px] text-slate">создаёт человек, не агент</span>
      </div>
    </>
  )
}

function RagDemo() {
  const doc = 'rounded-lg border border-line px-2.5 py-2 text-[13px]'
  const step = 'rounded-md bg-accent-dim px-2.5 py-1.5 text-ink'
  return (
    <>
      <Head left="гибридный поиск с фильтром прав" right="RRF · rerank" />
      <div className="demo-s1 rounded-xl bg-ink px-4 py-3 text-[15px] text-paper">Какие сроки сдачи по договору поставки?</div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex min-w-0 flex-col gap-2">
          <div className={mono}>ПОЛНОТЕКСТ · tsvector</div>
          <div className={`demo-s2 ${doc}`}>Договор поставки · п. 4.2</div>
          <div className={`demo-s2 ${doc}`}>Акт приёмки · раздел 2</div>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <div className={mono}>ВЕКТОР · pgvector</div>
          <div className={`demo-s2 ${doc}`}>График работ · этап 3</div>
          <div className="demo-drop relative flex items-center gap-1.5 rounded-lg border border-dashed border-signal px-2.5 py-2 text-[13px] text-signal">
            <Lock size={14} />
            Закрытый проект
            <span className="demo-strike absolute left-2 top-1/2 h-px bg-signal" />
          </div>
        </div>
      </div>
      <p className={`demo-s3 ${mono12} text-signal`}>нет доступа → отфильтровано в SQL, модель его не видит</p>
      <div className={`demo-s3 flex flex-wrap items-center gap-2.5 ${mono12}`}>
        <span className={step}>RRF</span>→<span className={step}>rerank 30 → 8</span>→<span className={step}>агент · тулы</span>
      </div>
      <div className="demo-s4 mt-auto rounded-xl border border-accent px-4 py-3.5 text-[14px] leading-[1.5]">
        Срок по договору — в пункте 4.2, этапы расписаны в графике работ.{' '}
        <span className="font-mono text-[12px] text-accent">[1] [2]</span>
      </div>
      <p className={`demo-s5 ${mono}`}>respond_to_user · типизированный JSON · ссылки на источники</p>
    </>
  )
}

const bubbleIn = 'max-w-[80%] self-start rounded-[14px_14px_14px_4px] px-3.5 py-2.5 text-[14px]'

function ChatDemo() {
  const actions = [
    ['Отправить сообщение', ''],
    ['Перевод на оператора', ''],
    ['Сделка в amoCRM', ''],
    ['Лид в Bitrix24', 'demo-s3'],
  ]
  return (
    <div className="flex flex-1 flex-wrap gap-5">
      <div className="flex min-w-0 flex-[3_1_260px] flex-col gap-2.5">
        <div className={mono12}>чат · WebSocket</div>
        <div className="demo-s1 flex max-w-[80%] flex-col items-end gap-1 self-end">
          <div className="rounded-[14px_14px_4px_14px] bg-ink px-3.5 py-2.5 text-[14px] text-paper">
            Подскажите, есть доставка в Астану?
          </div>
          <span className="font-mono text-[11px]">
            <Swap from={<span className="text-slate">pending · tempId 7f3a</span>} to={<span className="text-accent">sent ✓</span>} />
          </span>
        </div>
        <div className={`demo-s2 ${bubbleIn} bg-paper`}>Оператор подключился к диалогу</div>
        {/* -mt-2.5 гасит gap родителя: закрытая обёртка не оставляет пустой полосы, отступ даёт mt-2.5 у дубля.
            px-px/pb-px — чтобы overflow:hidden не срезал пунктирный outline */}
        <div className="demo-dedup-wrap -mt-2.5">
          <div className="flex flex-col gap-1.5 px-px pb-px">
            <div className={`demo-dedup mt-2.5 ${bubbleIn} bg-paper outline-1 outline-dashed outline-signal`}>
              Оператор подключился к диалогу
            </div>
            <div className={`demo-dedup-note ${mono} text-signal`}>дубль по id → отброшен</div>
          </div>
        </div>
        <div className="demo-typing-wrap -mt-2.5">
          <div className="flex flex-col">
            <div className="demo-typing mt-2.5 flex items-center gap-1 self-start rounded-[14px] bg-paper px-3.5 py-3">
              {[0, 0.15, 0.3].map((d) => (
                <span
                  key={d}
                  className="demo-dot-bounce h-1.5 w-1.5 rounded-full bg-slate"
                  style={{ animationDelay: `${d}s` }}
                />
              ))}
              <span className="ml-1.5 text-[12px] text-slate">ИИ печатает</span>
            </div>
          </div>
        </div>
        <div className={`demo-s5 ${bubbleIn} bg-accent-dim`}>Да, доставляем. Оформить заказ?</div>
      </div>
      <div className="flex min-w-0 flex-[2_1_180px] flex-col gap-2 border-l border-line pl-4">
        <div className={mono12}>ActionRegistry</div>
        {actions.map(([label, step]) => (
          <div key={label} className={`${step} rounded-lg border border-line px-3 py-[9px] text-[13px]`}>
            {label}
          </div>
        ))}
        <div className="demo-s4 rounded-lg border border-accent bg-accent-dim px-3 py-[9px] text-[13px]">+ HTTP-запрос</div>
        <div className={`demo-s4 ${mono} text-accent`}>новый тип без правки ядра</div>
      </div>
    </div>
  )
}

function PipelineDemo() {
  const dots = ['demo-pos', 'demo-neg', 'demo-neu', 'demo-pos', 'demo-neu', 'demo-neg']
  const stories: [string, string[]][] = [
    ['Сюжет A', ['bg-accent demo-s1', 'bg-accent demo-s2', 'bg-slate demo-s3', 'bg-accent demo-s4']],
    ['Сюжет B', ['bg-signal demo-s2', 'bg-signal demo-s3', 'bg-slate demo-s5']],
    ['Сюжет C', ['bg-slate demo-s3', 'bg-accent demo-s4', 'bg-slate demo-s5']],
  ]
  return (
    <>
      <Head left="пайплайн · очередь на стадию" right="dead-letter общий" />
      <div className={`grid grid-cols-5 gap-1.5 ${mono}`}>
        <span>MTProto</span>
        <span>pgmq</span>
        <span>AI-обогащение</span>
        <span>кластеры</span>
        <span className="text-right">дашборд</span>
      </div>
      <div className="relative h-3">
        <div className="absolute inset-x-0 top-[5px] h-0.5 bg-line" />
        {[20, 40, 60, 80].map((x) => (
          <div key={x} className="absolute -top-1 h-5 w-px bg-line" style={{ left: `${x}%` }} />
        ))}
        {dots.map((cls, i) => (
          <span
            key={i}
            className={`demo-travel-dot absolute top-0 h-3 w-3 rounded-full ${cls}`}
            style={{ left: `${6 + i * 16}%`, animationDelay: `${-i}s` } as CSSProperties}
          />
        ))}
      </div>
      <div className={`flex flex-wrap gap-1.5 ${mono}`}>
        {['язык', 'релевантность', 'тональность', 'сущности', 'категория', 'эмбеддинг'].map((t) => (
          <span key={t} className={chip}>
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto grid grid-cols-3 gap-2.5">
        {stories.map(([name, items]) => (
          <div key={name} className="flex flex-col gap-2.5 rounded-xl border border-line p-3.5">
            <div className="text-[13px] font-medium">{name}</div>
            <div className="flex flex-wrap gap-[5px]">
              {items.map((cls, i) => (
                <span key={i} className={`h-2.5 w-2.5 rounded-full ${cls}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3.5 text-[12px] text-slate">
        {[
          ['bg-accent', 'позитив'],
          ['bg-slate', 'нейтрально'],
          ['bg-signal', 'негатив'],
        ].map(([cls, label]) => (
          <span key={label} className="flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-full ${cls}`} />
            {label}
          </span>
        ))}
      </div>
    </>
  )
}

interface Variant {
  step: string
  fill: string
  bg: string
  text: string
  label: string
  /** Логотип: форма, цвет и место отличаются у каждого аккаунта */
  logo: string
  /** true — подпись сверху, логотип снизу справа */
  flipped?: boolean
}

function VideoDemo() {
  const variants: Variant[] = [
    { step: 'demo-s2', fill: 'demo-fill-a', bg: 'bg-accent-dim', text: 'text-ink', label: 'ТЕКСТ A', logo: 'rounded-full bg-accent' },
    { step: 'demo-s3', fill: 'demo-fill-a', bg: 'bg-accent', text: 'text-paper', label: 'ТЕКСТ B', logo: 'rounded bg-paper' },
    { step: 'demo-s4', fill: 'demo-fill-b', bg: 'bg-ink', text: 'text-accent-dim', label: 'ТЕКСТ C', logo: 'rounded-full bg-accent-dim', flipped: true },
    { step: 'demo-s5', fill: 'demo-fill-b', bg: 'bg-paper', text: 'text-ink', label: 'ТЕКСТ D', logo: 'rounded bg-signal', flipped: true },
  ]
  return (
    <>
      <Head left="decode-once · всё в браузере" right="1080×1920" />
      <div className="flex flex-wrap items-center gap-[18px]">
        <div className="flex flex-none flex-col items-center gap-2">
          <div className="relative flex h-[170px] w-24 items-center justify-center overflow-hidden rounded-[10px] bg-ink text-paper">
            <Play size={28} strokeWidth={1.8} />
            <span className="demo-scan absolute inset-x-0 top-0 h-0.5 bg-accent" />
          </div>
          <span className={mono}>decode × 1</span>
        </div>
        <span className="text-slate">→</span>
        <div className="grid min-w-0 flex-[1_1_260px] grid-cols-4 gap-2.5">
          {variants.map((v, i) => {
            const logo = <span className={`h-[18px] w-[18px] ${v.logo} ${v.flipped ? 'self-end' : ''}`} />
            const label = <span className="text-[10px] font-semibold">{v.label}</span>
            return (
              <div key={v.label} className={`${v.step} flex min-w-0 flex-col gap-1.5`}>
                <div
                  className={`flex aspect-[9/16] flex-col justify-between rounded-lg border border-line p-2 ${v.bg} ${v.text}`}
                >
                  {v.flipped ? label : logo}
                  <span className="h-[26px] rounded bg-slate/60" />
                  {v.flipped ? logo : label}
                </div>
                <span className="truncate font-mono text-[10px] text-slate">@account_{i + 1}</span>
                <div className="h-1 rounded-full bg-line">
                  <div className={`${v.fill} h-1 w-full rounded-full bg-accent`} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={`mt-auto flex flex-wrap items-center gap-2 ${mono}`}>
        {['MP4Box', 'decode', 'Canvas × N', 'mp4-muxer', 'публикация'].map((t, i) => (
          <span key={t} className="flex items-center gap-2">
            {i > 0 && '→'}
            <span className={t === 'Canvas × N' ? 'rounded-md bg-accent-dim px-2 py-1 text-accent' : chip}>{t}</span>
          </span>
        ))}
      </div>
    </>
  )
}

const demos: Record<DemoKind, () => ReactNode> = {
  agent: AgentDemo,
  rag: RagDemo,
  chat: ChatDemo,
  pipeline: PipelineDemo,
  video: VideoDemo,
}
