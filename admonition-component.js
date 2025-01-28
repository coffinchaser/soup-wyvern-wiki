import { cn } from "@/lib/utils"
import { 
  AlertCircle, 
  Info, 
  CheckCircle2, 
  AlertTriangle 
} from "lucide-react"

const admonitionTypes = {
  note: {
    icon: Info,
    className: "bg-blue-50 border-blue-500 text-blue-800"
  },
  tip: {
    icon: CheckCircle2,
    className: "bg-green-50 border-green-500 text-green-800"
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-yellow-50 border-yellow-500 text-yellow-800"
  },
  danger: {
    icon: AlertCircle,
    className: "bg-red-50 border-red-500 text-red-800"
  }
}

interface AdmonitionProps {
  type?: keyof typeof admonitionTypes
  title?: string
  children: React.ReactNode
}

export function Admonition({ 
  type = 'note', 
  title, 
  children 
}: AdmonitionProps) {
  const { icon: Icon, className } = admonitionTypes[type]

  return (
    <div className={cn(
      "p-4 border-l-4 rounded-md my-4 flex items-start space-x-4",
      className
    )}>
      <Icon className="mt-1 flex-shrink-0" />
      <div>
        {title && <div className="font-bold mb-2 capitalize">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  )
}
